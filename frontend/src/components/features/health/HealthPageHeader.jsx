import { useNavigate } from "react-router-dom";
import "./HealthPageHeader.css";

const HealthPageHeader = (props) => {
  const navigate = useNavigate();

  return (
    <div className="health-page-header">
      <button
        type="button"
        onClick={() => {
          navigate("/health");
        }}
        className="health-page-header-back"
      >
        ← Back to My Health
      </button>
      <h1 className="health-page-header-title">{props.title}</h1>
    </div>
  );
};

export default HealthPageHeader;
