import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

import { OptCounterContextProvider } from "./store/context";
import { CounterContextProvider } from "./store/context/counter-context";

import "./app.css";

function App() {
  return (
    <OptCounterContextProvider>
      <CounterContextProvider>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Body />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </CounterContextProvider>
    </OptCounterContextProvider>
  );
}

export default App;
