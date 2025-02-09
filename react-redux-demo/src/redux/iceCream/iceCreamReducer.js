import { BUY_ICECREAM } from "./iceCreamTypes";
const initialState = {
  numOfIceCreams: 20
};

//define reducer function

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,//copy of state 
        numOfIceCreams: state.numOfIceCreams - 1,//and only change
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
