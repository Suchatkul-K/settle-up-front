import React, { createContext, useEffect, useState } from "react";
import {
  getCircleBillByCircleId,
  getCircleByCircleId,
  getCircleMemberByCircleId,
} from "../../../api/main";
import { useParams } from "react-router-dom";
import { storeToken } from "../../../utils/local-storage";
import * as constance from "../../../constance"

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [circleData, setCircleData] = useState(null);
  const [circleMember, setCircleMember] = useState(null);
  const [circleBill, setCircleBill] = useState([]);
  const [loading, setLoading] = useState(false)
  const { circleId } = useParams();
  // console.log( circleId )
  // console.log(circleData)
  // console.log(circleBill)

  const memberIds = circleMember?.map((el) => el.id);
  const memberExpense = {};

  // console.log("Member ids", memberIds);

  memberIds?.map(id => {
    let allBill = (circleBill.reduce((acc,el) => acc.concat(el.participant.filter(part => (part.memberId == id))),[]));
    let spending = 0;
    allBill?.map((billObj) => {
    if (billObj.role == constance.ROLE.CREDITOR) {
      spending += (+billObj.fixedValue);
    } else if (billObj.splitMethod == constance.SPLITMETHOD.FIXED) {
      spending -= (+billObj.fixedValue);
    } else {
      spending -= (+billObj.percentValue);
    }
    });
    memberExpense[id] = spending
  })
  // console.log(memberExpense)

  useEffect(() => {
    if (circleId) {
      console.log("loaddddddd")
      getCircleByCircleId(circleId)
        .then((res) => {
          // console.log(res)
          storeToken(res.data.accessToken);
          setCircleData(res.data.circleData);
          // console.log(circleData)
        })
        .catch((err) => console.log(err));

      getCircleMemberByCircleId(circleId)
        // .then(res => console.log(res.data.members))
        .then((res) => setCircleMember(res.data.members))
        .catch((err) => console.log(err));

      getCircleBillByCircleId(circleId)
        // .then(res => console.log(res.data.bills))
        .then((res) => setCircleBill(res.data.bills))
        .catch((err) => console.log(err));
    }
  }, [circleId,loading]);

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
        loading
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
