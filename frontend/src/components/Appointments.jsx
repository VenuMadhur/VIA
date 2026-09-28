import { useNavigate } from "react-router-dom";

const Appointments = () => {
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
      <h1>Appointments</h1>
    </div>
  );
};

export default Appointments;
