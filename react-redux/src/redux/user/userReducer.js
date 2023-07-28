import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

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

export default reducer;
