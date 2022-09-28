import { useState } from "react";
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
