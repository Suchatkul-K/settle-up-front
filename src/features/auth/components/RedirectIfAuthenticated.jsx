import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth.js"

export default function RedirectIfAuthenticated({ children }) {
    const { authUser } = useAuth()
  return authUser ? <Navigate to="/home" /> : children;
}
