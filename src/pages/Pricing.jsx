import pricingCardImg from '../assets/images/pricing-img/pricing-img.png'
import PricingForm from '../components/ui/PricingForm.jsx';

export default function Pricing() {
    return (
        <div className="pricing-component">
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
                        Pricing
                    </span>

                    {/* Heading */}
                    <h3 className="text-5xl font-extrabold text-[#1E1E1E] leading-tight">
                        Flexible Pricing for Every Business...
                    </h3>

                    {/* Subheading */}
                    <h4 className="text-xl font-medium text-[#D9D9D9]">
                        Get the Features You Need, Without the Extra Costs...
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

            <PricingForm />


        </div>
    );
}