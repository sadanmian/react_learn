import { createStore } from "redux";
import { reducer } from "./cake/cakeReducer";

export const store = createStore(reducer);
