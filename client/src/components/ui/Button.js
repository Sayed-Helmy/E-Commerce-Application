import React from "react";
import { useNavigate } from "react-router-dom";

// use :<Button text="Browse" className="bg-white text-black" to="/SigninPage" />

const Button = ({ to, className, text }) => {
  const navigator = useNavigate();
  return (
    <button
      onClick={() => navigator(to)}
      className={`px-6 py-3 rounded-lg ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;
