import React from "react";
import SignIn from "../SignForm/SignIn";
import Signup from "../SignForm/Signup";
import "./Authentication.css";

const Authentication = () => {
  return (
    <div className="form__container">
      <div className="sign__form">
        <SignIn className="input__lable__field" />

        <Signup className="input__lable__field" />
      </div>
    </div>
  );
};
export default Authentication;
