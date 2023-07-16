import React from "react";
import logo from "../../favicon.svg";

const Logo = ({ tsize, lsize }) => {
  //   console.log(tsize);
  return (
    <div className="flex justify-center items-center">
      <div className="logo-img">
        <img src={logo} alt="logo" className={`w-full h-[${lsize}]`} />
      </div>
      <div
        className={` flex justify-center font-poppins font-semibold ml-[10px]`}
      >
        <h1 className={`text-white ${tsize}`}>Berserk</h1>
        <h1 className={`text-gradient ${tsize}`}>Bank</h1>
      </div>
    </div>
  );
};

export default Logo;
