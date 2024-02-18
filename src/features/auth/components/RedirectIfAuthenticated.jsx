import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth.js"
import useMain from "../../../hooks/use-main.js";

// export default function RedirectIfAuthenticated({ children }) {
//     const { authUser } = useAuth()
//   return authUser ? <Navigate to="/home" /> : children;
// }

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  const { circleData } = useMain()

  // Add logic to exclude certain URLs from redirection
  const isExcludedUrl = window.location.pathname.startsWith('/circle/');
  // console.log(window.location.pathname)
  
  return (authUser) ? <Navigate to="/home" /> : children;
}