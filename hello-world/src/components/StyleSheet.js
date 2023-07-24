import React from "react";
import "./mystyle.css";

function StyleSheet({ primary }) {
  let className = primary && "primary";
  return <div className={`${className} font-xl`}>StyleSheet</div>;
}

export default StyleSheet;
