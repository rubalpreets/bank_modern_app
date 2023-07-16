import React from "react";
import styles, { layout } from "../style.js";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          {" "}
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <span className={`${styles.flexStart} mt-10`}>
          <img
            src={apple}
            alt="appStore"
            className="w-[110px] h-[30px] cursor-pointer"
          />
          <img
            src={google}
            alt="playStore"
            className="w-[110px] h-[30px] cursor-pointer ml-5"
          />
        </span>
      </div>
    </section>
  );
};

export default Billing;
