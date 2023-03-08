import React from "react";
import "./Input.css";

const Input = ({ label, type, name }) => {
  return (
    <div className="Input">
      <label htmlFor={name}> {label} </label>
      <input id={name} name={name} type={type} />
      <p>Error</p>
    </div>
  );
};

export default Input;
