import Cursor from "./components/cursor";
import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackTicker from "./components/StackTicker";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

const Portfolio = () => (
  <>
    <Navbar />
    <Hero />
    <StackTicker />
    <Work />
    <About />
    <Contact />
  </>
);

const App = () => {
  const [loaded, setLoaded] = useState(
    () => sessionStorage.getItem("loaded") === "true",
  );

  const handleComplete = () => {
    sessionStorage.setItem("loaded", true);
    setLoaded(true);
  };

  return (
    <BrowserRouter>
      {!loaded && <Loader onComplete={handleComplete} />}
      <Cursor />
      <ParticleCanvas />
      {loaded && <ScrollProgress />}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
