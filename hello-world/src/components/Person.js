import React from "react";

function Person({ prop }) {
  return (
    <div>
      <h1>
        I am {prop.name}. I am {prop.age} years old and I know {prop.skill}
      </h1>
    </div>
  );
}

export default Person;
