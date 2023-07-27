import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

export default iceCreamReducer;
