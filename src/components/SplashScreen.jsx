import React from "react";
import Load from "../assets/Load.gif";

const SplashScreen = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center">
        <img src={Load} alt="" className="scale-75" />
      </div>
    </div>
  );
};

export default SplashScreen;
