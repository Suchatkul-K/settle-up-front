import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NavBar from "../components/NavBar";
import CirclePage from "../pages/CirclePage";
import HomePage from "../pages/HomePage";
import BillList from "../features/bill/components/BillList";
import MemberList from "../features/member/components/MemberList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <LoginPage />
      </>
    ),
    // children: [
    //     {
    //         path: ''
    //     }
    // ]
  },
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
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
