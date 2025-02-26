import IntroContent from "./ui/IntroContent";
import ServiceContent from "./ui/ServiceContent";


export default function MainContent() {
    return (
        <div className="main-content mx-16 mt-16">
            <IntroContent />
            <ServiceContent />
        </div>
    );
}
