import * as React from "react";
import { apple, bill, google } from "../assets";
import { layout, styles } from "../constants/styles";

const Billing: React.FC = (): JSX.Element => {
  return (
    <section className={layout.section} id="services">
      <div className={`${styles.container} ${layout.wrapperReverse}`}>
        <div className={`${layout.sectionImage} ${layout.v2} relative`}>
          <img className="w-full h-auto" src={bill} alt="card" />

          <div className="absolute z-[3] w-[50%] h-[50%] rounded-full top-0 blur-[900px] bg-lightWhite" />
          <div className="absolute z-[0] w-[50%] h-[50%] rounded-full bottom-0 bg-gradient-pink blur-[750px]" />
        </div>
        <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2} mb-5`}>
            Hisob-kitob va fakturialni
            <br className="hidden lg:block" />
            Osongina Boshqaring
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mb-4`}>
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
