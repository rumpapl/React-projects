import { useContext } from "react";
import {
  OptCounterContext,
  IMCREMENT,
  DECREMENT,
  IMCREMENT_BY_AMOUNT,
  DECREMENT_BY_AMOUNT,
  RESET,
} from "./provider";

const useOptCounterContext = () => {
  const { state, dispatch } = useContext(OptCounterContext);
  const { count } = state || {};

  const increment = () => {
    dispatch({ type: IMCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const increment_by_amount = (amount) => {
    dispatch({ type: IMCREMENT_BY_AMOUNT, payload: amount });
  };

  const decrement_by_amount = (amount) => {
    dispatch({ type: DECREMENT_BY_AMOUNT, payload: amount });
  };

  const resetCounter = () => {
    dispatch({ type: RESET });
  };

  return {
    count,
    resetCounter,
    increment,
    decrement,
    increment_by_amount,
    decrement_by_amount,
  };
};
export default useOptCounterContext;
