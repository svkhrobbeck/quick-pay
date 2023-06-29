import { card } from "../assets";
import { Button } from "./";
import { layout, styles } from "../constants/styles";

const Contract = () => {
  return (
    <section className={layout.section} id="product">
      <div className={`${styles.container} ${layout.wrapper}`}>
        <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2} mb-5`}>
            Bir necha oson qadamda muqobil
            <br className="hidden lg:block" />
            shartnomaga ega bo'ling
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mb-4`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dolorum nemo eius debitis labore repellat atque est ea harum
            dolor.
          </p>
          <Button>Boshlash</Button>
        </div>
        <div className={`${layout.sectionImage} ${layout.v1}`}>
          <img className="w-full h-auto" src={card} alt="card" />
        </div>
      </div>
    </section>
  );
};

export default Contract;
