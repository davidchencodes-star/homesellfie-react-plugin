import ImageSlider from "../Screen/ImageSlider";
import ZeroScreen from "../Screen/ZeroScreen";
import FirstScreen from "../Screen/FirstScreen";
import SecondScreen from "../Screen/SecondScreen";
import ThirdScreen from "../Screen/ThirdScreen";
import FirstSticky from "../Sticky/FirstSticky";

const FirstSection = () => {
    return (
        <div className="m-5 m-md-9 m-lg-15 mb-xl-12 mx-xl-auto d-flex gap-10 first-section home-section">
            <div className="mt-0 mt-md-15 d-flex flex-column gap-9 gap-md-12 image-slider">
                <ImageSlider />
                <ZeroScreen />
                <FirstScreen />
                <SecondScreen />
                <ThirdScreen />
            </div>
            <FirstSticky />
        </div>
    );
};

export default FirstSection;