import { useContext } from "react";
import UserContext from "../../stores/context/userContext";

const Home = () => {
  const { user } = useContext(UserContext);

  if (!user) return;

  return (
    <>
      <span>{user.name}</span>
    </>
  );
};

export default Home;
