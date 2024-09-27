import React from "react";
import DashboardImg from "../../assets/img/collaborate.png";

const SaveTimeSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-0 space-y-[14px]">
      {/* Main content */}
      <div className="w-full flex flex-col justify-center items-center text-center lg:px-[32%] lg:pb-20">
        <h1 className="text-[48px] text-[#24223e] font-black leading-tight">
          Save time and get more done
        </h1>
        <p className="text-xl text-[#292d34] font-semibold">
          Supercharge productivity. Streamline work by doing it, and seeing it,
          in one place.
        </p>
      </div>

      <div className="flex flex-row justify-center items-center space-x-6 lg:pl-[10%]">
        <div className="flex flex-col space-y-4 items-start max-w-xl">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Improve collaboration
          </h1>
          <p className="text-lg font-medium text-[#292d34] text-left">
            <b>
              Get your teams working together more closely, even if they’re far
              apart.
            </b>
            Centralize project-related communications in one place, brainstorm
            ideas with Whiteboards, and draft plans together with collaborative
            Docs.
          </p>

          <div className="space-x-2">
            <span className="text-lg font-normal text-[#292d34] border-[1px] rounded-lg shadow-md py-2 border-gray-300 px-4 hover:bg-slate-100">
              Comments
            </span>
            <span className="text-lg font-normal text-[#292d34] border-[1px] rounded-lg shadow-md py-2 border-gray-300 px-4 hover:bg-slate-100">
              Docs
            </span>
            <span className="text-lg font-normal text-[#292d34] border-[1px] rounded-lg shadow-md py-2 border-gray-300 px-4 hover:bg-slate-100">
              Whiteboards
            </span>
            <span className="text-lg font-normal text-[#292d34] border-[1px] rounded-lg shadow-md py-2 border-gray-300 px-4 hover:bg-slate-100">
              Clips
            </span>
          </div>

          <a href="/" className="text-4xl font-black text-gray-400 hover:bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 hover:bg-clip-text hover:text-transparent py-4">
            Enhance visibility
          </a>
          <a href="/" className="text-4xl font-black text-gray-400 hover:bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 hover:bg-clip-text hover:text-transparent py-4">
            Automate work
          </a>
        </div>

        <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 mr-[-20px]">
          <img src={DashboardImg} alt="DashboardImg" className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
};

export default SaveTimeSection;
