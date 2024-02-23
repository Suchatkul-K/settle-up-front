import React from "react";
import useMain from "../../../hooks/use-main";
import * as constance from "../../../constance/index.js";
import Avatar from "../../../components/Avatar.jsx";
import { DeleteIcon, UpdateIcon } from "../../../icons/index.jsx";
import EditBillModal from "./EditBillModal.jsx";

function BillContainer({ bill }) {

const { title, billDate, amount, participant, billId } = bill
  // console.log(participant);
  const creditor = participant.filter(
    (el) => el.role == constance.ROLE.CREDITOR
  );
  const debtor = participant.filter((el) => el.role == constance.ROLE.DEBTOR);

  // console.log("creditor", creditor);
  // console.log("debtor", debtor);

  const editBillId = `edit_bill_${bill.id}`;
  return (
    <div
        className="cursor-pointer"
        onClick={() => document.getElementById(editBillId).showModal()}
      >
      {/* <input type="checkbox" /> */}
      <EditBillModal bill={ bill } />
      <div className=" collapse-title flex justify-between rounded-box p-4 hover:shadow-md">
        <div className="flex flex-col">
          <div className="text-xl font-semibold">{title}</div>
          <div>spent on: {billDate.slice(0, 10)}</div>
          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
            {creditor?.map((el) => {
              let name = el.member.bot
                ? el.member.bot.botName[0]
                : el.member.user.username[0];
              return <Avatar key={el.id} name={name} width={"mini"} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div>{amount} THB</div>
          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
            {debtor?.map((el) => {
              let name = el.member.bot
                ? el.member.bot.botName[0]
                : el.member.user.username[0];
              return <Avatar key={el.id} name={name} width={"mini"} />;
            })}
          </div>
        </div>
      </div>

      {/* Edit & delete */}
      {/* <div className="collapse-content flex justify-end gap-8">
        <EditBillModal billId={ billId } />

        <div
          className="flex font-semibold hover:bg-red-600 rounded-btn px-4 py-1 cursor-pointer bg-red-500 text-white items-center"
          onClick={() => {}}
        >  
            Delete this bill??
          <DeleteIcon className={"w-6 h-6 "} />
        </div>

      </div> */}
    </div>
  );
}

export default BillContainer;
