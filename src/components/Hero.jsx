import { discount, robot } from "../assets";
import { styles } from "../constants/styles";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="font-montserrat py-6 lg:py-9 xl:py-12" id="home">
      <div className={`${styles.flexBetween} mx-5 lg:mx-0 lg:flex-row flex-col`}>
        <div className="flex md:mr-10 lg:mr-[60px] mr-0 max-w-[600px] lg:max-w-full justify-end">
          <img className="w-full h-auto rounded-md" src={robot} alt="robot ai" />
        </div>

        <div className="w-full flex relative flex-col mt-10 lg:mt-0 px-6 sm:px-4 xl:px-0 text-center lg:text-left">
          <div className="flex max-w-[600px] items-center j ustify-center lg:justify-normal mx-auto lg:mx-0 py-[6px] px-4 rounded-[10px] mb-2 bg-gradient-primary">
            <img className="mr-2" src={discount} alt="discount" />
            <p className={`${styles.paragraph} font-medium`}>
              <span className="text-white">20%</span> Chegirma <span className="text-white">1 Oylik</span> Hisob Uchun
            </p>
          </div>

          <h2 className={`${styles.heading1} mb-5`}>
            Yangi Avlod
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-secondary">To'lov Usuli</span>
          </h2>

          <p className={`${styles.paragraph} lg:max-w-[700px] mb-4`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quasi neque accusamus, laboriosam numquam nihil fugit molestiae
            rerum vitae exercitationem.
          </p>

          <Button styles="mx-auto lg:mx-0 lg:mr-auto">Boshlash</Button>

          <div className="absolute z-0 w-[40%] h-[35%] top-0 blur-[900px] bg-gradient-pink"></div>
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bg-lightWhite blur-[750px]"></div>
          <div className="absolute z-[2] w-[50%] h-[55%] right-20 bottom-20 blur-[123px] bg-gradient-blue"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
