import * as React from "react";
import { statistics } from "../constants/constants";

const Statistics: React.FC = (): JSX.Element => {
  return (
    <section className="mb-6 sm:mb-20">
      <div className="px-5 flex flex-wrap justify-start lg:justify-center items-start">
        {statistics.map(stat => (
          <div className="text-white flex justify-start items-center flex-row m-3" key={stat.id}>
            <h4 className="mr-3 font-montserrat font-semibold text-[20px] sm:text-[26px] lg:text-[32px]">
              {stat.value}
            </h4>
            <p className="font-montserrat font-medium uppercase text-[17px] sm:text-[20px] bg-gradient-secondary text-transparent bg-clip-text">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
