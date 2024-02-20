import { Navigate } from "react-router-dom";
// import useAuth from "../../../hooks/use-auth.js"
import useMain from "../../../hooks/use-main.js";

// export default function RedirectIfAuthenticated({ children }) { 
//   const { circleData, circleId } = useMain()

//   return authUser ? <Navigate to="/home" /> : children;
// }

export default function RedirectCircle({ children }) {
  const { circleData, circleId } = useMain()
  
  return (circleId) ? <Navigate to={`/circle/${circleId}`} /> : children;
}