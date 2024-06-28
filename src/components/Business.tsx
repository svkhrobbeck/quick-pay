import * as React from "react";
import cx from "classnames";

import { IFeatures } from "../interfaces";
import { features } from "../constants/constants";
import { layout, styles } from "../constants/styles";

import { Button, FeatureCard } from ".";

const Business: React.FC = (): JSX.Element => {
  return (
    <section className={layout.section} id="features">
      <div className={cx(styles.container, layout.wrapper)}>
        <div className={layout.sectionInfo}>
          <h2 className={cx("mb-5", styles.heading2)}>
            Biznesingizni rivojlantiring
            <br className="hidden lg:block" />
            Biz bunda ko'mak beramiz!
          </h2>
          <p className={cx("max-w-[550px] mb-4", styles.paragraph)}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore expedita beatae magnam corrupti
            facere totam quibusdam cupiditate, voluptas commodi.
          </p>
          <Button children="Boshlash" />
        </div>
        <div className={cx("flex-col", layout.sectionImage, layout.v1)}>
          {features.map((feature: IFeatures) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
