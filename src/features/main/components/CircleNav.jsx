import { useLocation, useNavigate } from "react-router-dom";
import useMain from "../../../hooks/use-main";
import { useEffect } from "react";

const tab = {
  summary: "summary",
  members: "members"
}

function CircleNav() {
  const { circleId } = useMain();
  const navigate = useNavigate();

  const { pathname } = useLocation()
  const splitPathname = pathname.split("/")
  const finalPath = splitPathname[splitPathname.length - 1]
  // console.log(finalPath)

  const nonSelectedClassName = "px-8 py-4 hover:bg-gradient-to-t from-secondary to-amber-100 border-none rounded-lg min-w-60 font-semibold"
  const selectedClassName = "px-8 py-4 bg-gradient-to-t from-secondary to-amber-100 border-none rounded-lg min-w-60 font-semibold"

  return (
    <div className="w-full flex justify-between bg-gradient-to-t from-primary to-amber-100 text-xl rounded-b-lg">
      <button
        className={(finalPath != tab.members && finalPath != tab.summary) ? selectedClassName : nonSelectedClassName}
        onClick={() => {
          navigate(`/circle/${circleId}`);
        }}
      >
        Bills
      </button>
      <button
        className={(finalPath == tab.members) ? selectedClassName : nonSelectedClassName}
        onClick={() => {
          navigate(`/circle/${circleId}/members`);
        }}
      >
        Members
      </button>
      <button
        className={(finalPath == tab.summary) ? selectedClassName : nonSelectedClassName}
        onClick={() => {
          navigate(`/circle/${circleId}/summary`);
        }}
      >
        Summary
      </button>
    </div>
  );
}

export default CircleNav;
