// components
import * as React from "react";
import {
  Billing,
  Business,
  CTA,
  Clients,
  Contract,
  Footer,
  Header,
  Hero,
  Statistics,
  Testimonials,
} from "./components";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <h1 className="sr-only">Quick Pay</h1>
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
