import "./PeopleSection.css";

function PeopleSection() {
  const peopleCategories = [
    {
      id: 1,
      name: "Dad",
      relation: "Father",
      status: "connected",
      icon: "🧔🏻",
    },
    {
      id: 2,
      name: "Mom",
      relation: "Mother",
      status: "connected",
      icon: "🤱🏻",
    },
    {
      id: 3,
      name: "Grandma",
      relation: "Grand mother",
      status: "Managed",
      icon: "👵🏼",
    },
    {
      id: 4,
      name: "Bro",
      relation: "Brother",
      status: "Managed",
      icon: "👦🏻",
    },
  ];

  return (
    <div className="people-section">
      <h1>My People</h1>
      <p>Manage and connect with your people</p>

      <ul className="people-grid">
        {peopleCategories.map((each) => (
          <li key={each.id} className="person-card">
            <div className="person-icon">{each.icon}</div>

            <h3>{each.name}</h3>

            <p className="person-relation">{each.relation}</p>

            <p className="person-status">{each.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleSection;
