import React, { useEffect } from "react";

function useDocumentTitles(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitles;
