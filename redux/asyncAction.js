const redux = require("redux");
const createStore = redux.createStore;

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

const store = createStore(reducer);
