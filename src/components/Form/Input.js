import React from "react";
import "./Input.css";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="InputComponent">
      <label htmlFor={name}> {label} </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
