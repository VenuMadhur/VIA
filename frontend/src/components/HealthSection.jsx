import "./HealthSection.css";
import { useState } from "react";

function HealthSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const healthCategories = [
    {
      id: 1,
      name: "Medicines",
      icon: "💊",
      count: "2 active",
    },
    {
      id: 2,
      name: "Appointments",
      icon: "📅",
      count: "1 upcoming",
    },
    {
      id: 3,
      name: "Medical Documents",
      icon: "📄",
      count: "4 stored",
    },
    {
      id: 4,
      name: "Reminders",
      icon: "🔔",
      count: "2 pending",
    },
    {
      id: 5,
      name: "Medical Bills",
      icon: "💳",
      count: "3 records",
    },
    {
      id: 6,
      name: "Health Records",
      icon: "🩺",
      count: "6 records",
    },
  ];

  return (
    <div>
      <h1>My Health</h1>
      <p>Manage your personal health information</p>

      {selectedCategory === null ? (
        <ul className="health-grid">
          {healthCategories.map((each) => {
            return (
              <li
                key={each.id}
                className="health-card"
                onClick={() => {
                  setSelectedCategory(each.name);
                }}
              >
                <h3>
                  {each.icon} {each.name}
                </h3>
                <p>{each.count}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <button
            type="button"
            className="person-back-button"
            onClick={() => {
              setSelectedCategory(null);
            }}
          >
            ← Back to My Health
          </button>

          <h2>Selected: {selectedCategory}</h2>
        </div>
      )}
    </div>
  );
}

export default HealthSection;
