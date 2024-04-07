import CircleNav from "../features/main/components/CircleNav.jsx";
import CircleHeader from "../features/main/components/CircleHeader.jsx";
import { Outlet } from "react-router-dom";
import useMain from "../hooks/use-main.js";
import BillContextProvider from "../features/bill/context/BillContext.jsx";

export default function HomePage() {
  const { loading } = useMain()

  if(loading) {
    return (<div className="hero min-h-screen bg-base-100">
      <span className="loading loading-spinner loading-lg"></span>
    </div>)
  }
  return (
    // <MainContextProvider>
    <BillContextProvider>
      <div className="hero min-h-screen ">
        <div className="hero-content w-full h-full bg-base-100">
          <div className="max-w-5xl w-full gap-4 p-4 flex flex-col justify-start h-full">
            <CircleHeader />
            <CircleNav />
            <Outlet />
          </div>
        </div>
      </div>
    </BillContextProvider>
    // </MainContextProvider>
  );
}
