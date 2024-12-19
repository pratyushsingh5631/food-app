import React from "react";
import { useState } from "react";

const Button = () => {
  const [buttonName, setButtonName] = useState("Log In");
  return (
    <button
      className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
      onClick={() => {
        buttonName === "Log In"
          ? setButtonName("Log Out")
          : setButtonName("Log In");
      }}
    >
      {buttonName}
    </button>
  );
};

export default Button;
