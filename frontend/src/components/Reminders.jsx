import { useNavigate } from "react-router-dom";

const Reminders = () => {
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
      <h1>Reminders</h1>
    </div>
  );
};

export default Reminders;
