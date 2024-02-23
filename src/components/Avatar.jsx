import React from "react";

const widthClass = {
  nav: "size-24",
  bill: "size-24",
  mini: "size-12",
  member: "size-12",
  full: "size-full",
  summary: "size-16"
};

function Avatar({ width, src, name }) {
  const finalWidth = width ? widthClass[width] : widthClass.full;
  return (
    <div className={`avatar placeholder ${finalWidth} `}>
      <div className="bg-[#453e2c] text-white rounded-full w-full">
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
