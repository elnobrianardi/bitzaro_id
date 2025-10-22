import React from "react";
import background from "../assets/background-purple.png";

const Start = () => {
  return (
    <div className="flex justify-center items-center bg-black pt-8 pb-32">
      <div className="relative">
        <img
          src={background.src}
          alt="Background"
          className="w-[1200px] h-auto max-w-none"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Want to start trading right away?</h1>
          <p className="mt-4">Register your account immediately and start trading.</p>
          <button className="bg-white text-black px-3 py-3 mt-4 rounded-sm">Register now <span className="ml-24">→</span> </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
