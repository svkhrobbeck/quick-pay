// components
import { Billing, Business, Contract, Footer, Header, Hero, Statistics } from "./components";

const App = () => {
  return (
    <>
      <h1 className="visually-hidden">Quick Pay</h1>
      <Header />
      <main className="flex-grow-[1] bg-primary">
        <Hero />
        <Statistics />
        <Contract />
        <Billing />
        <Business />
      </main>
      <Footer />
    </>
  );
};

export default App;
