import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import img1 from '../../assets/images/form-img/img1.png';
import img2 from '../../assets/images/form-img/img2.png';
import cir1 from '../../assets/images/form-img/cir1.png';
import cir2 from '../../assets/images/form-img/cir2.png';


export default function IntroContent() {
    return (
        <div className="intro-content grid grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div className="intro-left">
                <h4 className="text-2xl font-semibold text-[#FFC600] leading-tight">
                    Recruit - Onboard - Manage
                </h4>
                <h2 className="text-5xl font-bold text-gray-900 mt-3 leading-snug">
                    Revolutionize Your HR Management With Virtual-Based Solutions
                </h2>
                <p className="text-2xl font-normal text-[#666666] mt-5 leading-10">
                    The best HR software for StickyHR companies and startup to manage employee, payroll assistance, time off, attendance tracking with single software
                </p>
                <div className="intro-btns mt-5 flex gap-4">
                    <Button className="bg-[#086165] text-white rounded-3xl hover:bg-[#064d4b] transition flex items-center justify-center text-base px-7 py-5">
                        Get Started
                    </Button>
                    <Button className="border-2 border-[#086165] text-[#086165] bg-white rounded-3xl hover:bg-[#086165] hover:text-white flex items-center justify-center gap-2 text-base px-7 py-5">
                        <FontAwesomeIcon icon={faCirclePlay} />
                        How it works
                    </Button>
                </div>
            </div>

            {/* Right Section (Centered Form) */}
            <div className="intro-right relative flex justify-center items-center">
                {/* Decorative Images */}
                <img src={img1} alt="Icon 1" className="absolute top-0 right-10 w-20 h-w-20 rotate-12" />
                <img src={img2} alt="Icon 2" className="absolute top-32 left-14 w-16 h-16 -rotate-6" />
                <img src={cir1} alt="Circle 1" className="absolute top-0 left-[3rem] w-6 h-6" />
                <img src={cir2} alt="Circle 2" className="absolute top-[2.5rem] left-[6.5rem] w-3 h-3" />
                {/* Form Wrapper - Centered */}
                <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-sm">
                    {/* Heading */}
                    <h2 className="text-xl font-bold mb-1">
                        30-day <span className="font-extrabold">free trial.</span>
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                        No credit card required. Cancel anytime.
                    </p>
                    {/* Form */}
                    <form className="space-y-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <input
                            type="email"
                            placeholder="Email ID"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#086165] text-white font-bold p-3 rounded-md hover:bg-[#064d4b] transition"
                        >
                            FREE SIGN UP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}