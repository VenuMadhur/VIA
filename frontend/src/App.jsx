import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HealthSection from "./components/HealthSection";
import HealthHome from "./components/HealthHome";
import Medicines from "./components/Medicines";
import Appointments from "./components/Appointments";
import MedicalDocuments from "./components/MedicalDocuments";
import Reminders from "./components/Reminders";
import MedicalBills from "./components/MedicalBills";
import HealthRecords from "./components/HealthRecords";
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
          <Route index element={<HealthHome />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="medical-documents" element={<MedicalDocuments />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="medical-bills" element={<MedicalBills />} />
          <Route path="health-records" element={<HealthRecords />} />
        </Route>
        <Route path="/people" element={<PeopleSection />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </>
  );
}

export default App;
