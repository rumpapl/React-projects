import {
  useCounterContext,
  useOptCounterContext,
} from "../../../store/context";
import "./styles.css";

const Left = () => {
  const { counter } = useCounterContext();
  const { count, increment_by_amount } = useOptCounterContext();
  return (
    <div className="left_continer">
      {/* <p>Left</p> */}
      <div className="body_wraper">
        <p>counter (old): {counter}</p>
        <p>|</p>
        <p>counter (reducer): {count}</p>
      </div>
      <button onClick={() => increment_by_amount(10)}>
        Increase by 10 (reducer)
      </button>
    </div>
  );
};

export default Left;
