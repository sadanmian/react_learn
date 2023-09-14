const redux = require("redux");
const reduxLogger = require("redux-logger");

const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const initialCakeState = {
  numOfCake: 10,
};
const initialIceCreamState = {
  numOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICE":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = redux.createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubstribe = store.subscribe(() => {});
store.dispatch({ type: "BUY_CAKE", payload: 2 });
store.dispatch({ type: "BUY_ICE", payload: 5 });
store.dispatch({ type: "BUY_CAKE", payload: 1 });
store.dispatch({ type: "BUY_CAKE", payload: 3 });
store.dispatch({ type: "BUY_ICE", payload: 10 });

unsubstribe();
