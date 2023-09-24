import "./styles.css";
import Child from "./child";
import {
  useCounterContext,
  useOptCounterContext,
} from "../../../store/context";

const Right = () => {
  const { counter } = useCounterContext();
  const { increment, decrement } = useOptCounterContext();
  return (
    <div className="right_continer">
      {/* <p>Right</p> */}
      <p>Counter (old): {counter}</p>
      <div className="right_wraper">
        <button onClick={increment}>Increase (reducer)</button>
        <button onClick={decrement}>Decrease (reducer)</button>
      </div>
      <Child />
    </div>
  );
};

export default Right;
