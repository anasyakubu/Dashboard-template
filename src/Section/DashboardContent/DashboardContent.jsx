// import React from 'react'
import { FaProjectDiagram, FaGlobe, FaPuzzlePiece } from "react-icons/fa";
import { HiOutlineBell, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";

const DashboardContent = () => {
  return (
    <div className="DashboardContent">
      <div className="min-h-screen py-10 p-32">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-md font-light">Welcome back.</h1>
            <h2 className="text-3xl font-bold">Good Morning, Anas.</h2>
          </div>
          <div className="flex items-center space-x-4">
            <HiOutlineBell className="text-2xl text-gray-500" />
            <HiOutlineQuestionMarkCircle className="text-2xl text-gray-500" />
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-white">
              AY
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaProjectDiagram className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">2</h3>
            <p className="text-gray-600">Deployed Projects</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaGlobe className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">2</h3>
            <p className="text-gray-600">Connected Domains</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaPuzzlePiece className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">0</h3>
            <p className="text-gray-600">Integrated Apps</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-semibold">Integrations</h3>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
            <IoMdAddCircle className="mr-2" /> Create New
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            Make your project flow seamless with third-party integrations like
            Slack and Notion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
