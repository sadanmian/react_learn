// import { UserContext } from "./UserContext.js";

import { createContext } from "react";

export const UserContext = createContext();

export const UserState = (props) => {
  return (
    <UserContext.Provider value={"Mian"}>{props.children}</UserContext.Provider>
  );
};
