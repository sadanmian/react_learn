const redux = require("redux");
const createStore = redux.createStore;

// Action
const CAKE_ORDERED = "CAKE_ORDERED";
// Action creater
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

// Initial State
const initialState = {
  numOfCakes: 10,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

// Redux store

//1 Hold Application state
const store = createStore(reducer);
//2 Allows access to state via getState()
console.log("Initial State", store.getState());
//4 Registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
//3 Allows state to be updated via dispatch(action)
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
//4 Handles unregistering of listeners via the function returned by subscribe(listener)
unsubscribe();
