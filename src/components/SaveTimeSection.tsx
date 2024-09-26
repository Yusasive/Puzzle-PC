import React from "react";
import DashboardImg from "../../assets/img/collaborate.png";

const SaveTimeSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-[6.95%]  space-y-[14px]">
      <div className="w-[42%] justify-center items-center text-center">
        <h1 className="text-[41px] text-[#24223e] font-black leading-tight">
          Save time and get more done
        </h1>
        <p className="text-lg text-[#292d34] font-semibold">
          Supercharge productivity. Streamline work by doing it, and seeing it,
          in one place.
        </p>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col space-y-4 items-start">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Improve collaboration
          </h1>
          <p className="text-lg font-medium text-[#292d34] text-left">
            <b>
              Get your teams working together more closely, even if they’re far
              apart.
            </b>{" "}
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
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent py-4">
            Enhance visibility
          </h1>
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent py-4">
            Automate work
          </h1>
        </div>
        <div
          className="flex">
          <img src={DashboardImg} alt="DashboardImg" className="top-0 left-20" />
        </div>
      </div>
    </section>
  );
};

export default SaveTimeSection;
