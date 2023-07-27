const BUY_CAKE = "BUY_CAKE";

// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First reduc action",
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
