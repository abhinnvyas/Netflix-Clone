import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase.js";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";
import { useHistory } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <div className="profileScreen">
      <Nav className="nav" />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <PlansScreen />

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                Sign out
              </button>

              <p
                onClick={() => {
                  history.push("/");
                }}
                className="profileScreen__goback"
              >
                Watch Netflix
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
