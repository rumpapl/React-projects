import { useCounterContext } from "../../store/context";
import "./styles.css";

const Footer = () => {
  const { counter, decrement } = useCounterContext();
  return (
    <div className="footer_continer">
      <p>footer</p>
      <p>counter: {counter}</p>
      <button onClick={decrement}>Decrease Value</button>
    </div>
  );
};

export default Footer;
