import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} rounded-full bg-black w-full h-full flex-col`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-3">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowup"
            className="w-[23px] h-[23px] object-contain "
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
