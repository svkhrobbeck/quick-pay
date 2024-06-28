import { ILayout, IStyles } from "../interfaces";

export const styles: IStyles = {
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-center",
  flexBetween: "flex justify-between items-center",
  container: "max-w-[1360px] mx-0 lg:mx-auto px-5",
  paragraph: "font-montserrat font-normal text-lightWhite text-[15px] sm:text-[17px]",
  heading1:
    "font-montserrat font-semibold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[45px] text-white leading-[1.2]",
  heading2:
    "font-montserrat font-semibold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-white leading-[1.3]",
};

export const layout: ILayout = {
  section: "py-8 md:py-16",
  wrapper: "flex md:flex-row flex-col",
  wrapperReverse: "flex md:flex-row flex-col-reverse",
  sectionInfo: `flex-1 flex justify-center items-start flex-col`,
  sectionImage: `flex-1 ${styles.flexCenter} self-center max-w-[600px] mt-10 lg:mt-0 lg:max-w-[450px] xl:max-w-none`,
  v1: `ml-0 md:ml-10 relative`,
  v2: `mr-0 md:mr-10 relative`,
};
