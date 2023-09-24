import { useCounterContext, useOptCounterContext } from "../../store/context";
import "./styles.css";

const Footer = () => {
  const { counter, decrement } = useCounterContext();
  const { count, decrement_by_amount } = useOptCounterContext();
  return (
    <div className="footer_continer">
      {/* <p>footer</p> */}
      <div className="footer_wraper">
        <p>counter (old): {counter}</p>
        <p>|</p>
        <p>counter (reducer): {count}</p>
      </div>
      <div className="footer_wraper">
        <button onClick={decrement}>Decrease (old)</button>
        <button onClick={() => decrement_by_amount(5)}>
          Decrease by 5 (reducer)
        </button>
      </div>
    </div>
  );
};

export default Footer;
