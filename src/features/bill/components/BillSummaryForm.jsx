import React from "react";
import Modal from "../../../components/Modal";
import useBill from "../../../hooks/use-bill";
import CreditorData from "./CreditorData";
import DebtorData from "./DebtorData";
import Button from "../../../components/Button";

function BillSummaryForm() {
  const { billSummary, submitBill, createForm, deleteBill, switchActivation } = useBill();
  const {title, creditor, debtor, billDate, isActive} = billSummary
  // console.log(billSummary)
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
            {title}
          </div>
        </div>

        {/* Creditor */}
        <div className="form-control w-full gap-1">
          <div className="font-bold">Who paid:</div>

          {/* creditor array  */}
          {creditor.map((creditor) => (
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
          {debtor.map((debtor) => (
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
          <div>{billDate}</div>
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
            <>
              <Button
                type={"button"}
                className={"w-full bg-error text-white hover:bg-red-600"}
                onClick={deleteBill}
              >
                Delete
              </Button>
              <Button
                type={"button"}
                className={"w-full bg-success text-white hover:bg-green-700"}
                onClick={switchActivation}
              >
                {isActive ? "Settle This Bill": "Activate This Bill"}
              </Button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default BillSummaryForm;
