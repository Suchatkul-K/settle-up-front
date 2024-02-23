import React from "react";
import Avatar from "../../../components/Avatar";
import useMain from "../../../hooks/use-main";
import { toast } from "react-toastify";
import {
  deleteMemberByMemberId,
  getCircleMemberByCircleId,
} from "../../../api/main.js";
import EditMemberModal from "./EditMemberModal.jsx";
import { DeleteIcon } from "../../../icons/index.jsx";
import * as mainApi from "../../../api/main.js"

function MemberContainer({ name, memberId }) {
  const { circleId, circleBill, circleMember, setCircleMember, memberExpense, setLoading, loading } =
    useMain();
  // console.log(circleBill)
  // console.log(circleBill.map(el => el.participant))
  // console.log(circleBill.map(el => el.participant.filter(part => (part.memberId == memberId))))
  // console.log(circleBill.reduce((acc,el) => acc.concat(el.participant.filter(part => (part.memberId == memberId))),[]))

  const thisMember = circleMember.filter((el) => el.id == memberId)[0];
  // console.log(thisMember)

  const spending = memberExpense[memberId];

  let allBill = (circleBill.reduce((acc,el) => acc.concat(el.participant.filter(part => (part.memberId == memberId))),[]));

  const onDelete = (e) => {
    e.stopPropagation();
    if (allBill[0]) {
      return toast.error("Can not delete member involve in any active bills");
    } else {
      //delete member
      deleteMemberByMemberId(circleId, memberId)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      //refresh member
      setLoading(!loading)

      toast.success(`Delete member ${name} successfully`);
    }
  };

  const onUpdate = () => {
    console.log("edit member", memberId);
  };

  return (
    <div
      className="w-full flex justify-between items-center  p-4 rounded-box hover:shadow-md group gap-4"
      onClick={onUpdate}
    >
      <div className="flex gap-4">
        <Avatar width={"member"} name={name[0]} />
        <div>
          <div className="text-xl font-semibold">{name}</div>
          All spending
        </div>
      </div>
      <div
        className={`flex font-semibold text-2xl grow justify-end ${
          spending < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {spending} THB
      </div>

      <EditMemberModal member={thisMember} />
      <div
        className="hidden group-hover:block font-semibold hover:bg-red-600 rounded-btn px-1 py-1 cursor-pointer bg-red-500"
        onClick={onDelete}
      >
        <DeleteIcon className={"w-6 h-6 "} />
      </div>
    </div>
  );
}

export default MemberContainer;
