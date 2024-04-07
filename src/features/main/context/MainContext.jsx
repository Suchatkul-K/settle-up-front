import React, { createContext, useEffect, useState } from "react";
import {
  getCircleBillByCircleId,
  getCircleByCircleId,
  getCircleMemberByCircleId,
  switchAllbillsActivation,
} from "../../../api/main";
import { useParams } from "react-router-dom";
import { storeToken } from "../../../utils/local-storage";
import * as constance from "../../../constance";
import { toast } from "react-toastify";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [circleData, setCircleData] = useState(null);
  const [circleMember, setCircleMember] = useState(null);
  const [circleBill, setCircleBill] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const { circleId } = useParams();

  const memberIds = circleMember?.map((el) => el.id);
  const memberExpense = {};

  //set each member expense
  memberIds?.map((id) => {

    //only active bill
    let allBill = circleBill.reduce(
      (acc, el) =>
        el.isActive
          ? acc.concat(el.participant.filter((part) => part.memberId == id))
          : acc,
      []
    );
    // console.log(allBill)
    // console.log(circleBill)
    let spending = 0;
    allBill?.map((billObj) => {
      if (billObj.role == constance.ROLE.CREDITOR) {
        spending += +billObj.fixedValue;
      } else if (billObj.splitMethod == constance.SPLITMETHOD.FIXED) {
        spending -= +billObj.fixedValue;
      } else {
        spending -= +billObj.percentValue;
      }
    });
    memberExpense[id] = spending;
  });
  // console.log(memberExpense)

  const fetchCircleData = async () => {
    try {
      const res = await getCircleByCircleId(circleId);
      storeToken(res.data.accessToken);
      setCircleData(res.data.circleData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCircleMember = async () => {
    try {
      const res = await getCircleMemberByCircleId(circleId);
      setCircleMember(res.data.members);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCircleBill = async () => {
    try {
      const res = await getCircleBillByCircleId(circleId);
      setCircleBill(res.data.bills);
    } catch (error) {
      console.log(error);
    }
  };

  const init = async () => {
    try {
      //force to await circleData
      await fetchCircleData();
      await fetchCircleMember();
      await fetchCircleBill();
    } catch (error) {
      console.log(error);
    }
  };

  const deactivateBills = async () => {
    try {
      const res = await switchAllbillsActivation(circleId, {isActive: false})
      console.log(res.data)
      toast.success("Deactivated All bills")
      fetchCircleBill()
    } catch (error) {
      console.log(error)
    }
  }

  const activateBills = async () => {
    try {
      const res = await switchAllbillsActivation(circleId, {isActive: true})
      console.log(res.data)
      toast.success("Activated All bills")
      fetchCircleBill()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (circleId) {
      setLoading(true);
      init();
      setLoading(false);
    }
  }, [circleId, reload]);

  useEffect(() => {}, [loading]);

  return (
    <MainContext.Provider
      value={{
        circleData,
        circleId,
        circleMember,
        circleBill,
        setCircleMember,
        setCircleBill,
        memberExpense,
        setLoading,
        loading,
        reload,
        setReload,
        deactivateBills,
        activateBills
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
