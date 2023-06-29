import * as React from "react";
import { features } from "../constants/constants";
import { layout, styles } from "../constants/styles";
import { Button, FeatureCard } from ".";
import { IFeatures } from "../interfaces";

const Business: React.FC = (): JSX.Element => {
  return (
    <section className={layout.section} id="features">
      <div className={`${styles.container} ${layout.wrapper}`}>
        <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2} mb-5`}>
            Biznesingizni rivojlantiring
            <br className="hidden lg:block" />
            Biz bunda ko'mak beramiz!
          </h2>
          <p className={`${styles.paragraph} max-w-[550px] mb-4`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore expedita beatae magnam corrupti facere totam
            quibusdam cupiditate, voluptas commodi.
          </p>
          <Button>Boshlash</Button>
        </div>
        <div className={`${layout.sectionImage} flex-col ${layout.v1}`}>
          {features.map((feature: IFeatures) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
