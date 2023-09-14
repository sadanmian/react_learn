import React from "react";

export default function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} || {count}
    </div>
  );
}
