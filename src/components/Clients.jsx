import { clients } from "../constants/constants";
import { styles } from "../constants/styles";
import { ClientCard } from "./";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.container} my-4`} id="clients">
      <div className={`flex justify-center items-center lg:justify-between gap-[50px] flex-wrap w-full`}>
        {clients.map(client => (
          <ClientCard key={client.id} {...client} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
