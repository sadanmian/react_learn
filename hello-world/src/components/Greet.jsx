import React from "react";

// function Greet() {
//     return(
//         <div>Hello Sadan Mian</div>
//     )
// }

export const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello {name} {heroName}
      </h1>
    </div>
  );
};

// export default Greet;
