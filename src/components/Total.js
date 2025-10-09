import FirstSection from "./Section/FirstSection";
import SecondSection from "./Section/SecondSection";
import ThirdSection from "./Section/ThirdSection";
import ContactModalOne from "./Modal/ContactModalOne";
import RegisterModalOne from "./Modal/RegisterModalOne";
import RegisterModalTwo from "./Modal/RegisterModalTwo";
import { useTotalContext } from "../context/TotalContext";

const TOTAL = () => {
    const { loading } = useTotalContext();
    
    return (
        <>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <ContactModalOne />
            <RegisterModalOne />
            <RegisterModalTwo />
        </>
    );
};

export default TOTAL;