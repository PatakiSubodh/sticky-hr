import { useState } from "react";
import servicesData from "../../../src/data/servicesData.jsx";

function ServiceContent() {
    const [activeTab, setActiveTab] = useState("centralized-hrms");
    const selectedService = servicesData.find((service) => service.id === activeTab) || servicesData[0];

    return (
        <>
            <h2 className="text-3xl font-bold text-gray-800 text-center my-6 mx-16">
                Our Product & Services
            </h2>

            <div className="p-8 w-fit">
                {/* Tabs Section */}
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide mb-[-1px]">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className={`relative flex items-center justify-center px-6 pt-3 ${
                                activeTab === service.id ? "bg-[#e4f0f1] rounded-t-xl pb-2" : ""
                            }`}
                        >
                            <button
                                className={`px-6 py-3 text-lg font-medium transition duration-300 whitespace-nowrap ${
                                    activeTab === service.id
                                        ? "bg-[#086165] text-white rounded-lg"
                                        : "text-black"
                                }`}
                                onClick={() => setActiveTab(service.id)}
                            >
                                {service.title}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-2 gap-10 items-center bg-[#e4f0f1] rounded-xl p-8">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">{selectedService.heading}</h2>
                        <div className="mt-6 space-y-4">
                            {selectedService.bulletPoints.map((point, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <span className="text-yellow-500 text-xl">{point.icon}</span>
                                    <div>
                                        <h4 className="text-lg text-gray-700 font-medium">{point.title}</h4>
                                        <p className="text-gray-600">{point.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex justify-center">
                        <img src={selectedService.image} alt={selectedService.title} className="w-[400px] h-[300px]" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceContent;
