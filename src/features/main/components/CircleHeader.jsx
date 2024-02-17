import React from "react";
import useMain from "../../../hooks/use-main";

function CircleHeader() {
  const { circleData } = useMain()
  // console.log(circleData)
  return (
    <div className="w-full">
      <div className="text-center font-bold text-2xl">{circleData.circleName}</div>
      <div>
        <div>Bills count: {circleData.bills.length}</div>
        <div>Members: {circleData.members.length}</div>
        <div>Total Spending:</div>
      </div>
    </div>
  );
}

export default CircleHeader;
