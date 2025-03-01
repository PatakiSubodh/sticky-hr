import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PricingForm() {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        contactNumber: "",
        companyName: "",
        employees: "",
        seniority: "",
        functionalArea: "",
        source: "",
        selectedFeatures: [],
    });

    const features = [
        "Virtual HR Management",
        "Core HR",
        "Talent Acquisition",
        "Performance Management",
        "Time & Attendance Management",
        "Talent Management",
        "Payroll",
        "Employee Helpdesk",
        "Expense Management",
        "Assets Management",
    ];

    const employeeOptions = [
        "0 - 200",
        "201 - 500",
        "501 - 1000",
        "1001 - 2500",
        "2501 - 5000",
        "5001 - 10000",
        "10001+",
    ];

    const handleCheckboxChange = (feature) => {
        setFormData((prev) => ({
            ...prev,
            selectedFeatures: prev.selectedFeatures.includes(feature)
                ? prev.selectedFeatures.filter((f) => f !== feature)
                : [...prev.selectedFeatures, feature],
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            contactNumber: value,
        }));
    };

    return (
        <div className="bg-[#E1EEF0] min-h-screen flex flex-col items-center justify-center py-16 px-6">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Choose what your business needs and get <br />
                a customized set of product features.
            </h2>

            {/* Layout Container */}
            <div className="max-w-6xl w-full flex flex-wrap lg:flex-nowrap justify-center items-start gap-5">
                {/* Left: Form */}
                <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/2 ml-20">
                    <div className="space-y-4">
                        {/* Work Email */}
                        <div>
                            <label className="text-sm font-semibold">Work Email*</label>
                            <input
                                type="email"
                                placeholder="Enter the work email"
                                className="w-full p-3 border rounded-md mt-1"
                            />
                        </div>

                        {/* First & Last Name */}
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="text-sm font-semibold">First Name*</label>
                                <input
                                    type="text"
                                    placeholder="Enter the first name"
                                    className="w-full p-3 border rounded-md mt-1"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="text-sm font-semibold">Last Name*</label>
                                <input
                                    type="text"
                                    placeholder="Enter the last name"
                                    className="w-full p-3 border rounded-md mt-1"
                                />
                            </div>
                        </div>

                        {/* Contact Number */}
                        <div className="w-full">
                            <label className="text-sm font-semibold">Contact Number</label>
                            <div className="w-full">
                                <PhoneInput
                                    country={"in"}
                                    value={formData.contactNumber}
                                    onChange={handlePhoneChange}
                                    inputClass="!w-full !h-[48px] !pl-[58px] !p-3 !border !rounded-md !mt-1"
                                    containerClass="w-full !h-[48px]"
                                    buttonClass="!h-[48px] !border-r !rounded-l-md"
                                    dropdownClass="!bg-white !border !shadow-md"
                                    enableSearch
                                    placeholder="+91"
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="text-sm font-semibold">Company Name*</label>
                            <input
                                type="text"
                                placeholder="Enter the Company name"
                                className="w-full p-3 border rounded-md mt-1"
                            />
                        </div>

                        {/* Number of Employees */}
                        <div>
                            <label className="text-sm font-semibold">Number Of Employees*</label>
                            <select className="w-full p-3 border rounded-md mt-1">
                                <option>Select the number of employees</option>
                                {employeeOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Select Fields */}
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="text-sm font-semibold">Seniority*</label>
                                <select className="w-full p-3 border rounded-md mt-1">
                                    <option>Select the option</option>
                                </select>
                            </div>
                            <div className="w-1/2">
                                <label className="text-sm font-semibold">Functional Area*</label>
                                <select className="w-full p-3 border rounded-md mt-1">
                                    <option>Select the option</option>
                                </select>
                            </div>
                        </div>

                        {/* How did you hear about us */}
                        <div>
                            <label className="text-sm font-semibold">How did you know about us</label>
                            <select className="w-full p-3 border rounded-md mt-1">
                                <option>Select the options</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full mt-4 p-3 text-white font-semibold bg-[#027D74] rounded-md hover:bg-[#02665F] active:scale-95">
                            REQUEST FOR DEMO
                        </button>
                    </div>
                </div>

                {/* Right: Features List */}
                <div className="w-full lg:w-1/2 flex flex-col items-start mt-5 p-16 gap-5">
                    {features.map((feature, index) => (
                        <label key={index} className="flex items-center gap-2 mb-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.selectedFeatures.includes(feature)}
                                onChange={() => handleCheckboxChange(feature)}
                                className="w-5 h-5 accent-[#027D74] rounded-md"
                            />
                            <span className="text-lg text-gray-700">{feature}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
