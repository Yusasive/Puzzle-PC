import React from "react";
import ClickUp from "../../assets/img/logo.svg";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50  px-[6.95%] w-full">
      {/* Main Navbar */}
      <nav className="py-4 px-[3.65%] flex justify-between items-center">
        {/* Left Logo Section */}
        <div className="flex flex-row items-center px-3 space-x-2 bg-white border-blue-200 border-[1px] rounded-xl h-11">
          <img src={ClickUp} alt="ClickUp Logo" className="w-[85px] h-[21px]" />
          {/* Text section for logo and tagline */}
          <div className="h-6 w-px bg-black mx-auto"></div>
          <div className="items-center">
            <div className="flex flex-col">
              <span className="text-[#292d34] text-xs font-semibold space-y-[-12px] font-sans">
                The everything <br />
                <span className="text-[#292d34] text-xs font-semibold space-y-[-12px] font-sans">
                  app for work.
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Middle Menu Items */}
        <div className="flex flex-row items-center px-1 bg-white border-blue-200 border-[1px] rounded-xl">
          {" "}
          <ul className="hidden md:flex text-[#292d34] text-base font-medium h-11 font-Sans items-center">
            <li className="hover:text-gray-900 cursor-pointer group relative px-4 py-2 hover:bg-gray-100 hover:rounded-lg">
              Product
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-md py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  Task Management
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  Goals
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  Docs
                </a>
              </div>
            </li>
            <li className="hover:text-gray-900 cursor-pointer group relative px-4 py-2 hover:bg-gray-100 hover:rounded-lg">
              Solutions
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-md py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  For Teams
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  For Enterprise
                </a>
              </div>
            </li>
            <li className="hover:text-gray-900 cursor-pointer px-4 py-2 hover:bg-gray-100 hover:rounded-lg">
              Resources
            </li>
            <li className="hover:text-gray-900 cursor-pointer px-4 py-2 hover:bg-gray-100 hover:rounded-lg">
              Pricing
            </li>
            <li className="hover:text-gray-900 cursor-pointer px-4 py-2 hover:bg-gray-100 hover:rounded-lg">
              Enterprise
            </li>
          </ul>
        </div>

        {/* Right Buttons */}

        <div className="flex flex-row items-center px-1 space-x-2 bg-white border-blue-200 border-[1px] rounded-xl h-11">
          <button className="text-[#292d34] text-base font-medium  px-4 py-2 hover:bg-gray-100 hover:rounded-lg">
            Contact Sales
          </button>
        </div>
        <div className="flex flex-row items-center px-1  bg-white border-blue-200 border-[1px] rounded-xl h-11">
          <button className="text-[#292d34] text-base font-medium px-4  py-2 hover:bg-gray-100 hover:rounded-lg">
            Log in
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black px-3 py-[6px] my-1 rounded-xl hover:shadow-lg transition-all">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
