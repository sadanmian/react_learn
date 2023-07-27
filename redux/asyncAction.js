const redux = require("redux");
const { default: thunk } = require("redux-thunk");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

function fetchuserRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}
function fetchuserSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}
function fetchuserFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
      break;
    case FETCH_USERS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        users: action.payload,
        error: "",
      };
      break;
    case FETCH_USERS_FAILURE:
      return {
        ...prevState,
        loading: false,
        users: [],
        error: action.payload,
      };
      break;

    default:
      break;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchuserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the array of users
        const users = response.data.map((user) => user.id);
        dispatch(fetchuserSuccess(users));
      })
      .catch((error) => {
        // error.message is the error
        dispatch(fetchuserFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers())
