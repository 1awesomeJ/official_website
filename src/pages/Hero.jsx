import React from "react";
import Nav from "../components/Nav";
import hero_bg from "../assets/hero_bg.jpg";

const Hero = () => {
  return (
    <div
      className="h-screen relative"
      style={{ backgroundImage: `url(${hero_bg})`, backgroundSize: "cover" }}
    >
      {/* Nav */}
      <Nav />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>

      {/* Content */}
      <div className=" text-center relative z-1 text-white h-full flex items-center justify-center">
        <div className="border mx-[600px]">
          <h1 className="text-5xl font-bold border border-gray-100 px-6 py-2 text-blue-300">CENTRUMSCIEN</h1>
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
