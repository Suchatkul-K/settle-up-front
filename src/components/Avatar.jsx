import React from "react";

const widthClass = {
  nav: "w-24",
  bill: "w-24",
  mini: "w-12",
  member: "w-12",
  full: "w-full"
};

function Avatar({ width, src, name }) {
  const finalWidth = width ? widthClass[width] : widthClass.full;
  return (
    <div className={`avatar placeholder ${finalWidth}`}>
      <div className="bg-neutral text-neutral-content rounded-full w-full">
        <span className="text-2xl">{name || "D"}</span>
      </div>
    </div>
    // <div className="avatar">
    //   <div className={`${finalWidth} rounded-full w-full h-full`}>
    //     {name || "U"}
    //     <img
    //       src={
    //         src ||
    //         "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    //       }
    //     />
    //   </div>
    // </div>
  );
}

export default Avatar;
