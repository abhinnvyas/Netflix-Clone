import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen.js";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="LoginScreen">
      <div className="LoginScreen__background">
        <img
          onClick={() => setSignIn(false)}
          className="top__netflix__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button className="top__signin__button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
        <div className="LoginScreen__gradient" />
        <div className="LoginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="LoginScreen__input">
                <form>
                  <input
                    className=""
                    type="email"
                    placeholder="EMAIL ADDRESS"
                  />
                  <button
                    type="button"
                    className="LoginScreen__getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
