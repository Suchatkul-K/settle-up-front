import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NavBar from "../components/NavBar";
import CirclePage from "../pages/CirclePage";
import HomePage from "../pages/HomePage";
import BillList from "../features/bill/components/BillList";
import MemberList from "../features/member/components/MemberList";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import CircleContextProvider from "../features/circle/context/CircleContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuthenticated>
        <NavBar />
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <NavBar />
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <CirclePage />,
      },
      {
        path: "circle/:circleId",
        element: <HomePage />,
        children: [
          {
            path: "",
            element: <BillList />,
          },
          {
            path: "members",
            element: <MemberList />
          }
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
