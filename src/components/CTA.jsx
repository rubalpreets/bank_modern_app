import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <section id="cta" className={`${styles.flexCenter} my-[100px]`}>
      <div
        className={` md:px-20 px-10 py-20 flex-1 flex md:flex-row flex-col justify-between items-center bg-discount-gradient min-h-[290px] rounded-[20px]`}
      >
        <div className="flex flex-col md:items-start items-center">
          <p className={`${styles.heading2}`}>Let’s try our service now! </p>
          <p className={`${styles.paragraph} max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="md:mt-0 mt-10">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default CTA;
