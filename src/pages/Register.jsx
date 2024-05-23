import React from "react";
import Navbar from "../components/Navbar";
// import SignUp from './SignUp'
import SignupPage from "./SignupPage";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <div>
        <SignupPage defaultName="Lokesh" />
      </div>

      
    </div>
  );
};

export default Register;
