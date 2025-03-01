import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonialImg1 from "../../assets/images/testimonials-img/testimonialImg1.png";
import testimonialImg2 from "../../assets/images/testimonials-img/testimonialImg2.png";

const testimonials = [
    {
        name: "Aayushi Jani",
        feedback:
        "I always wanted something that works Not only is StickyHR visually appealing and simple to use but the addition of AI actually solves most of my everyday task. Our organization has tried a bunch of platforms earlier. We often felt they were not user-friendly and time-consuming. This is where StickyHR stood out.",
        image: testimonialImg1,
    },
    {
        name: "Nivetha Thomas",
        feedback:
        "Zero learning curve… Most interactive software. Headache of managing candidates… solved Timely, Responsive support",
        image: testimonialImg2,
    },
];

export default function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show only ONE card at a time
        slidesToScroll: 1,
        arrows: false,
    };

    let sliderRef = null;

    return (
        <div className="w-full h-screen bg-[#DEEEEF] flex flex-col items-center px-6 text-center">
            {/* Parent Container */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between h-full">
                {/* Left Section */}
                <div className="text-left w-full md:w-1/3 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#035B5F]">
                        TESTIMONIALS
                    </h1>
                    <h2 className="text-3xl font-semibold mt-2">Our Clients</h2>
                    <p className="italic text-gray-600 mt-4 text-lg">
                        "Sip the purity of nature in every cup, Discover wellness, one brew
                        at a time."
                    </p>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4 mt-6">
                        <button
                            className="bg-yellow-400 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
                            onClick={() => sliderRef?.slickPrev()}
                        >
                            <FaChevronLeft className="text-white text-2xl" />
                        </button>
                        <button
                            className="bg-yellow-400 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
                            onClick={() => sliderRef?.slickNext()}
                        >
                            <FaChevronRight className="text-white text-2xl" />
                        </button>
                    </div>
                </div>

                {/* Right Section (Slider) */}
                <div className="w-full md:w-2/3 relative flex justify-center items-center h-full">
                    {/* Vertical Divider */}
                    <div className="bg-[#3B9B9F] w-5 h-full absolute left-1/4 -translate-x-1/2"></div>
                    <div className="bg-[#FFC600] w-1 h-48 absolute left-10 bottom-40 rotate-90"></div>

                    {/* Slider Content */}
                    <div className="w-full max-w-3xl z-10 ml-44 mb-20">
                        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center rounded-xl overflow-hidden">
                                    {/* Image Positioned Above the Card */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="object-cover w-96 h-96 -mb-20 ml-52"
                                    />
                                    {/* Bigger Card */}
                                    <Card className="bg-white p-12 w-[800px] h-80 flex flex-col items-center rounded-xl">
                                        <CardContent className="flex flex-col justify-center items-center rounded-xl pt-10">
                                            <h3 className="text-2xl font-semibold">{item.name}</h3>
                                            <p className="italic text-gray-600 mt-4 text-lg text-center">
                                                {item.feedback}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}