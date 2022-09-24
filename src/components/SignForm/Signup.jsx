import { useState } from "react";
import {
  createAuthserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../util/firebase.util";
import FormInput from "../FormInput/FormInput";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Signup = () => {
  const [formFields, setFormFiels] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFiels({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {  
    setFormFiels(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const { user } = await createAuthserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in=use") {
        alert("Cannot create User, email already in use");
      } else {
        console.log("user creation encounter an error", error);
      }
    }
  };
  return (
    <div className="form-input-container">
      <h2 className="form__header">No Account Yet? Register Here</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={displayName}
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <button className="btn sign__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Signup;
