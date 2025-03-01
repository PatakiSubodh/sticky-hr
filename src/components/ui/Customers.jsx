import testimonialImg1 from "../../assets/images/testimonials-img/testimonialImg1.png";
import testimonialImg4 from "../../assets/images/testimonials-img/testimonialImg4.png";
import testimonialImg3 from "../../assets/images/testimonials-img/testimonialImg3.png";

export default function Customers() {
    return (
        <div className="pricing-component">
            <div className="h=screen">
                <div className="rounded-sm bg-[#DEEEEF] h-screen">

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
        </div>
    );
}