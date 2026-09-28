import { useNavigate } from "react-router-dom";

const MedicalBills = () => {
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
      <h1>Medical Bills</h1>
    </div>
  );
};

export default MedicalBills;
