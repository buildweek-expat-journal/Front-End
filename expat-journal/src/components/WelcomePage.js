import React from "react";
import Nav from "./Nav";
import SignUp from './SignUp';

export default function WelcomePage() {
  return (
    <div className="container">
      <header>
        <Nav />
      </header>
      <div className="leftWelcome">
        <h1>Welcome to Expats' Journal</h1>
        <p>Some slogan here.</p>
        <img className="main-img" src="#" alt="main page image" />

        <button>Log In</button>
      </div>
      <div className="rightWelcome">
          <h1>Not a member?</h1>
          <SignUp />
      </div>
    </div>
  );
}
