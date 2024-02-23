import React from "react";
import { RightArrowIcon } from "../../../icons";
import Avatar from "../../../components/Avatar";
import useMain from "../../../hooks/use-main";

function SummaryItem({ from, to, amount }) {
  const { circleMember } = useMain();
  console.log(circleMember);

  const fromMember = circleMember.filter((el) => el.id == from)[0];
  console.log(fromMember);
  const toMember = circleMember.filter((el) => el.id == to)[0];
  console.log(toMember);
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-4">
        <Avatar width={"summary"} name={fromMember.name[0]}/>
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
  );
}

export default SummaryItem;
