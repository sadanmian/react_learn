import React, { useState } from "react";

const initState = {
  fname: "Bruce",
  lname: "Wayne",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    const newPerson = { ...person };
    newPerson.fname = "Clark";
    newPerson.lname = "Kent";
    setPerson(newPerson);
  };

  console.log("Object UseState Render");
  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname} from Object
      </button>
    </div>
  );
};
