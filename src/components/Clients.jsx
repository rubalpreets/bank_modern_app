import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div
        className={`${styles.flexCenter} flex-wrap w-full items-center ss:flex-row flex-col`}
      >
        {clients.map((client) => {
          return (
            <div
              className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120] mb-[20px] ss:mb[0]`}
              key={client.id}
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px] w-[200px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
