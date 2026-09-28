import { useNavigate } from "react-router-dom";

const MedicalDocuments = () => {
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
      <h1>Medical Documents</h1>
    </div>
  );
};

export default MedicalDocuments;
