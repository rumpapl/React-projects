import UserContextProvider from "./stores/context/userConrtextProvider";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <UserContextProvider>
      <>
        <h1>App root</h1>
        <Login />
        <br />
        <Home />
      </>
    </UserContextProvider>
  );
}

export default App;
