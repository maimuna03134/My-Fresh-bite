import React from "react";
import logo from "../../assets/food_api_logo.png";
const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <span className="animate-ping ">
        <img src={logo} alt="Loading..." className="w-" />
      </span>
    </div>
  );
};

export default Loader;
