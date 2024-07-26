import * as React from "react";
import cx from "classnames";

import { styles } from "../constants/styles";
import { discount, robot } from "../assets";

import Button from "./Button";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="font-montserrat py-6 lg:py-9 xl:py-12">
      <div className={cx("lg:flex-row flex-col container", styles.flexBetween)}>
        <div className="mb-10 lg:mb-0 flex mr-0 lg:mr-[60px] max-w-[450px] h-auto">
          <img className="w-full h-auto rounded-md" src={robot} alt="robot ai" />
        </div>

        <div className="w-full flex relative flex-col">
          <div className="flex mr-auto max-w-[600px] items-center j ustify-center lg:justify-normal py-[6px] px-4 rounded-[10px] mb-2 bg-gradient-primary">
            <img className="mr-2" src={discount} alt="discount" />
            <p className={cx("font-medium", styles.paragraph)}>
              <span className="text-white">20%</span> Chegirma <span className="text-white">1 Oylik</span> Hisob Uchun
            </p>
          </div>

          <h2 className={cx("mb-5", styles.heading1)}>
            Yangi Avlod
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-secondary">To'lov Usuli</span>
          </h2>

          <p className={cx("lg:max-w-[700px] mb-4", styles.paragraph)}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quasi neque accusamus, laboriosam numquam
            nihil fugit molestiae rerum vitae exercitationem.
          </p>

          <Button className="mr-auto" children="Boshlash" />

          <div className="absolute z-0 w-[40%] h-[35%] top-0 blur-[900px] bg-gradient-pink" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 bg-lightWhite blur-[750px]" />
          <div className="absolute z-[2] w-[50%] h-[55%] right-20 bottom-20 blur-[123px] bg-gradient-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
