import React from "react";
import "./FormInput.css";
function FormInput({ label, ...otherProps }) {
  return (
    <div className="group__container">

    
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
    </div>
  );
}

export default FormInput;
