import React, { useEffect, useState } from "react";

export default function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse Event");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {x} and Y - {y}
    </div>
  );
}
