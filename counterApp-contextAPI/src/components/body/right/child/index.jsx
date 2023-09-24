import "./styles.css";

import { useCounterContext } from "../../../../store/context";

const Child = () => {
  const { increment } = useCounterContext();

  return (
    <div className="child_continer">
      <p>Child</p>
      <button onClick={increment}>Increase value</button>
    </div>
  );
};

export default Child;
