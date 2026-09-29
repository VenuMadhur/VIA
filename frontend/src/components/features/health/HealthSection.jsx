import "./HealthSection.css";
import { Outlet } from "react-router-dom";

function HealthSection() {
  return (
    <div>
      <h1>My Health</h1>
      <p>Manage your personal health information</p>

      <Outlet />
    </div>
  );
}

export default HealthSection;
