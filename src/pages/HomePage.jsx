import CircleNav from "../features/main/components/CircleNav.jsx";
import CircleHeader from "../features/main/components/CircleHeader.jsx";
import { Outlet } from "react-router-dom";
import MainContextProvider from "../features/main/context/MainContext.jsx";

export default function HomePage() {
  return (
    <MainContextProvider>
      <div className="hero min-h-screen ">
        <div className="hero-content w-full h-full bg-base-100">
          <div className="max-w-5xl w-full gap-4 p-4 flex flex-col justify-start h-full">
            <CircleHeader />
            <CircleNav />
            <Outlet />
          </div>
        </div>
      </div>
    </MainContextProvider>
  );
}
