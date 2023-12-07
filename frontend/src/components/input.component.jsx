import React from "react";
import { useState } from "react";
const InputContainer = ({ name, type, placeholder, icon }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="relative w-full">
      <i className={"fi " + icon + " input-icon"}></i>
      <input
        type={type === "password" ? (passwordVisible ? "text" : type) : type}
        name={name}
        className="input-box"
        placeholder={placeholder}
      />

      {type === "password" ? (
        <i
          className={`${
            "fi fi-rr-eye" + (passwordVisible ? "-crossed" : "")
          }  input-icon left-auto right-4 cursor-pointer`}
          onClick={() => setPasswordVisible((prev) => !prev)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputContainer;

// placeholder,type,icon,type
