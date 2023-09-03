import React, { useState } from "react";
import HookMouse from "./HookMouse";
import IntervalHookCounter from "./IntervalHookCounter";

export default function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {/* {display && <HookMouse />} */}
      {display && <IntervalHookCounter />}
    </div>
  );
}
