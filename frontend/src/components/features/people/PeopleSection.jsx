import "./PeopleSection.css";
import { useState } from "react";

function PeopleSection() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const myPeople = [
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

  const selectedPersonData = myPeople.find(
    (each) => each.name === selectedPerson,
  );

  return (
    <div className="people-section">
      <h1>My People</h1>
      <p>Manage and connect with your people</p>

      {selectedPerson === null ? (
        <ul className="people-grid">
          {myPeople.map((each) => (
            <li
              key={each.id}
              className="person-card"
              onClick={() => setSelectedPerson(each.name)}
            >
              <div className="person-icon">{each.icon}</div>

              <h3>{each.name}</h3>

              <p className="person-relation">{each.relation}</p>

              <p className="person-status">{each.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <button
            type="button"
            className="person-back-button"
            onClick={() => setSelectedPerson(null)}
          >
            ← Back to My People
          </button>
          <div className="person-details">
            <div className="person-icon">{selectedPersonData.icon}</div>

            <h3>{selectedPersonData.name}</h3>

            <p className="person-relation">{selectedPersonData.relation}</p>

            <p className="person-status">{selectedPersonData.status}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PeopleSection;
