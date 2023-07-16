import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6 font-poppins text-[18px] text-primary bg-blue-gradient outline-none ${styles} rounded-[10px]`}
    >
      Get Strated
    </button>
  );
};

export default Button;
