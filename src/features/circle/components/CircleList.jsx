import React from "react";
import CircleContainer from "./CircleContainer";
import useCircle from "../../../hooks/use-circle"


function CircleList() {
  const { circles } = useCircle();

  return (
    <ul className="flex flex-col gap-2 menu rounded-box">
      {circles.map((circle) => (
        // <li key={circle.id}>
        <CircleContainer key={circle.id} circle={circle}/>
        // </li>
      ))}
    </ul>
  );
}

export default CircleList;
