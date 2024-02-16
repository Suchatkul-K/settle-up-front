import React from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import DebtorData from "./DebtorData";
import CreditorData from "./CreditorData";
import { AddIcon } from "../../../icons";

function BillForm() {
  return (
    <Modal id={"create_bill_modal"} onSubmit={() => {}}>
      <div className="form-control items-center gap-6 w-full px-6">
        <div className="text-2xl font-semibold text-center">Bill details</div>
        <input
          type="text"
          placeholder="What have you spent on this time?"
          className="input input-bordered w-full max-w-xs"
          name="circleName"
          //   value={input.circleName}
          //   onChange={handleChange}
        />
        {/* {error?.circleName && (
                      <span className="flex text-error">
                        {error.circleName}
                      </span>
                    )} */}

        <div className="form-control w-full">Who paid:
            <CreditorData />
            <CreditorData />
            <CreditorData />
            <CreditorData />
            <Button className="text-base" type={"button"}>
                <AddIcon className={"w-6 h-6"} /> 
                Add more creditor
            </Button>
        </div>

        <div className="form-control w-full">For whom:
            <DebtorData />
            <DebtorData />
            <DebtorData />
            <DebtorData />
            <DebtorData />
            <Button className="text-base" type={"button"}>
                <AddIcon className={"w-6 h-6"} /> 
                Add more debtor
            </Button>
        </div>

        <div className="flex justify-between w-full">Bill date
            <div ></div>
            <input type="date"/>
        </div>

        <div className="flex justify-between w-full">
          <Button type={"button"} className={"w-40"}>Bill summary</Button>
          <Button type={"button"} className={"w-40 bg-secondary"}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
}

export default BillForm;
