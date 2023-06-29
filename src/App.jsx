// components
import { Billing, Business, CTA, Clients, Contract, Footer, Header, Hero, Statistics, Testimonials } from "./components";

const App = () => {
  return (
    <>
      <h1 className="visually-hidden">Quick Pay</h1>
      <Header />
      <main className="flex-grow-[1]">
        <Hero />
        <Statistics />
        <Contract />
        <Billing />
        <Business />
        <Testimonials />
        <CTA />
        <Clients />
      </main>
      <Footer />
    </>
  );
};

export default App;
