import FirstSection from "./Section/FirstSection";
import SecondSection from "./Section/SecondSection";
import ThirdSection from "./Section/ThirdSection";
import ContactModalOne from "./Modal/ContactModalOne";
import RegisterModalOne from "./Modal/RegisterModalOne";
import RegisterModalTwo from "./Modal/RegisterModalTwo";
import { useTotalContext } from "../context/TotalContext";

import { useEffect, useState } from "@wordpress/element";

const TOTAL = () => {
    const [homeData, setHomeData] = useState([]);

    useEffect(() => {
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        const id_extern = pathParts[pathParts.length - 1];
        fetch(`/wp-json/reactplug/v1/estate?id_extern=${id_extern}`)
            .then(res => res.json())
            .then(data => setHomeData(data))
            .catch(err => console.error(err));
    }, []);
    
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