import * as React from "react";
import cx from "classnames";

import { styles } from "../constants/styles";
import { clients } from "../constants/constants";

import { ClientCard } from ".";

const Clients: React.FC = (): JSX.Element => {
  return (
    <section className={cx("my-4 container", styles.flexCenter)} id="clients">
      <div className="flex justify-center items-center lg:justify-between gap-[40px] flex-wrap w-full">
        {clients.map((logo, idx) => (
          <ClientCard key={idx} logo={logo} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
