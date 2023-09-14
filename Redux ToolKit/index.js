const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

// Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
// Action creater
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
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
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
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
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
const actions = bindActionCreators(
  {
    orderCake,
    restockCake,
  },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

//4 Handles unregistering of listeners via the function returned by subscribe(listener)
unsubscribe();
