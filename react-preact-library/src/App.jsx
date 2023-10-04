import { useState } from "react";
import { signal_count } from "./lib/signal";

import CompA from "./CompA";
import CompB from "./CompB";

function App() {
  const [reactCount, setReactCount] = useState(0);
  const reactUpdate = () => {
    setReactCount((prev) => prev + 1);
  };
  console.log("rendering.....");

  console.log({ signal_count });
  const signalUpdate = () => {
    signal_count.value += 1;
  };

  return (
    <>
      <p>React Preact-Library</p>
      <p>react-count: {reactCount}</p>
      <button onClick={reactUpdate}>increase</button>
      <hr />
      <h3>signal example:</h3>
      <p>signal-count: {signal_count}</p>
      <button onClick={signalUpdate}>increase</button>
      <hr />
      <CompA />
      <hr />
      <CompB />
    </>
  );
}

export default App;
