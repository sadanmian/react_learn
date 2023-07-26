import React, { useState } from "react";
import useDocumentTitles from "../hooks/useDocumentTitles";

function DocTitleTwo() {
  const [count, setCount] = useState(0);
  useDocumentTitles(count);

  return (
    <div>
      <button
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        DocTitleTwo : {count}
      </button>
    </div>
  );
}

export default DocTitleTwo;
