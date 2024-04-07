import React, { useState } from "react";
import { RightArrowIcon } from "../../../icons";
import Avatar from "../../../components/Avatar";
import useMain from "../../../hooks/use-main";
// import Modal from "../../../components/Modal";
// import Button from "../../../components/Button";

function SummaryItem({ id, from, to, amount }) {
  const { circleMember } = useMain();
  // console.log(circleMember);

  const fromMember = circleMember.filter((el) => el.id == from)[0];
  // console.log(fromMember);
  const toMember = circleMember.filter((el) => el.id == to)[0];
  // console.log(toMember);

  // const deleteModalId = `delete_transaction_${id}`;
  // const handleCancel = () => {document.getElementById(deleteModalId).close()}
  // const handleSubmit = () => {} 

  return (
    <>
      <div
        className="flex justify-between p-4"
        // onClick={() => document.getElementById(deleteModalId).showModal()}
      >
        <div className="flex gap-4">
          <Avatar width={"summary"} name={fromMember.name[0]} />
          <div className="flex flex-col">
            <div>From: </div>
            <div className="text-xl font-semibold">{fromMember.name}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-semibold text-xl text-[#cc431d]">
          <div>{amount} THB</div>
          <RightArrowIcon className={"w-64 h-20"} />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <div>To:</div>
            <div className="text-xl font-semibold">{toMember.name}</div>
          </div>
          <Avatar width={"summary"} name={toMember.name[0]} />
        </div>
      </div>

      {/* <Modal
        id={deleteModalId}
        onSubmit={handleSubmit}
        className={"w-full h-80 justify-center"}
      >
        <div className="form-control items-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-semibold">
              Clear this transaction??
            </div>
          </div>

          // button group 
          <div className="flex justify-evenly w-full">
            <Button className={"w-40 bg-primary"}>Confirm</Button>
            <Button type={"button"} className={"w-40 bg-secondary"} onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default SummaryItem;
