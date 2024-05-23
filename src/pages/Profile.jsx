import React, {  useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import popcorn from "../components/pictures/popcorn.png";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../App";
import { userLogout } from "../redux/actions";

import "./styles/profile.css";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { darkTheme } = useContext(ThemeContext);

  const profileStyle = {
    color: darkTheme ? "#ffffff" : "#000000",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Navbar></Navbar>
      <div className="profile">
        <img src={popcorn} alt="Popcorn" className="popcorn-img" />
        <div className="profile-content" style={profileStyle}>
          {user && user.isLoggedIn === true ? (
            <div>
              <h1> MY PROFILE </h1>
              <p> NAME : {user.name} </p>
              <p> EMAIL : {user.email} </p>
              <p> PASSWORD : {user.password} </p>
              <button 
                className="logout-btn"
                onClick={() => {
                  dispatch(userLogout());
                }}
              >
                {" "} LOGOUT{" "}
              </button>
            </div>
          ) : (
            <p> NO USER LOGGED IN </p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Profile;
