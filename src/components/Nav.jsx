import React, { useState, useEffect } from "react";

const scrolledStyle = "bg-white/30 backdrop-blur-lg shadow-lg text-black";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`z-10 transition-all duration-500 ease-in-out px-6 h-[60px] z-1 text-white fixed top-0 left-0 w-full flex items-center justify-center text-sm  ${
        isScrolled ? scrolledStyle : ""
      }`}
    >
      <div className="flex items-center gap-4 absolute left-6">
        <p className="text-blue-300 font-bold">
          Logo 
        </p>
      </div>
      <ul className="flex gap-4">
        <li>About</li>
        <li>Product</li>
        <li>Contacts</li>
        <li>FAQ</li>
      </ul>
    </div>
  );
};

export default Nav;
