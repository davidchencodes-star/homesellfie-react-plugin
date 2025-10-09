import MapMarker from '../../assets/images/svg/map-marker.svg';
import Map from '../../assets/images/map.png';
import { useTotalContext } from '../../context/TotalContext';
import { useEffect, useState } from "@wordpress/element";

const ThirdScreen = () => {
    const initSmartData = [
        {
            Kindergarten: "0.00",
            Grundschule: "0.00",
            Realschule: "0.00",
            Gymnasium: "0.00",
            Autobahn: "0.00",
            Zentrum: "0.00",
            SBB: "0.00",
            Kantonschule: "0.00",
            Einkaufsmöglichkeiten: "0.00",
            Flughafen: "0.00",
            Fernbahnhof: "0.00",
            "U-Bahn": "0.00",
            Bus: "0.00",
            Hauptschule: "0.00",
            Gaststätten: "0.00",
            lage: "",
            objektbeschreibung: ""
        }
    ]

    const { homedata, smartData } = useTotalContext();
    const parseData = JSON.parse(homedata);
    // const parseSmartData = JSON.parse(smartData);
    const address = `${parseData.adresse.stadt} ${parseData.adresse.plz}, ${parseData.adresse.strasse} ${parseData.adresse.nr}`;
   
    const [parseSmartData, setParseSmartData] = useState(
		localStorage.getItem("smartData") != null && localStorage.getItem("smartData") != "false" ? JSON.parse(localStorage.getItem("smartData")) : initSmartData
	);

	const storageListener = () => {
		localStorage.getItem("smartData") != null && localStorage.getItem("smartData") != "false" ? setParseSmartData(JSON.parse(localStorage.getItem("smartData"))) : setParseSmartData(initSmartData);
	};

	useEffect(() => {
		window.addEventListener("storage", storageListener);
		return () => window.removeEventListener("storage", storageListener);
	}, []);

    const distanceDatas = localStorage.getItem("smartData") != null && localStorage.getItem("smartData") != "false"  ? [
        {key: "Kindergarten",           value: parseSmartData[0]["Kindergarten"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Kindergarten"]) * 1000},
        {key: "Grundschule",            value: parseSmartData[0]["Grundschule"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Grundschule"]) * 1000},
        {key: "Realschule",             value: parseSmartData[0]["Realschule"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Realschule"]) * 1000},
        {key: "Gymnasium",              value: parseSmartData[0]["Gymnasium"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Gymnasium"]) * 1000},
        {key: "Autobahn",               value: parseSmartData[0]["Autobahn"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Autobahn"]) * 1000},
        {key: "Zentrum",                value: parseSmartData[0]["Zentrum"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Zentrum"]) * 1000},
        {key: "SBB",                    value: parseSmartData[0]["SBB"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["SBB"]) * 1000},
        {key: "Kantonschule",           value: parseSmartData[0]["Kantonschule"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Kantonschule"]) * 1000},
        {key: "Einkaufsmöglichkeiten",  value: parseSmartData[0]["Einkaufsmöglichkeiten"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Einkaufsmöglichkeiten"]) * 1000},
        {key: "Flughafen",              value: parseSmartData[0]["Flughafen"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Flughafen"]) * 1000},
        {key: "Fernbahnhof",            value: parseSmartData[0]["Fernbahnhof"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Fernbahnhof"]) * 1000},
        {key: "U-Bahn",                 value: parseSmartData[0]["U-Bahn"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["U-Bahn"]) * 1000},
        {key: "Bus",                    value: parseSmartData[0]["Bus"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Bus"]) * 1000},
        {key: "Hauptschule",            value: parseSmartData[0]["Hauptschule"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Hauptschule"]) * 1000},
        {key: "Gaststätten",            value: parseSmartData[0]["Gaststätten"] == "0.00" ? 0 : parseFloat(parseSmartData[0]["Gaststätten"]) * 1000},
    ] : [];

    const lage = localStorage.getItem("smartData") != null && localStorage.getItem("smartData") != "false" ? parseSmartData[0]["lage"].split("\r\n\r\n") : [""];

    const [descriptionAmount, setDescriptionAmount] = useState(2);
    const [descriptionExpand, setDescriptionExpand] = useState(false);
    const clickMoreDescription = () => {
        if (descriptionExpand == false) {
            setDescriptionAmount(lage.length);
            setDescriptionExpand(true);
        } else {
            setDescriptionAmount(2);
            setDescriptionExpand(false);
        }
    }

    return (
        <div className="d-flex flex-column gap-15 gap-lg-10 position-relative">
            <div id="map" style={{ position: "absolute", top: "-85px"}}></div>
            <div className="d-flex flex-column gap-5 gap-md-9">
                <p className="text-primary lh-lg lh-md-sm fs-2 fs-md-1 fw-bold">Lage und Umgebung</p>
                <div className="d-flex gap-5 align-items-center">
                    <img src={MapMarker} />
                    <p className="text-light lh-base lh-md-lg fs-5 fs-md-4 fs-xl-3">{address}</p>
                </div>
            </div>
            <iframe 
                id="google_map" 
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBDkL3Qn9qEE4h4oCl-eY1mOLQhBR86mq4&q=${encodeURI(address)}`}
                className="rounded-0 rounded-md-2 border object-fit-cover iframe-map border-left-right-none" 
            />
            <div className="d-flex flex-column gap-9">
                <p className="text-primary lh-sm fs-1 fw-bold">Beschreibung der Lage</p>
                {lage.map((item, id) => {
                    if (id < descriptionAmount) return <p className="text-light lh-lg fw-normal fs-4 fs-xl-3">{item}</p>
                })}
                <p 
                    className="more-button border-bottom border-secondary lh-lg pb-1 fs-3 cursor-pointer hover-secondary" 
                    style={{ width: "fit-content", display: `${lage.length > 2 ? 'block' : 'none'}` }}
                    onClick={clickMoreDescription}>
                    {!descriptionExpand ? "Mehr" : "Weniger"}
                </p>
            </div>
            <ui className="list-group rounded">
                {
                    distanceDatas.map((data) => {
                        if (data.value != 0) {
                            return <li className="list-group-item d-flex">
                                <p className="w-50 break-word my-auto fs-6 fs-sm-5 fs-md-4 fs-xl-3 fw-normal lh-base lh-md-lg text-light">{data.key}</p>
                                <p className="w-50 break-word my-auto fs-6 fs-sm-5 fs-md-4 fs-xl-3 fw-normal lh-base lh-md-lg text-primary">{data.value} m</p>
                            </li>
                        }
                    })
                }
            </ui>
        </div>
    );
};

export default ThirdScreen;
