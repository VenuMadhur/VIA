import { useNavigate } from "react-router-dom";

const HealthPageHeader = (props) => {
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
      <h1>{props.title}</h1>
    </div>
  );
};

export default HealthPageHeader;
