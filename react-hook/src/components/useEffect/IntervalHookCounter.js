import React, { useEffect, useState } from "react";

export default function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log("Tick");
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("UseEffect");
    const interval = setInterval(tick, 1000);
    return () => {
      console.log("Clean");
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
}
