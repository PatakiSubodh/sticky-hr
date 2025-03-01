import LaunchingImg from '../../assets/images/launching-img/launchingImg.png';
import LaunchingImgMobile from '../../assets/images/launching-img/launchingImgMobile.png';
import LaunchingSoonImg from '../../assets/images/launching-img/launchingSoonImg.png';
import LaunchingSoonMonitor from '../../assets/images/launching-img/LaunchingSoonMonitor.png';
import LaunchingSoonMonitorStand from '../../assets/images/launching-img/LaunchingSoonMonitorStand.png';

export default function LaunchingSoon() {
    return (
        <div className="launching-content w-full bg-[#DEEEEF] flex flex-col items-center px-6 py-10 text-center mt-10">

        <div className="w-full flex justify-start pl-6 mb-4 relative">
            {/* Monitor */}
            <img src={LaunchingSoonMonitor} alt="Launching Soon" className="w-44 md:w-44 relative z-10" />

            {/* Launching Soon Text (Centered on the Monitor) */}
            <div className="absolute top-7 left-14 z-10 text-center animate-bounce">
                <span className="block text-xl italic">LAUNCHING</span>
                <span className="block text-2xl font-bold">SOON</span>
            </div>

            {/* Stand (Positioned below the monitor) */}
            <img src={LaunchingSoonMonitorStand} alt="Launching Soon" className="w-16 absolute top-28 left-20" />
        </div>



            {/* Title & Description */}
            <h1 className="text-2xl md:text-4xl font-bold text-[#035B5F]">
                Smart Virtual HR - HR On Subscription
            </h1>
            <h3 className="text-lg md:text-xl text-gray-700 mt-2">
                Introducing a new service - VIRTUAL HR - because every startup needs HR, not HR problems!
            </h3>
            {/* Main Image Section */}
            <div className="relative w-full flex justify-center mt-6">
                {/* Main Image (HR Video Call) */}
                <img
                    src={LaunchingImg}
                    alt="HR Video Call"
                    className="w-[90%] md:w-[70%]"
                />

                {/* Mobile Chat Screen (Overlapping Right Side) */}
                <img
                    src={LaunchingImgMobile}
                    alt="Chat on Mobile"
                    className="absolute bottom-5 right-12 w-[150px] md:w-[180px] lg:w-[240px]"
                />
            </div>

            {/* Join Now Button */}
            <button className="bg-[#FFC107] text-black font-semibold py-3 px-[75px] rounded-sm shadow-md hover:bg-[#e0a800] transition border-2 border-black relative bottom-[71px] left-[153px]">
                Join Now
            </button>
        </div>
    );
}
