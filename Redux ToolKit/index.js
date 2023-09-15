const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// Initial State
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// };
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceState = {
  numOfIceCream: 10,
};

// Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_ORDERED = "ICE_ORDERED";
const ICE_RESTOCKED = "ICE_RESTOCKED";

// Action creater
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

const orderIce = () => {
  return {
    type: ICE_ORDERED,
    payload: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};
const restockIce = (qty = 1) => {
  return {
    type: ICE_RESTOCKED,
    payload: qty,
  };
};

// Reducer
const cakeReducer = (state = initialCakeState, action) => {
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
const iceReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case ICE_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case ICE_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };

    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  cakeReducer,
  iceReducer,
});

// Redux store

//1 Hold Application state
const store = createStore(rootReducer, applyMiddleware(logger));

//2 Allows access to state via getState()
console.log("Initial State", store.getState());

//4 Registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(() => {});

//3 Allows state to be updated via dispatch(action)
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
const actions = bindActionCreators(
  {
    orderCake,
    restockCake,
    orderIce,
    restockIce,
  },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderIce();
actions.orderIce();
actions.orderIce();
actions.restockCake(3);
actions.restockIce(3);

//4 Handles unregistering of listeners via the function returned by subscribe(listener)
unsubscribe();
