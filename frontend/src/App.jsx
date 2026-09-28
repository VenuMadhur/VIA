import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HealthSection from "./components/HealthSection";
import Medicines from "./components/Medicines";
import PeopleSection from "./components/PeopleSection";
import Hero from "./components/Hero";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/health" element={<HealthSection />}>
          <Route path="medicines" element={<Medicines />} />
        </Route>
        <Route path="/people" element={<PeopleSection />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </>
  );
}

export default App;
