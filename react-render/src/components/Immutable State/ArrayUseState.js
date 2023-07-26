import React, { useState } from "react";

const initState = ["Bruce", "Wayne"];

export const ArrayUseState = () => {
  const [person, setPerson] = useState(initState);

  const handleClick = () => {
    const newPerson = [...person];
    newPerson.push("Clark");
    newPerson.push("Kent");
    setPerson(newPerson);
  };

  console.log("Array Use State Render");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {person.map((x) => {
        return <div key={x}>{x}</div>;
      })}
    </div>
  );
};
