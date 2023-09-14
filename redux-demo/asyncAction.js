const redux = require("redux");
const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleware = require("redux-thunk").default;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      state;
  }
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.name);
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: users });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
      });
  };
};

const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
