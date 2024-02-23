import React from "react";
import Button from "../../../components/Button";
import { AddIcon } from "../../../icons";
import BillForm from "./BillForm";
import BillSummaryForm from "./BillSummaryForm";
import useMain from "../../../hooks/use-main";
import BillContainer from "./BillContainer";

function BillList() {
  const { circleBill } = useMain()
  // console.log(circleBill)
  return (
    <div className="card shrink-0 w-full max-w-5xl drop-shadow-md bg-base-100">
      <div className="card-body min-w-full">
        {circleBill?.map((bill) => (<BillContainer key={bill.id} bill={bill}/>))}

        <Button
          className={"flex items-center"}
            onClick={() =>
              document.getElementById("create_bill_modal").showModal()
            }
        >
          <AddIcon className={"w-6 h-6"} />
          Create a new bill
        </Button>
        <BillForm />
        <BillSummaryForm />
      </div>
    </div>
  );
}

export default BillList;
