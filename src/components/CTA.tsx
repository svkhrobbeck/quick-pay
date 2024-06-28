import * as React from "react";
import cx from "classnames";

import { styles } from "../constants/styles";
import { Button } from ".";

const CTA: React.FC = (): JSX.Element => {
  return (
    <section className="mb-12" id="services">
      <div className={styles.container}>
        <div
          className={cx(
            "flex-col text-center md:text-left lg:flex-row bg-gradient-black shadow-card bg-slate-800 py-6 lg:py-12 px-8 lg:px-16 rounded-[20px]",
            styles.flexCenter
          )}
        >
          <div className="flex-1 flex flex-col mr-0 lg:mr-10 mb-10 lg:mb-0">
            <h2 className={styles.heading2}>Xizmatlarni sinab ko'rish!</h2>
            <p className={cx("max-w-[550px] mt-5", styles.paragraph)}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptates sequi.
            </p>
          </div>

          <div className={styles.flexCenter}>
            <Button children="Boshlash" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
