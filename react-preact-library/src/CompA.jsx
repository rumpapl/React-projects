import { signal_count } from "./lib/signal";

const CompA = () => {
  return (
    <div>
      <h2 style={{ color: "blue" }}>Component A</h2>
      <p>Count: {signal_count}</p>
    </div>
  );
};

export default CompA;
