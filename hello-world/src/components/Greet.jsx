import React from "react";

// function Greet() {
//     return(
//         <div>Hello Sadan Mian</div>
//     )
// }

export const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

// export default Greet;
