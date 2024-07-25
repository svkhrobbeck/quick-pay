import * as React from "react";
import cx from "classnames";

import { apple, bill, google } from "../assets";
import { layout, styles } from "../constants/styles";

const Billing: React.FC = (): JSX.Element => {
  return (
    <section className={layout.section} id="services">
      <div className={cx("container", layout.wrapperReverse)}>
        <div className={cx("relative", layout.sectionImage, layout.v2)}>
          <img className="w-full h-auto" src={bill} alt="card" />

          <div className="absolute z-[3] w-[50%] h-[50%] rounded-full top-0 blur-[900px] bg-lightWhite" />
          <div className="absolute z-[0] w-[50%] h-[50%] rounded-full bottom-0 bg-gradient-pink blur-[750px]" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={cx("mb-5", styles.heading2)}>
            Hisob-kitob va fakturialni
            <br className="hidden lg:block" />
            Osongina Boshqaring
          </h2>
          <p className={cx("max-w-[600px] mb-4", styles.paragraph)}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dolorum nemo eius debitis labore repellat
            atque est ea harum dolor.
          </p>

          <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
            <img className="w-[129px] h-auto object-contain mr-5 cursor-pointer" src={google} alt="google" />
            <img className="w-[129px] h-auto object-contain mr-5 cursor-pointer" src={apple} alt="google" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
