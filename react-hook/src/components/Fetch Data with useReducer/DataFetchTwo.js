import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
        post: action.payload,
      };
      break;
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };
      break;

    default:
      return state;
      break;
  }
};

export default function DataFetchTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    }
    fetch();
  });

  return (
    <div>
      {state.loading ? "Loading...." : state.post.title}{" "}
      {state.error && state.error}
    </div>
  );
}
