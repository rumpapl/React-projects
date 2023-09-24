import { useContext } from "react";
import { CounterContext } from "./provider";

const useCounterContext = () => {
  return useContext(CounterContext);
};
export default useCounterContext;
