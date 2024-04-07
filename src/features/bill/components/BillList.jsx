import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { AddIcon } from "../../../icons";
import BillForm from "./BillForm";
import BillSummaryForm from "./BillSummaryForm";
import useMain from "../../../hooks/use-main";
import BillContainer from "./BillContainer";

function BillList() {
  const { circleBill, loading } = useMain();

  return (
    <div className="card shrink-0 w-full max-w-5xl drop-shadow-md bg-base-100">
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="card-body min-w-full">
          {circleBill?.map((bill) => (
            bill.isActive && <BillContainer key={bill.id} bill={bill} />
          ))}

          {circleBill?.map((bill) => (
            !bill.isActive && <BillContainer key={bill.id} bill={bill} />
          ))}

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
      )}
    </div>
  );
}

export default BillList;
