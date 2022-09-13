import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase.util";
import "./Sign.css";
import Signup from "./Signup";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <>
      <div className="signForm">
        <button onClick={logGoogleUser} className='btn '>Sign In With Google</button>
        <Signup />
      </div>
    </>
  );
};
export default SignIn;
