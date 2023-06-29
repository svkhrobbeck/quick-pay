import { feedbacks } from "../constants/constants";
import { styles } from "../constants/styles";
import { FeedbackCard } from "./";

const Testimonials = () => {
  return (
    <section className={`mb-12`}>
      <div className={styles.container}>
        <div className={`flex flex-col relative py-6 lg:py-12`}>
          <div className="absolute z-0 w-[60%] h-[60%] left-1/3 rounded-full bg-gradient-blue bottom-[40px] blur-[200px]"></div>

          <div className={`${styles.flexBetween} flex-col lg:flex-row mb-6 lg:mb-16`}>
            <h2 className={`${styles.heading2} w-full lg:w-auto mr-0 mb-3 lg:mb-0 lg:mr-12`}>Odamlar biz haqimizda qanday fikrda</h2>
            <p className={`${styles.paragraph} text-left max-w-none lg:max-w-[550px]`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsa, perspiciatis atque debitis nisi numquam accusamus!
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start relative z-[1]">
            {feedbacks.map(feedback => (
              <FeedbackCard key={feedback.id} {...feedback} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
