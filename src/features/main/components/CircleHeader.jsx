import React from "react";
import useMain from "../../../hooks/use-main";
import Button from "../../../components/Button";

function CircleHeader() {
  const { circleData, circleBill, deactivateBills, activateBills } = useMain()
  let spending = circleBill?.reduce((acc,el) => acc += (+el.amount) ,0)
  return (
    <div className="w-full">
      <div className="text-center font-bold text-2xl">{circleData?.circleName}</div>
      <div className="flex justify-between">
      <div className="flex flex-col justify-between">
        <div>Bills count: {circleData?.bills.length}</div>
        <div>Members: {circleData?.members.length}</div>
        <div>Total Spending: {spending} THB</div>
      </div>
      <div className="flex flex-col gap-2">
        <Button type={"button"} className={"w-full bg-primary hover:bg-gradient-to-t from-primary to-amber-100"} onClick={deactivateBills}>Settle all bills</Button>
        <Button type={"button"} className={"w-full bg-secondary hover:bg-gradient-to-t from-secondary to-amber-100"} onClick={activateBills}>Activate all bills</Button>
      </div>
      </div>
    </div>
  );
}

export default CircleHeader;
