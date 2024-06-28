import * as React from "react";
import cx from "classnames";

import { card } from "../assets";
import { layout, styles } from "../constants/styles";

import { Button } from ".";

const Contract: React.FC = (): JSX.Element => {
  return (
    <section className={layout.section} id="product">
      <div className={cx(styles.container, layout.wrapper)}>
        <div className={layout.sectionInfo}>
          <h2 className={cx("mb-5", styles.heading2)}>
            Bir necha oson qadamda muqobil
            <br className="hidden lg:block" />
            shartnomaga ega bo'ling
          </h2>
          <p className={cx("max-w-[600px] mb-4", styles.paragraph)}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dolorum nemo eius debitis labore repellat
            atque est ea harum dolor.
          </p>
          <Button>Boshlash</Button>
        </div>
        <div className={cx(layout.sectionImage, layout.v1)}>
          <img className="w-full h-auto" src={card} alt="card" />
        </div>
      </div>
    </section>
  );
};

export default Contract;
