import "./styles.css";

import { useCounterContext, useOptCounterContext } from "../../store/context";

const Header = () => {
  const { counter } = useCounterContext();
  const { count, resetCounter } = useOptCounterContext();

  return (
    <div className="header_continer">
      {/* <p>header</p> */}
      <div className="header_wraper">
        <p>Counter (old): {counter}</p>
        <p>|</p>
        <p>Counter (reducer): {count}</p>
      </div>
      <button onClick={resetCounter}>Reset Counter (reducer)</button>
    </div>
  );
};

export default Header;
