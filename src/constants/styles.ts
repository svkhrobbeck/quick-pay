import cx from "classnames";

export const styles = {
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-center",
  flexBetween: "flex justify-between items-center",
  paragraph: "font-montserrat font-normal text-lightWhite text-[14px] sm:text-[16px]",
  heading1:
    "font-montserrat font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] text-white leading-[1.2]",
  heading2:
    "font-montserrat font-semibold text-[17px] sm:text-[18px] md:text-[22px] lg:text-[25px] text-white leading-[1.3]",
};

export const layout = {
  section: "py-8 md:py-16",
  wrapper: "flex md:flex-row flex-col",
  wrapperReverse: "flex md:flex-row flex-col-reverse",
  sectionInfo: "flex-1 flex justify-center items-start flex-col",
  sectionImage: cx(styles.flexCenter, "flex-1 self-center max-w-[600px] mt-10 lg:mt-0 lg:max-w-[450px] xl:max-w-none"),
  v1: "ml-0 md:ml-10 relative",
  v2: "mr-0 md:mr-10 relative",
};
