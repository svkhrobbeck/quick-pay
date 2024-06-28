import * as React from "react";
import cx from "classnames";

import { quotes } from "../assets";
import { styles } from "../constants/styles";

interface IProps {
  content: string;
  name: string;
  title: string;
}

const FeedbackCard: React.FC<IProps> = ({ content, name, title }): JSX.Element => {
  const splitter = (name: string): string =>
    name
      .split(" ")
      .map((i: string) => i.charAt(0))
      .join("");

  return (
    <div className="flex justify-between flex-col cursor-pointer px-10 py-12 mr-0 sm:[&:not(:last-child)]:mr-5 md:[&:not(:last-child)]:mr-10 rounded-[20px] max-w-[370px] hover:bg-gradient-black hover:shadow-card transition-all duration-300">
      <img className="w-[42px] h-auto object-contain" src={quotes} alt="quotes" />
      <p className={cx("font-montserrat font-normal leading-[1.5] text-white my-10", styles.paragraph)}>{content}</p>

      <div className="flex flex-row">
        <div className="size-[50px] mr-4 flex justify-center items-center bg-gradient-secondary rounded-full">
          <p className="font-montserrat font-semibold text-[20px] bg-gradient-black text-transparent bg-clip-text">
            {splitter(name)}
          </p>
        </div>
        <div className="font-montserrat flex flex-col">
          <h4 className="font-semibold text-[22px] leading-[1.5] text-white">{name}</h4>
          <p className=" font-normal text-[16px] leading-[1.5] text-lightWhite">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
