import React from "react";
import { ArrowUpRight } from "lucide-react";


const Layout = () => {
    return (
    <div className="flex w-full h-screen px-10 py-8">
      {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-center pl-12">
        <h1 className="text-5xl font-bold text-gray-900">
            Experience the Difference
        </h1>
        <p className="text-2xl text-gray-900 mt-4">
            Discover why StickyHR reigns the HR-Tech industry
        </p>
        <button className="mt-6 text-xl bg-yellow-400 w-64 h-16 text-black font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 hover:bg-yellow-500">
            Talk to an Expert <ArrowUpRight className="w-6 h-6 text-black size-28" />
        </button>
        </div>

      {/* Right Section */}
        <div className="w-1/2 pr-10 pt-8 pb-8 grid grid-cols-2 gap-6 relative">
            {/* Box 1 (Lower) */}
            <div className="bg-gray-100 shadow-lg p-5 rounded-2xl shadow-gray-300 flex flex-col h-full -mt-5">
            <div className="flex"><span className="bg-blue-600 text-white p-2 rounded-tl-none rounded-tr-xl 
                rounded-bl-xl rounded-br-none w-12 flex justify-center">🔹</span>
                <h3 className="font-bold text-lg mt-2 ml-3 flex justify-center">Centralized Platform</h3>
                </div>
                <p className="text-gray-600 mt-4 ">
                StickyHR HRMS provides an all-in-one solution with an interactive dashboard, employee database, and self-service features, helping businesses save costs.
                </p>
            </div>

            {/* Box 2 (Higher) */}
            <div className="bg-gray-100 shadow-lg p-5 rounded-2xl shadow-gray-300 flex flex-col h-full mt-5">
            <div className="flex"><span className="bg-green-600 text-white p-2 rounded-tl-none rounded-tr-xl 
                rounded-bl-xl rounded-br-none w-12 flex justify-center">👥</span>
                <h3 className="font-bold text-xl mt-2 ml-3 flex justify-center">User Experience</h3></div>
                <p className="text-gray-600 mt-4">
                Our HRMS is easy to use, allowing employees to navigate smoothly and complete HR tasks effortlessly.
                </p>
            </div>

            {/* Box 3 (Lower) */}
            <div className="bg-gray-100 shadow-lg p-5 rounded-2xl shadow-gray-300 flex flex-col h-full -mt-5">
            <div className="flex"><span className="bg-yellow-500 text-white p-2 rounded-tl-none rounded-tr-xl 
                rounded-bl-xl rounded-br-none w-12 flex justify-center">🛡</span>
                <h3 className="font-bold text-lg mt-2 ml-3 flex justify-center">Data Security</h3></div>
                <p className="text-gray-600 mt-4">
                We comply with VAPT, ISO, and AICPA SOC standards, ensuring adherence to GDPR and HIPAA through regular audits.
                </p>
            </div>

            {/* Box 4 (Higher) */}
            <div className="bg-gray-100 shadow-lg p-5 rounded-2xl shadow-gray-300 flex flex-col h-full mt-5">
            <div className="flex"><span className="bg-red-500 text-white p-2 rounded-tl-none rounded-tr-xl 
                rounded-bl-xl rounded-br-none w-12 flex justify-center">🤖</span>
                <h3 className="font-bold text-lg mt-2 ml-3 flex justify-center">AI-Driven Technology</h3></div>
                <p className="text-gray-600 mt-4">
                StickyHR HRMS automates tasks, improves processes, and provides workforce insights with AI.
                </p>
            </div>
        </div>
    </div>
    );
};

export default Layout;
