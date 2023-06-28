import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-[1]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
