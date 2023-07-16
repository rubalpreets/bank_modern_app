import React from "react";
import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className={`${styles.paragraph} mt-10 text-white`}>{content}</p>

      <div className="flex flex-row mt-10">
        <img
          src={img}
          alt="profile_img"
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col justify-between ml-5">
          <span className="font-poppins font-normal text-[20px] text-white">
            {name}
          </span>
          <p className="font-poppins font-normal text-[16px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
