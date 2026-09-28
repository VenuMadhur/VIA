import { useNavigate } from "react-router-dom";

const HealthRecords = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          navigate("/health");
        }}
      >
        ← Back to My Health
      </button>
      <h1>Health Records</h1>
    </div>
  );
};

export default HealthRecords;
