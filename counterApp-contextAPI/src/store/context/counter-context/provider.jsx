/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => {
      if (prev < 10) return prev + 1;
      return prev;
    });
  };

  const decrement = () => {
    setCounter((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
