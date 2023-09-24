import "./styles.css";

import {
  useCounterContext,
  useOptCounterContext,
} from "../../../../store/context";

const Child = () => {
  const { increment } = useCounterContext();
  const { count } = useOptCounterContext();

  return (
    <div className="child_continer">
      {/* <p>Child</p> */}
      <p>Counter (reducer): {count}</p>
      <button onClick={increment}>Increase (old)</button>
    </div>
  );
};

export default Child;
