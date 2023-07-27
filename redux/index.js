const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}

// Reducer

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// };
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCream: 20,
};

// const reducer = (currentState = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...currentState,
//         numOfCakes: currentState.numOfCakes - 1,
//       };
//       break;
//     case BUY_ICECREAM:
//       return {
//         ...currentState,
//         numOfIceCream: currentState.numOfIceCream - 1,
//       };
//       break;

//     default:
//       return currentState;
//       break;
//   }
// };
const cakeReducer = (currentState = initialCakeState, action) => {
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
const iceCreamReducer = (currentState = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...currentState,
        numOfIceCream: currentState.numOfIceCream - 1,
      };
      break;
    default:
      return currentState;
      break;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
