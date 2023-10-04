import { signal_count } from "./lib/signal";

const CompB = () => {
  return (
    <div>
      <h2 style={{ color: "green" }}>Component B</h2>
      <p>Count: {signal_count}</p>
      <p>Count*2: {signal_count * 2}</p>
    </div>
  );
};

export default CompB;
