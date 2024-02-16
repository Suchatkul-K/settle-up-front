import React from "react";
import Button from "../../../components/Button";
import { AddIcon } from "../../../icons";
import BillForm from "./BillForm";

function BillList() {
  return (
    <div className="card shrink-0 w-full max-w-5xl drop-shadow-md bg-base-100">
      <div className="card-body min-w-full">
        BillList
        <div>bill container</div>
        <div>bill container</div>
        <div>bill container</div>
        <div>bill container</div>
        <div>bill container</div>

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
      </div>
    </div>
  );
}

export default BillList;
