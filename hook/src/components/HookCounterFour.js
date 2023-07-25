import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    return setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1),
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.map((e) => {
          return (
            <li key={e.id}>
              id:{e.id} Value{e.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HookCounterFour;
