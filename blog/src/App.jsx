import ENV_VARIABLES from "./config/env-variables";

function App() {
  return (
    <>
      <p>Blog App</p>
      <p>{ENV_VARIABLES.appwriteCollectionId}</p>
      <p>{ENV_VARIABLES.appwriteDatabaseId}</p>
      <p>{ENV_VARIABLES.appwriteProjectId}</p>
      <p>{ENV_VARIABLES.appwriteUrl}</p>
    </>
  );
}

export default App;
