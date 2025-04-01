import React from "react";

const Nav = () => {
  return (
    <div className="relative px-6 h-[60px] z-1 text-white fixed top-0 left-0 w-full flex items-center justify-center text-sm">
      <div className="flex items-center gap-4 absolute left-6">
        <p className="text-blue-300 font-bold">
          Logo <small>centrumscien</small>
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
