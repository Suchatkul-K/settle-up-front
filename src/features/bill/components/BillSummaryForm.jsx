import React from "react";
import Modal from "../../../components/Modal";
import useBill from "../../../hooks/use-bill";
import CreditorData from "./CreditorData";
import DebtorData from "./DebtorData";
import Button from "../../../components/Button";

function BillSummaryForm() {
  const { billSummary, submitBill, createForm, deleteBill } = useBill();
  //   console.log(billSummary)
  // console.log(createForm)

  const handleBack = () => {
    document.getElementById("bill_summary_modal").close();
    document.getElementById("create_bill_modal").showModal();
  };

  return (
    <Modal id={"bill_summary_modal"} onSubmit={() => {}}>
      <div className="form-control items-center gap-6 w-full px-6">
        <div className="text-2xl font-semibold text-center">Bill details</div>
        <div className="flex justify-between w-full items-center ">
          Bill title:
          <div className="input input-bordered w-full max-w-xs flex items-center ">
            {billSummary.title}
          </div>
        </div>

        {/* Creditor */}
        <div className="form-control w-full gap-1">
          <div className="font-bold">Who paid:</div>

          {/* creditor array  */}
          {billSummary.creditor.map((creditor) => (
            <CreditorData
              key={creditor.id}
              name={creditor.name}
              amount={creditor.amount}
              member={creditor.member}
            />
          ))}
        </div>

        {/* Debtor */}
        <div className="form-control w-full gap-1">
          <div className="font-bold">For whom:</div>
          {/* Debtor array  */}
          {billSummary.debtor.map((debtor) => (
            <DebtorData
              key={debtor.id}
              name={debtor.name}
              amount={debtor.amount}
              splitMethod={debtor.splitMethod}
              member={debtor.member}
              isSummary={true}
            />
          ))}
        </div>

        {/* Bill date */}
        <div className="flex justify-between w-full">
          Bill date
          <div>{billSummary.billDate}</div>
        </div>

        <div className="flex w-full flex-col gap-8"> 
          <div className="flex justify-between w-full">
            <Button type={"button"} className={"w-40"} onClick={submitBill}>
              {createForm ? "Save" : "Edit"}
            </Button>

            <Button
              type={"button"}
              className={"w-40 bg-secondary"}
              onClick={handleBack}
            >
              Back
            </Button>
          </div>
          {!createForm && (
            <Button type={"button"} className={"w-full bg-error text-white hover:bg-red-600"} onClick={deleteBill}>
              Delete
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default BillSummaryForm;
