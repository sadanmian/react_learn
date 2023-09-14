import React, { useEffect } from "react";

export default function useDocumentTitle(count) {
  useEffect(() => {
    console.log("useDocumentTitle");
    document.title = `${count}`;
  }, [count]);
}
