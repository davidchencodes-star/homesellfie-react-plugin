import FourthScreen from "../Screen/FourthScreen";
import FifthScreen from "../Screen/FifthScreen";
import SecondSticky from "../Sticky/SecondSticky";

const ThirdSection = () => {
    return (
        <div class="m-5 m-md-9 m-lg-15 mx-xl-auto mb-xl-12 d-flex gap-10 home-section">
            <div className="d-flex flex-column w-100 gap-9 gap-md-12 gap-xl-0">
                <FourthScreen />
                <FifthScreen />
            </div>
            <SecondSticky />
        </div>
    );
};

export default ThirdSection;