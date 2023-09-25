/* eslint-disable react/prop-types */
import { useReducer, createContext } from "react";

export const OptCounterContext = createContext();

export const RESET = "reset";
export const IMCREMENT = "increment";
export const DECREMENT = "decrement";
export const IMCREMENT_BY_AMOUNT = "increment_by_amount";
export const DECREMENT_BY_AMOUNT = "decrement_by_amount";

const initialState = { count: 0 };

const CounterReducer = (state, action) => {
  switch (action.type) {
    case IMCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    case IMCREMENT_BY_AMOUNT: {
      return { ...state, count: state.count + action.payload };
    }
    case DECREMENT_BY_AMOUNT: {
      return { ...state, count: state.count - action.payload };
    }
    case RESET: {
      return { ...initialState };
    }
    default:
      // eslint-disable-next-line no-irregular-whitespace
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

const OptCounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  const value = { state, dispatch };

  return (
    <OptCounterContext.Provider value={value}>
      {children}
    </OptCounterContext.Provider>
  );
};

export default OptCounterContextProvider;
