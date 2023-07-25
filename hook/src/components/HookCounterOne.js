import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You Clicked ${count} times using useEffect`;
  });
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Hook Counter Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
