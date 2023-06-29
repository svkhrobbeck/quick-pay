// components
import { Footer, Header, Hero } from "./components";

const App = () => {
  return (
    <>
      <h1 className="visually-hidden">Quick Pay</h1>
      <Header />
      <main className="flex-grow-[1] bg-primary">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default App;
