import React from "react";

const widthClass = {
  nav: "w-24",
  bill: "w-24",
  mini: "w-12",
};

function Avatar({ width, src }) {
  const finalWidth = width ? widthClass.bill : widthClass[width];
  return (
    <div className="avatar">
      <div className={`${finalWidth} rounded-full`}>
        <img
          src={
            src ||
            "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Avatar;
