import React, { useEffect, useState } from "react";

export default function DocTitleOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect");
    document.title = `${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count || {count}</button>
    </div>
  );
}
