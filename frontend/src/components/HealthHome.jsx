import { NavLink } from "react-router-dom";

const HealthHome = () => {
  const healthCategories = [
    {
      id: 1,
      name: "Medicines",
      icon: "💊",
      count: "2 active",
      route: "medicines",
    },
    {
      id: 2,
      name: "Appointments",
      icon: "📅",
      count: "1 upcoming",
      route: "appointments",
    },
    {
      id: 3,
      name: "Medical Documents",
      icon: "📄",
      count: "4 stored",
      route: "medical-documents",
    },
    {
      id: 4,
      name: "Reminders",
      icon: "🔔",
      count: "2 pending",
      route: "reminders",
    },
    {
      id: 5,
      name: "Medical Bills",
      icon: "💳",
      count: "3 records",
      route: "medical-bills",
    },
    {
      id: 6,
      name: "Health Records",
      icon: "🩺",
      count: "6 records",
      route: "health-records",
    },
  ];
  return (
    <div>
      <ul className="health-grid">
        {healthCategories.map((each) => {
          return (
            <li key={each.id} className="health-card">
              <NavLink to={each.route}>
                <div>
                  <h3>
                    {each.icon} {each.name}
                  </h3>
                  <p>{each.count}</p>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HealthHome;
