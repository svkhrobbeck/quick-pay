import * as React from "react";
import cx from "classnames";

import { IFeature } from "../interfaces";
import { styles } from "../constants/styles";

const FeatureCard: React.FC<IFeature> = ({ icon, title, content }): JSX.Element => {
  return (
    <div className="flex  flex-row p-6 rounded-[20px] cursor-pointer [&:not(:last-child)]:mb-6 hover:shadow-card transition-all hover:bg-gradient-black duration-300">
      <div className={cx("w-[64px] h-[64px] mr-3 rounded-full bg-lightBlue", styles.flexCenter)}>
        <img className="w-[50%] h-[50%] object-contain" src={icon} alt={title} />
      </div>

      <div className="font-montserrat flex-1 flex flex-col">
        <h4 className="font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
        <p className="font-normal text-lightWhite text-[16px] leading-[24px]">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
