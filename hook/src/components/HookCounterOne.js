import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect-Updating Document title");
    document.title = `You Clicked ${count} times using useEffect`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Hook Counter Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
