import { logo } from "../assets";
import { footerLinks, socials } from "../constants/constants";
import { styles } from "../constants/styles";
import { FooterLinks } from "./";

const Footer = () => {
  return (
    <footer className="py-6 lg:py-9">
      <div className={`${styles.container} ${styles.flexCenter} flex-col`}>
        <div className={`${styles.flexCenter} flex-col lg:flex-row w-full mb-4`}>
          <div className={`flex-1 flex-col justify-start mr-10`}>
            <img className="w-[250px] h-auto mb-4" src={logo} alt="quick-pay logo" />
            <p className={`${styles.paragraph} max-w-[370px]`}>To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli.</p>
          </div>

          <div className="flex-[1.5] w-full gap-[40px] flex flex-row justify-between flex-wrap mt-10 lg:mt-0">
            {footerLinks.map(link => (
              <FooterLinks key={link.title} {...link} />
            ))}
          </div>
        </div>

        <div className={`w-full ${styles.flexBetween} flex-col lg:flex-row border-t-[1px] border-top-[#3f3e45]`}>
          <p className="font-montserrat font-normal pt-6 text-center text-[18px] leading-[27px] text-white">
            ©️Copyright 2023 QuickPay. All Rights Reserved
          </p>

          <div className="flex items-center flex-row mt-6 lg:mt-0">
            {socials.map(social => (
              <a className="[&:not(:last-child)]:mr-3" href={social.link} target="_blank" key={social.id}>
                <img className={`w-[21px] h-auto object-contain`} src={social.icon} alt="social icon" key={social.id} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
