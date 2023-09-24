import "./styles.css";

import { useCounterContext } from "../../store/context";

const Header = () => {
  const { counter } = useCounterContext();

  return (
    <div className="header_continer">
      <span>header</span>
      <span>value: {counter}</span>
    </div>
  );
};

export default Header;
