import React from "react";
import { Link } from "react-router-dom";

// use :<Button text="Browse" className="bg-white text-black" to="/SigninPage" />

const Button = ({ to, className, text }) => {
  return (
    <button className={`px-6 py-3 rounded-lg ${className}`}>
      <Link to={to}>{text}</Link>
    </button>
  );
};

export default Button;
