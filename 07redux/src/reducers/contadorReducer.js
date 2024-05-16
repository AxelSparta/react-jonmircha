import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

const initialState = {
  contador: 0,
};

export const contadorReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        contador: state.contador + 1,
      };

    case DECREMENT:
      return {
        contador: state.contador - 1,
      };
    case INCREMENT_5:
      return {
        contador: state.contador + action.payload,
      };
    case DECREMENT_5:
      return {
        contador: state.contador - action.payload,
      };
    case RESET:
      return initialState;

    default:
      return state;
  }
};
