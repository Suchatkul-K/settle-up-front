import CircleNav from "../features/main/components/CircleNav.jsx";
import CircleHeader from "../features/main/components/CircleHeader.jsx";
import { Outlet, useParams } from "react-router-dom";
import MainContextProvider from "../features/main/context/MainContext.jsx";
import { useEffect } from "react";
import useMain from "../hooks/use-main.js";
import { getCircleByCircleId } from "../api/main.js";
import { storeToken } from "../utils/local-storage.js";

export default function HomePage() {
  // const {circleData,setCircleData } = useMain()
  // const { circleId } = useParams()

  // console.log(circleId,"AAAAAAAAAAA")
//   useEffect(()=>{
//     // if( circleId )
//     getCircleByCircleId(circleId)
//         .then(res => {
//             // console.log(res)
//             storeToken(res.data.accessToken)
//             setCircleData(res.data.circleData)
//             console.log(circleData)
//         })
//         .catch(err => console.log(err))



// },[circleId])
  return (
    // <MainContextProvider>
      <div className="hero min-h-screen ">
        <div className="hero-content w-full h-full bg-base-100">
          <div className="max-w-5xl w-full gap-4 p-4 flex flex-col justify-start h-full">
            <CircleHeader />
            <CircleNav />
            <Outlet />
          </div>
        </div>
      </div>
    // </MainContextProvider>
  );
}
