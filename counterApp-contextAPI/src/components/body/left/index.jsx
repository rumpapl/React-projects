import { useCounterContext } from "../../../store/context";
import "./styles.css";

const Left = () => {
  const { counter } = useCounterContext();
  return (
    <div className="left_continer">
      <p>Left</p>
      <p>Counter value: {counter}</p>
    </div>
  );
};

export default Left;
