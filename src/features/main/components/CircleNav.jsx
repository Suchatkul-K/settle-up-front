import { useNavigate } from "react-router-dom";
import useMain from "../../../hooks/use-main";
import { useEffect } from "react";

function CircleNav() {
  const { circleId } = useMain()
  const navigate = useNavigate()
 
  return (
    <div className="w-full flex justify-between bg-gradient-to-t from-primary to-amber-100 text-xl rounded-b-lg">
      <button className="px-8 py-4 hover:bg-gradient-to-t from-secondary to-amber-100 border-none rounded-lg min-w-60" onClick={() => {navigate(`/circle/${circleId}`)}}>
        Bills
      </button>
      <button className="px-8 py-4 hover:bg-gradient-to-t from-secondary to-amber-100 border-none rounded-lg min-w-60" onClick={() => {navigate(`/circle/${circleId}/members`)}}>
        Members
      </button>
      <button className="px-8 py-4 hover:bg-gradient-to-t from-secondary to-amber-100 border-none rounded-lg min-w-60">
        Summary
      </button>
    </div>
  );
}

export default CircleNav;
