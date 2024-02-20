import React, { useState } from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import DebtorData from "./DebtorData";
import CreditorData from "./CreditorData";
import { AddIcon } from "../../../icons";
import useMain from "../../../hooks/use-main";
import { toast } from "react-toastify";
import validateBill from "../validations/validate-bill";

const splitMethod = {
  FIXED: "FIXED",
  SHARE: "SHARE",
  // MIXED: "MIXED",
};

const initial = {
  title: "",
  creditor: [],
  debtor: [],
  billDate: new Date().toISOString().slice(0, 10),
};

const defaultCreditor = {
  id: -1,
  amount: 0,
  member: {},
};

const defaultDebtor = {
  id: -1,
  amount: 0,
  splitMethod: splitMethod.FIXED,
  member: {},
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

function BillForm() {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState();
  const [creditorData, setCreditorData] = useState(defaultCreditor);
  const [debtorData, setDebtorData] = useState(defaultDebtor);
  const [billSummary, setBillSummary] = useState({ ...initial, summary: 0 });
  const { circleId, circleMember } = useMain();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCreditorData = (e) => {
    setCreditorData({ ...creditorData, [e.target.name]: e.target.value });
  };

  const handleDebtorData = (e) => {
    setDebtorData({ ...debtorData, [e.target.name]: e.target.value });
  };

  const addCreditor = (memberId, amount = 0) => {
    if (memberId == -1) {
      return toast.error("Please select any user");
    }
    let creditor = [...input.creditor];

    if (creditor.filter((el) => el.id == memberId)[0]) {
      return toast.error("Cannot add same creditor");
    } else {
      let member = circleMember.filter((member) => member.id == memberId)[0];

      creditor.push({ id: member.id, name: member.name, amount, member });
      setInput({ ...input, creditor });
    }
  };

  const addDebtor = (memberId, amount = 0, splitMethod) => {
    // console.log(memberId,amount,splitMethod)
    if (memberId == -1) {
      return toast.error("Please select any user");
    }
    let debtor = [...input.debtor];

    if (debtor.filter((el) => el.id == memberId)[0]) {
      return toast.error("Cannot add same debtor");
    } else {
      let member = circleMember.filter((member) => member.id == memberId)[0];

      debtor.push({
        id: member.id,
        name: member.name,
        amount,
        splitMethod,
        member,
      });
      setInput({ ...input, debtor });
    }
  };

  const onCancel = () => {
    console.log("cancel")
    setInput(initial);
    setDebtorData(defaultDebtor);
    setCreditorData(defaultCreditor);
    document.getElementById("create_bill_modal").close();
  };

  const onSummary = () => {
    console.log(input);
    const sumCreditor = input.creditor.reduce(
      (sum, acc) => sum + +acc.amount,
      0
    );
    // console.log(sumCreditor)
    const fixedDebtor = input.debtor.reduce((sum, acc) => {
      return acc.splitMethod == splitMethod.FIXED ? sum + +acc.amount : sum;
    }, 0);
    // console.log(sumCreditor)
    // console.log(fixedDebtor)
    const sharedDebtor = input.debtor.reduce((sum, acc) => {
      return acc.splitMethod == splitMethod.SHARE ? sum + +acc.amount : sum;
    }, 0);

    setBillSummary({
      ...input,
      summary: sumCreditor - fixedDebtor,
      sharedDebtor,
    });
    console.log(billSummary);

    const errObj = validateBill(billSummary);
    if (errObj) {
      // console.dir(errObj);
      if (billSummary.sharedDebtor > 0) {
        delete errObj.summary;
      }
      console.log("return", errObj)
      return setError(errObj);
    }

    // document.getElementById("bill_summary_modal").showModal()
    onCancel()
  };

  return (
    <Modal id={"create_bill_modal"} onSubmit={() => {onSummary}}>
      <div className="form-control items-center gap-6 w-full px-6">
        <div className="text-2xl font-semibold text-center">Bill details</div>
        <input
          type="text"
          placeholder="What have you spent on this time?"
          className="input input-bordered w-full max-w-xs"
          name="title"
          value={input.title}
          onChange={handleChange}
        />
        {error?.title && (
          <span className="flex text-error start-0">{error.title}</span>
        )}

        {/* Creditor */}
        <div className="form-control w-full gap-1">
        <div className="font-bold">Who paid:</div>
          
          {/* creditor array  */}
          {input.creditor.map((creditor) => (
            <CreditorData
              key={creditor.id}
              name={creditor.name}
              amount={creditor.amount}
              member={creditor.member}
            />
          ))}
          {/* memberSelection */}
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title bg-primary text-md font-semibold flex justify-center items-center">
              <AddIcon className={"w-6 h-6"} />
              Add more creditor
            </div>
            <div className="collapse-content px-2 py-2 ">
              <div className="flex gap-4 w-full">
                <select
                  className="select select-bordered"
                  name="id"
                  onChange={handleCreditorData}
                  defaultValue={-1}
                >
                  <option disabled value={-1}>
                    select
                  </option>
                  {circleMember &&
                    circleMember.map((member) => (
                      <option key={member.id} value={member.id}>
                        {member.name}
                      </option>
                    ))}
                </select>
                <input
                  className="border border-base-300 rounded-md w-36 ps-4"
                  type="number"
                  placeholder="amount"
                  name="amount"
                  onChange={handleCreditorData}
                />
                <div>
                  <div
                    className="btn join-item"
                    onClick={() => {
                      addCreditor(creditorData.id, creditorData.amount);
                    }}
                  >
                    add
                  </div>
                </div>
              </div>
            </div>
          </div>
          {error?.creditor && (
            <span className="flex text-error start-0">{error.creditor}</span>
          )}
        </div>

        {/* Debtor */}
        <div className="form-control w-full gap-1">
          <div className="font-bold">For whom:</div>
          {/* Debtor array  */}
          {input.debtor.map((debtor) => (
            <DebtorData
              key={debtor.id}
              name={debtor.name}
              amount={debtor.amount}
              splitMethod={debtor.splitMethod}
              member={debtor.member}
            />
          ))}
          {/* memberSelection */}
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title bg-primary text-md font-semibold flex justify-center items-center">
              <AddIcon className={"w-6 h-6"} />
              Add more debtor
            </div>
            <div className="collapse-content px-0 py-2 ">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex w-full justify-between gap-4">
                  {/* select user */}
                  <select
                    className="select select-bordered grow"
                    name="id"
                    onChange={handleDebtorData}
                    defaultValue={-1}
                  >
                    <option disabled value={-1}>
                      select
                    </option>
                    {circleMember &&
                      circleMember.map((member) => (
                        <option key={member.id} value={member.id}>
                          {member.name}
                        </option>
                      ))}
                  </select>
                  {/* select method */}
                  <select
                    className="select select-bordered w-28"
                    name="splitMethod"
                    onChange={handleDebtorData}
                    defaultValue={splitMethod.FIXED}
                  >
                    {Object.values(splitMethod).map((el, index) => (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between gap-4">
                  <input
                    className="border border-base-300 rounded-md ps-4 grow"
                    type="number"
                    placeholder="amount"
                    name="amount"
                    onChange={handleDebtorData}
                  />
                  <div
                    className="btn join-item w-20"
                    onClick={() => {
                      addDebtor(
                        debtorData.id,
                        debtorData.amount,
                        debtorData.splitMethod
                      );
                    }}
                  >
                    add
                  </div>
                </div>
              </div>
            </div>
          </div>

          {error?.debtor && (
            <span className="flex text-error start-0">{error.debtor}</span>
          )}
        </div>

        {/* Bill date */}
        <div className="flex justify-between w-full">
          Bill date
          <div></div>
          <input
            type="date"
            name="billDate"
            value={input.billDate}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between w-full">
          <Button type={"button"} className={"w-40"} onClick={onSummary}>
            Bill summary
          </Button>

          <Button
            type={"button"}
            className={"w-40 bg-secondary"}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
        {error?.summary && (
          <span className="flex text-error start-0">{error.summary}</span>
        )}
      </div>
    </Modal>
  );
}

export default BillForm;
