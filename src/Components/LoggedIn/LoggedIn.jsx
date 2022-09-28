import React from "react";
import "./LoggedIn.css";

const LoggedIn = ({ setIsLoggedIn }) => {
  return (
    <>
      <h1 className="title">You are now logged in!</h1>
      <button className="back_button" onClick={() => setIsLoggedIn(false)}>
        Go Back
      </button>
    </>
  );
};

export default LoggedIn;
