import * as React from "react";
import cx from "classnames";

import { styles } from "../constants/styles";
import { clients } from "../constants/constants";

import { ClientCard } from ".";

const Clients: React.FC = (): JSX.Element => {
  return (
    <section className={cx("my-4", styles.flexCenter, styles.container)} id="clients">
      <div className="flex justify-center items-center lg:justify-between gap-[50px] flex-wrap w-full">
        {clients.map(client => (
          <ClientCard key={client.id} {...client} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
