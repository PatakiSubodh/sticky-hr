import testimonialImg1 from "../assets/images/testimonials-img/testimonialImg1.png";
import testimonialImg4 from "../assets/images/testimonials-img/testimonialImg4.png";
import testimonialImg3 from "../assets/images/testimonials-img/testimonialImg3.png";
import pricingCardImg from '../assets/images/pricing-img/pricing-img.png';

export default function Customers() {
    return (
        <>
        <div className="pricing-component">
            <div className="h=screen">
                <div className="pricing-card m-20 h-[500px] bg-[#3B9B9F] rounded-3xl overflow-hidden relative">
                <div className="pricing-card-polygons">
                    <div className="reactangles">
                        <div className="rect1 absolute rotate-45 -top-[22rem] right-[400px]">
                            <div className="outerCir bg-white w-[400px] h-[400px] flex justify-center items-center p-[15px] rounded-[25px]">
                                <div className="innerCir bg-[#3B9B9F] w-full h-full rounded-[15px]"></div>
                            </div>
                        </div>
                        <div className="rect2 absolute rotate-12 -top-[8rem] -right-72">
                            <div className="outerCir bg-white w-[400px] h-[400px] flex justify-center items-center p-[15px] rounded-[25px]">
                                <div className="innerCir bg-[#3B9B9F] w-full h-full rounded-[15px]"></div>
                            </div>
                        </div>
                    </div>

                    <img
                        src={pricingCardImg}
                        alt="pricing card image"
                        className="w-[600px] aspect-[1.457] absolute -bottom-1 right-[125px] z-10"
                    />

                    <div className="circles absolute -bottom-56 right-[140px] flex justify-center items-center">
                        <div className="cirOtr w-[33rem] h-[33rem] bg-white bg-opacity-50 rounded-full flex justify-center items-center">
                            <div className="cirInr w-[25rem] h-[25rem] bg-white rounded-full opacity-100"></div>
                        </div>
                    </div>
                </div>
                <div className="pricing-card-content space-y-5 flex flex-col justify-start w-[40rem] ml-10 mt-28">
                    {/* Pricing Badge */}
                    <span className="text-lg font-medium bg-[#DEEEEF] rounded-3xl px-6 py-2 text-[#2A4D50] w-fit">
                        Customers
                    </span>

                    {/* Heading */}
                    <h3 className="text-5xl font-extrabold text-[#1E1E1E] leading-tight">
                    Accurate & Automated Salary Processing
                    </h3>

                    {/* Subheading */}
                    <h4 className="text-xl font-medium text-[#D9D9D9]">
                    Payroll management handles salary calculations, tax deductions, and compliance. Our HRMS automates the process, reducing errors and saving time.
                    </h4>

                    {/* Buttons */}
                    <div className="pricing-btns flex gap-6 mt-5">
                        <button className="text-base font-semibold py-3 px-4 bg-[#FFC600] rounded-full text-black shadowtext-base hover:bg-[#e6b800]">
                            Book a Demo
                        </button>

                        <button className="text-base font-semibold py-3 px-4 bg-[#FFF8E0] border-2 border-[#F0C221] rounded-full text-[#F0C221] shadow-lg hover:bg-[#fce7a1] hover:text-black">
                            Get Started for Free
                        </button>
                    </div>
                </div>
            </div>

                </div>
                <h1 className="text-center font-semibold text-5xl text-gray-900 m-5">Customer Stories</h1>
                <p className="text-center m-5 font-normal text-xl">Simplify Payroll Processing with Compliance & Precision.</p>
                <div className="flex justify-center">
                    <img src={testimonialImg1} alt="Lady-1" className="size-100" />
                        <div className="flex flex-col justify-center">
                        <h1 className="text-center font-bold text-5xl -ml-20 mr-32">Aayushi Jani</h1>
                        <p className="font-normal text-gray-500 text-2xl text-justify -ml-20 mt-10 mr-32">I always wanted something that works Not only is StickyHR visually appealing and simple to use but the addition of AI actually solves most of my everyday task.
                        <br />Our organization has tried a bunch of platforms earlier. We often felt they were not user-friendly and time-consuming.
                        This is where StickyHR stood out.</p>
                    </div>
                </div>
                <div className="flex justify-center bg-[#DEEEEF] h-full">
                    <div className=" w-full flex flex-col justify-center ">
                        <h1 className="text-center font-bold text-5xl m-5 ml-32 ">Nivetha Thomas</h1>
                        <p className="font-normal text-gray-500 text-2xl text-center ml-32 m-5">Zero learning curve… <br />
                        Most interactive software <br /> Headache of managing candidates… solved <br />Timely, Responsive support</p>
                    </div>
                    <div className="w-full">
                    <img src={testimonialImg4} alt="Lady-2" className="" />
                    </div>
                </div>
                <div className="flex justify-center h-full">
                    <div className="w-full">
                        <img src={testimonialImg3} alt="Lady-1" className="size-100" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-center font-bold text-5xl  mr-32">Aayushi Jani</h1>
                        <p className="font-normal text-gray-500 text-2xl text-justify mt-10 mr-32">
                        I always wanted something that works. Not only is StickyHR visually appealing and simple to use, but the addition of AI actually solves most of my everyday tasks.
                        <br />
                        Our organization has tried a bunch of platforms earlier. We often felt they were not user-friendly and time-consuming.
                        This is where StickyHR stood out.
                        </p>
                    </div>
                </div>

            </div>
        
        </>
    );
}