import React from "react";

const Footer = () => {
  return (
    <div className="mt-[12] sm:mt-24 bg-primary">
      <div className="p-12">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <div className="font-bold text-brand-dark text-2xl mb-2">
              <p>centrumscien</p>
              <small>RC - 8378678</small>
            </div>
            <ul className="flex gap-6">
              <li>
                <a href="#how-it-works">about</a>
              </li>
              <li>
                <a href="#features">products</a>
              </li>
              <li>
                <a href="#testimonials">contacts</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="mt-6 sm:mt-0">
            <div className="mb-2">Join our news letter</div>
            <div className="flex sm:flex-row flex-col">
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-white p-3 rounded mr-4 sm:min-w-[300px] w-full border border-gray-300"
              />
              <button className="px-4 py-2 bg-blue-900 text-white font-bold rounded mt-2 sm:mt-0 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="bg-gray-800 my-8" />
        <div className="flex justify-between items-center">
          <div className="">&copy; 2025. All Rights Reserved</div>
          <div className="flex gap-4">
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
