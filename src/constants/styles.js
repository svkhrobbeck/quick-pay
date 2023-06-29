export const styles = {
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-center",
  flexBetween: "flex justify-between items-center",
  container: "max-w-[1536px] mx-0 lg:mx-auto px-5",
  paragraph: "font-montserrat font-normal text-lightWhite text-[18px] sm:text-[24.8px]",
  heading1:
    "font-montserrat font-semibold text-[32px] sm:text-[42px] md:text-[50px] lg:text-[55px] text-white leading-[45px] sm:leading-[45px] md:leading-[55px] lg:leading-[70px] xl:leading-[75px]",
  heading2:
    "font-montserrat font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-white leading-[25px] sm:leading-[35px] md:leading-[45px] lg:leading-[55px] xl:leading-[65px]",
};

export const layout = {
  section: "py-8 md:py-16",
  wrapper: "flex md:flex-row flex-col",
  wrapperReverse: "flex md:flex-row flex-col-reverse",
  sectionInfo: `flex-1 flex justify-center items-start flex-col`,
  sectionImage: `flex-1 ${styles.flexCenter} self-center max-w-[600px] mt-10 lg:mt-0 lg:max-w-[450px] xl:max-w-none`,
  v1: `ml-0 md:ml-10 relative`,
  v2: `mr-0 md:mr-10 relative`,
};
