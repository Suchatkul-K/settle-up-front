import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NavBar from "../components/NavBar";
import CirclePage from "../pages/CirclePage";
import HomePage from "../pages/HomePage";
import BillList from "../features/bill/components/BillList";
import MemberList from "../features/member/components/MemberList.jsx";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import CircleContextProvider from "../features/circle/context/CircleContext";
import ProtectCircle from "../features/circle/components/ProtectCircle.jsx";
import RedirectCircle from "../features/circle/components/RedirectCircle.jsx";
import MainContextProvider from "../features/main/context/MainContext.jsx";
import AuthContextProvider from "../features/auth/context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <CircleContextProvider>
        <RedirectIfAuthenticated>
          <NavBar />
          <LoginPage />
        </RedirectIfAuthenticated>
        </CircleContextProvider>
      </AuthContextProvider>
    ),
  },
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <CircleContextProvider>
      <MainContextProvider>
        <ProtectedRoute>
          <NavBar />
          <Outlet />
        </ProtectedRoute>
      </MainContextProvider>
      </CircleContextProvider>
      </AuthContextProvider>
    ),
    children: [
      {
        path: "home",
        element: (
          // <RedirectCircle>
          <CirclePage />
        ),
        // </RedirectCircle>
      },
      {
        path: "circle/:circleId",
        element: (
          // <ProtectCircle>
          // Maincontext
          <HomePage />
        ),
        // </ProtectCircle>
        children: [
          {
            path: "",
            element: <BillList />,
          },
          {
            path: "members",
            element: <MemberList />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
