import React, { useContext } from "react";
import { UserContext } from "../../App";

export default function ComponentE() {
  const a = useContext(UserContext);

  return <div>ComponentE {a}</div>;
}
