import React from "react";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York",
    specialties: ["React", "Node.js", "GraphQL"],
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "San Francisco",
    specialties: ["Angular", "TypeScript", "RxJS"],
  },
  {
    id: 3,
    name: "Bob Johnson",
    location: "Chicago",
    specialties: ["Vue.js", "Laravel", "MySQL"],
  },
];

const DeveloperList = () => {
  return (
    <div>
      <h1>Developer List</h1>
      <ul>
        {developers.map((developer) => (
          <li key={developer.id}>
            <strong>ID:</strong> {developer.id}
            <br />
            <strong>Name:</strong> {developer.name}
            <br />
            <strong>Location:</strong> {developer.location}
            <br />
            <strong>Specialties:</strong> {developer.specialties.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeveloperList;
