import { createContext, useState } from "react";
import useMain from "../../../hooks/use-main.js";
import * as mainApi from "../../../api/main.js";
import { useNavigate } from "react-router-dom";

export const BillContext = createContext();

const initial = {
  title: "",
  creditor: [],
  debtor: [],
  billDate: new Date().toISOString().slice(0, 10),
  summary: 0,
};

// const credit = {
//   name: "sad",
//   amount: 1234
// }

// const debt = {
//   name: "sada",
//   amount: 100,
//   splitMethod: FIXED
// }

export default function BillContextProvider({ children }) {
  const [billSummary, setBillSummary] = useState(initial);
  const [createForm, setCreateForm] = useState(true);
  const { circleId, setCircleBill, reload, setReload } = useMain();

  // Bill summary

  // {
  // billDate : "2024-02-21",
  // creditor : [
  //     {id: 2, name: 'aa', amount: '1234'}
  // ],
  // debtor : [
  //     {id: 4, name: 'This is a bot', amount: '1200', splitMethod: 'FIXED'},
  //     {id: 5, name: 'This is a bot 2', amount: '1', splitMethod: 'SHARE'},
  //     {id: 6, name: 'This is a bot 3', amount: '1', splitMethod: 'SHARE'},
  // ],
  // sharedDebtor : 2,
  // amount: 1234,
  // summary : 34,
  // title : "aaa",
  // valuePerShare : 17
  // }

  const submitBill = async () => {
    if (createForm) {
      // create bill
      const res = await mainApi.createBill(circleId, billSummary);
      console.log(res.data);
    } else {
      //edit bill
      console.log(circleId, billSummary);
      const data = { ...billSummary };
      delete data.id;
      const res = await mainApi.updateBillByBillId(
        circleId,
        billSummary.id,
        data
      );
      console.log(res.data);
    }

    //update bill list
    setReload(!reload);

    setBillSummary(initial);
    setCreateForm(true);
    document.getElementById("bill_summary_modal").close();
  };

  const deleteBill = async () => {
    //delete bill
    await mainApi.deleteBillByBillId(circleId, billSummary.id);

    //reset form
    setBillSummary(initial);

    //update bill list
    setReload(!reload);

    document.getElementById("bill_summary_modal").close();
  };

  const switchActivation = async () => {
    const data = {isActive: !billSummary.isActive}
    const res = await mainApi.updateBillByBillId(
      circleId,
      billSummary.id,
      data
    );
    console.log(res.data);

    //update bill list
    setReload(!reload);

    setBillSummary(initial);
    setCreateForm(true);
    document.getElementById("bill_summary_modal").close();
  }
  
  return (
    <BillContext.Provider
      value={{
        billSummary,
        setBillSummary,
        submitBill,
        setCreateForm,
        createForm,
        deleteBill,
        switchActivation,
      }}
    >
      {children}
    </BillContext.Provider>
  );
}
