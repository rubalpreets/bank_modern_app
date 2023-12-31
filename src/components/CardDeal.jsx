import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style.js";
import Button from "./Button";

const CardDeals = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {" "}
          Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <img src={card} alt="card_deals" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeals;
