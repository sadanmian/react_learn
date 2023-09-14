import React, { useEffect, useRef, useState } from "react";

export default function HookTimer() {
  const [timer, setTimer] = useState(0);

  const ref = useRef();

  useEffect(() => {
    console.log("useEffect");

    ref.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("Clear");
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div>
      Timer || {timer}{" "}
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={() => clearInterval(ref.current)}
      >
        Clear Timer
      </button>
    </div>
  );
}
