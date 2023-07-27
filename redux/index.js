const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// Reducer
const initialState = {
  numOfCakes: 10,
};

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...currentState,
        numOfCakes: currentState.numOfCakes - 1,
      };
      break;

    default:
      return currentState;
      break;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
