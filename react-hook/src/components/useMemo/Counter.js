import React, { useMemo, useState } from "react";

export default function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10000) {
      console.log(i);
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button
          onClick={incrementOne}
          style={{
            border: "none",
            padding: "50px",
            margin: "20px",
            fontSize: "20px",
            cursor: "pointer",
            background: "pink",
          }}
        >
          Conter One || {counterOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button
          onClick={incrementTwo}
          style={{
            border: "none",
            padding: "50px",
            margin: "20px",
            fontSize: "20px",
            cursor: "pointer",
            background: "pink",
          }}
        >
          Conter Two || {counterTwo}
        </button>
      </div>
    </div>
  );
}
