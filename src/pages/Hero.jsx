import React from "react";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <div className="h-screen relative overflow-hidden bg-gray-100">
      {/* Nav */}
      <Nav />

      {/* Floating Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-[200%] h-[200%] bg-gradient-to-r from-blue-800 via-pink-700 to-purple-700 animate-gradientBlur opacity-50"></div>
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-1"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
      ></div>

      {/* Content */}
      <div className="text-center relative z-10 text-gray-800 h-full flex items-center justify-center">
        <div className="border max-w-[600px] w-[80%] bg-white/70 rounded-lg shadow-lg">
          <h1 className="text-3xl sm:text-5xl font-bold border-none border-gray-100 px-6 py-2 text-blue-500">
            CENTRUMSCIEN
          </h1>
          <p className="text-sm p-3">
            At CentrumScien, we are dedicated to driving innovation and
            excellence in the tech industry. Our mission is to create
            cutting-edge solutions that empower businesses and individuals to
            thrive in a rapidly evolving digital world. With a focus on quality,
            creativity, and forward-thinking, we aim to shape the future of
            technology and deliver exceptional value to our clients and
            partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
