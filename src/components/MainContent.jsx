import IntroContent from "./ui/IntroContent.jsx";
import LaunchingSoon from "./ui/LaunchingSoon.jsx";
import ServiceContent from "./ui/ServiceContent.jsx";


export default function MainContent() {
    return (
        <div className="main-content relative w-full mt-16">
            <IntroContent />
            <LaunchingSoon />
            <ServiceContent />
        </div>
    );
}

