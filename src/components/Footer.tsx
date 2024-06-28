import * as React from "react";
import cx from "classnames";

import { footerLinks, socials } from "../constants/constants";
import { styles } from "../constants/styles";
import { logo } from "../assets";
import { FooterLinks } from ".";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="pt-5 lg:pt-8">
      <div className="flex-col">
        <div className={cx("flex items-start flex-col lg:flex-row w-full mb-4", styles.container)}>
          <div className="flex-1 flex-col justify-start lg:mr-10">
            <img className="w-[150px] h-auto mb-4" src={logo} alt="quick-pay logo" />
            <p className={cx("max-w-[370px]", styles.paragraph)}>
              To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli.
            </p>
          </div>

          <div className="flex-[1.5] w-full gap-y-[20px] gap-x-[30px] flex flex-row justify-between flex-wrap mt-8 lg:mt-0">
            {footerLinks.map(link => (
              <FooterLinks key={link.title} {...link} />
            ))}
          </div>
        </div>

        <div className="border-t-[1px] border-top-[#3f3e45]" />

        <div className={cx("w-full py-4 flex-col lg:flex-row", styles.flexBetween, styles.container)}>
          <p className="font-montserrat font-normal text-center text-[14px] md:text-[16px] leading-[1.5] text-white">
            ©️Copyright 2023 QuickPay. All Rights Reserved
          </p>

          <div className="flex items-center flex-row mt-6 lg:mt-0">
            {socials.map(social => (
              <a className="[&:not(:last-child)]:mr-3" href={social.link} target="_blank" key={social.id}>
                <img className="w-[21px] h-auto object-contain" src={social.icon} alt="social icon" key={social.id} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
