import * as React from "react";
import { statistics } from "../constants/constants";

const Statistics: React.FC = (): JSX.Element => {
  return (
    <section className="mb-6 sm:mb-20">
      <div className="px-5 flex flex-wrap justify-start lg:justify-center items-start">
        {statistics.map((stat, i) => (
          <div className="text-white flex justify-start items-center flex-row m-3" key={stat.id}>
            <h4 className="mr-3 font-montserrat font-semibold text-[30px] sm:text-[35px] lg:text-[42px]">{stat.value}</h4>{" "}
            <p className="font-montserrat font-medium text-[17px] uppercase sm:text-[22px] bg-gradient-secondary text-transparent bg-clip-text">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
