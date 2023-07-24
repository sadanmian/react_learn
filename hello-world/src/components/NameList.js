import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Sadan",
      age: 26,
      skill: "React",
    },
    {
      id: 2,
      name: "Mian",
      age: 24,
      skill: "JavaSript",
    },
    {
      id: 3,
      name: "Abdul",
      age: 21,
      skill: "NEET",
    },
    {
      id: 4,
      name: "Salva",
      age: 16,
      skill: "10th",
    },
  ];
  return (
    <div>
      {names.map((naam, index) => (
        <h2 key={index}>
          {index + 1}: {naam}
        </h2>
      ))}
    </div>
  );
}

export default NameList;
