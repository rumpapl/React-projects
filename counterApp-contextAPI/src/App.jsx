import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

import { CounterContextProvider } from "./store/context/counter-context";

import "./app.css";

function App() {
  return (
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
  );
}

export default App;
