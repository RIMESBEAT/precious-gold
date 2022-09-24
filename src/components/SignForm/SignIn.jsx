import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthserWithEmailAndPassword,
} from "../../util/firebase.util";
import FormInput from "../FormInput/FormInput";

import "./SignForm.css";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignIn() {
  const [formFields, setFormFiels] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFiels({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFiels(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorect email or password");
          break;
        case "auth/user-not-found":
          alert("User not registered with this email");
          break;
        default:
          console.log(error);
      }

      //   if (error.code === "") {
      //     alert("");
      //   }
      //   console.log("user creation encounter an error", error);
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };
  return (
    <div className="form-input-container">
      <h2 className="form__header">Have Account Already? Sign In Here</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="btn__form__box">
          <button className="btn sign__btn" type="submit">
            {"Sign In "}
          </button>
          {/* REMEMER THAT EVERY BUTTON IN FORM IS FOR SUBMIT, TO AVOID THAT, PUT TYPE='BUTTON' */}
          <button
            className="btn google__btn"
            type="button"
            onClick={signInWithGoogle}
          >
            {"Google "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
