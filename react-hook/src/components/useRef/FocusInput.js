import React, { useEffect, useRef } from "react";

export default function FocusInput() {
  const ref = useRef();

  useEffect(() => {
    // focus input
    ref.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="">Input</label>
      <input
        ref={ref}
        type="text"
        style={{
          marginLeft: "20px",
          border: "none",
          borderBottom: "1px solid gray",
          outline: "none",
        }}
      />
    </div>
  );
}
