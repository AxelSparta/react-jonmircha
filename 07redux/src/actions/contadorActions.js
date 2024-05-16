import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

export const add = () => ({
  type: INCREMENT,
});

export const subtrack = () => ({
  type: DECREMENT,
});

export const add_5 = (payload) => ({
  type: INCREMENT_5,
  payload,
});

export const subtrack_5 = (payload) => ({
  type: DECREMENT_5,
  payload,
});

export const reset = () => ({
  type: RESET,
});
