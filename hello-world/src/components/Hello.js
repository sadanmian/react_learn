import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h3 className="dummyClass">Hello Sadan.</h3>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h3", null, "Hello Sadan.")
  );
};

export default Hello;
