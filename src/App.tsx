import * as React from "react";
import * as Components from "./components";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <h1 className="sr-only">Quick Pay</h1>
      <Components.Header />

      <main className="flex-grow-[1]">
        <Components.Hero />
        <Components.Statistics />
        <Components.Contract />
        <Components.Billing />
        <Components.Business />
        <Components.Testimonials />
        <Components.CTA />
        <Components.Clients />
      </main>

      <Components.Footer />
    </>
  );
};

export default App;
