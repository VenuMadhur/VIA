import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import HealthSection from "./components/features/health/HealthSection";
import HealthHome from "./components/features/health/HealthHome";
import Medicines from "./components/features/health/Medicines";
import Appointments from "./components/features/health/Appointments";
import MedicalDocuments from "./components/features/health/MedicalDocuments";
import Reminders from "./components/features/health/Reminders";
import MedicalBills from "./components/features/health/MedicalBills";
import HealthRecords from "./components/features/health/HealthRecords";
import PeopleSection from "./components/features/people/PeopleSection";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
