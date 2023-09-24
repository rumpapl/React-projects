import "./styles.css";
import Child from "./child";
import { useCounterContext } from "../../../store/context";

const Right = () => {
  const { counter } = useCounterContext();
  return (
    <div className="right_continer">
      <p>Right</p>
      <p>value: {counter}</p>
      <Child />
    </div>
  );
};

export default Right;
