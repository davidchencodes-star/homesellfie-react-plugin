import MapMarker from '../../assets/images/svg/map-marker.svg';
import Garden from '../../assets/images/svg/garden.svg';
import Parking from '../../assets/images/svg/parking.svg';
import Garage from '../../assets/images/svg/garage.svg';
import Base from '../../assets/images/svg/base.svg';
import Heating from '../../assets/images/svg/heating.svg';
import Kitchen from '../../assets/images/svg/kitchen.svg';
import WashingMachine from '../../assets/images/svg/washing machine.svg';
import FirePlace from '../../assets/images/svg/fireplace.svg';
import DishWasher from '../../assets/images/svg/dishwasher.svg';
import Balcony from '../../assets/images/svg/balcony.svg';
import { useEffect, useState } from "@wordpress/element";
import { useTotalContext } from "../../context/TotalContext";

//  ----- small icon
//  ----- start -----
import Befeuerung from '../../assets/images/samll-icons/befeuerung.svg';
import Heizungsart from '../../assets/images/samll-icons/heizungsart.svg';
import Etagenzahl from '../../assets/images/samll-icons/etagen_zahl.svg';
import Fahrstuhl from '../../assets/images/samll-icons/fahrstuhl.svg';
import Stellplätze from '../../assets/images/samll-icons/multiParkingLot.svg';
import Balkon from '../../assets/images/samll-icons/balkon.svg';
import Terrasse from '../../assets/images/samll-icons/terrasse.svg';
import Wintergarten from '../../assets/images/samll-icons/wintergarten.svg';
import Sauna from '../../assets/images/samll-icons/sauna.svg';
import Unterkellert from '../../assets/images/samll-icons/unterkellert.svg';
import Kamin from '../../assets/images/samll-icons/kamin.svg';
import Wallbox from '../../assets/images/samll-icons/electricCarCharging.svg';
import Fahrradraum from '../../assets/images/samll-icons/fahrradraum.svg';
import Rollstuhlgerecht from '../../assets/images/samll-icons/rollstuhlgerecht.svg';
import Swimmingpool from '../../assets/images/samll-icons/swimmingpool.svg';
import Trockenraum from '../../assets/images/samll-icons/wasch_trockenraum.svg';
//  ------ end ------ 

const FirstScreen = () => {
    const initSmartData = [
        {
            grundstuecksflaeche: "0",
            etagen: "0",
            zimmer: 0,
            beamHight: null,
            gartennutzung: "0",
            Befeuerung: "[]",
            Heizungsart: "[]",
            sep_wc: "0",
            badezimmer: "0",
            Barrierefrei: "0",
            befeuerung: [],
            heizungsart: [],
            etagen_zahl: "0.00",
            fahrstuhl: "0",
            multiParkingLot: {},
            balkon: "0",
            terrasse: "0",
            wintergarten: "0",
            sauna: "0",
            unterkellert: "",
            kamin: "0",
            electricCarCharging: "0",
            fahrradraum: "0",
            rollstuhlgerecht: "0",
            swimmingpool: "0",
            wasch_trockenraum: "0"
        }
    ]

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

    const { homedata, smartData } = useTotalContext();
    const parseData = JSON.parse(homedata);
    // const parseSmartData = JSON.parse(smartData);
    const verkaufspreis = Number(parseData.verkaufspreis);
    const baujahr = parseData.baujahr;
    const wohnflaeche = Number(parseData.wohnflaeche);
    const grundstuecksflaeche = isNaN(Number(parseSmartData[0].grundstuecksflaeche)) ? 0 : Number(parseSmartData[0].grundstuecksflaeche);
    // const multiParkingLot = JSON.parse(parseSmartData[0].multiParkingLot);
    const multiParkingLot = parseSmartData[0].multiParkingLot;
    const objektArt = parseData.objektArt;
    const objektTyp = parseData.objektTyp;
    const description = parseData.beschreibung.split('\r\n\r\n');
    const [index, setIndex] = useState(1);
    const [descriptionAmount, setDescriptionAmount] = useState(2);
    const [descriptionExpand, setDescriptionExpand] = useState(false);
    const clickMoreDescription = () => {
        if (descriptionExpand == false) {
            setDescriptionAmount(description.length);
            setDescriptionExpand(true);
        } else {
            setDescriptionAmount(2);
            setDescriptionExpand(false);
        }
    }
    // if (description.length <= 2) {
    //     document.getElementById("description-more").style.display = "none";
    // }

    const clickKaufpreis = () => {
        document.getElementById("kaufpreis").classList.add("tab-active");
        document.getElementById("details").classList.remove("tab-active");
        setIndex(1);
    }

    const clickDetails = () => {
        document.getElementById("kaufpreis").classList.remove("tab-active");
        document.getElementById("details").classList.add("tab-active");
        setIndex(2);
    }

    const garageNameData = {
        carport: "Carport",
        duplex: "Duplex",
        multiStoryGarage: "Freiplatz",
        garage: "Garage",
        parkingSpace: "Parkhausstellplatz",
        undergroundGarage: "Tiefgaragenstellplatz",
        otherParkingLot: "Sonstige"
    }

    let garageData = "";
    
    Object.keys(multiParkingLot).forEach((_key) => {
        if (multiParkingLot[_key].Count && multiParkingLot[_key].Count != "0") {
            if (garageData) garageData += ', ' + garageNameData[_key] + ' ' + multiParkingLot[_key].Count;
            else garageData += garageNameData[_key] + ' ' + multiParkingLot[_key].Count;
        }
    })

    const kaufpreis = [
        {key: "Verkaufspreis", value: `${Math.floor(verkaufspreis).toLocaleString().replaceAll(',', '.')} €`},
        {key: "Preis pro m²", value: `${Math.floor(verkaufspreis / wohnflaeche).toLocaleString().replaceAll(',', '.')} €`},
        // {key: "Stellplätze Garage", value: "2"},
        // {key: "Außenstellplätze", value: "2"},
        // {key: "Eigenmiete pro Jahr", value: "36.895 €"},
    ]

    const details = [
        {key: "Objekttyp", value: objektArt.charAt(0).toUpperCase() + objektArt.slice(1)},
        {key: "Haustyp", value: objektTyp},
        {key: "Baujahr", value: baujahr},
        {key: grundstuecksflaeche > 0 ? "Grundstücksgröße" : "", value: `${grundstuecksflaeche}m²`},
        {key: "Wohnfläche", value: `${wohnflaeche}m²`},
        {key: "Etagen", value: parseFloat(parseSmartData[0]["etagen"]) - parseInt(parseSmartData[0]["etagen"]) == 0 ? parseInt(parseSmartData[0]["etagen"]) : parseFloat(parseSmartData[0]["etagen"])},
        {key: "Zimmer", value: parseSmartData[0]["zimmer"]},
        {key: !parseSmartData[0]["beamHight"] || parseFloat(parseSmartData[0]["beamHight"]) == 0 ? "" : "Deckenhöhe", value: !parseSmartData[0]["beamHight"] || parseFloat(parseSmartData[0]["beamHight"]) == 0 ? "?m" : `${parseFloat(parseSmartData[0]["beamHight"])}m`},
        {key: garageData ? "Stellplätze" : "", value: garageData},
        {key: "Garten", value: parseSmartData[0]["gartennutzung"] == "0" ? "Nein" : "Ja"},
        {key: !parseSmartData[0]["unterkellert"] ? "" : "Keller", value: !parseSmartData[0]["unterkellert"] ? parseSmartData[0]["unterkellert"] : parseSmartData[0]["unterkellert"][0] + parseSmartData[0]["unterkellert"].slice(1).toLowerCase()},
        {key: JSON.parse(parseSmartData[0]["Befeuerung"]).length > 0 ? "Befeuerung" : "",  value: JSON.parse(parseSmartData[0]["Befeuerung"]).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(", ")},
        {key: JSON.parse(parseSmartData[0]["Heizungsart"]).length > 0 ? "Heizungsart" : "", value: JSON.parse(parseSmartData[0]["Heizungsart"]).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(", ")},
        // {key: "Vollbäder / WCs", value: "?"},
        {key: "Separate Wcs", value: parseInt(parseSmartData[0]["sep_wc"]) == 0 ? "Nein" : parseInt(parseSmartData[0]["sep_wc"])},
        // {key: "Bad mit Fenster", value: parseInt(parseSmartData[0]["badezimmer"]) == 0 ? "Nein" : parseInt(parseSmartData[0]["badezimmer"])},
        {key: "Anzahl Badezimmer", value: parseInt(parseSmartData[0]["badezimmer"]) == 0 ? "Nein" : parseInt(parseSmartData[0]["badezimmer"])},
        {key: "Barrierefrei", value: parseSmartData[0]["barrierefrei"] == "0" ? "Nein" : "Ja"},
    ]

    const etagen_zahl = isNaN(Number(parseSmartData[0]["etagen_zahl"])) 
        ? 0
        : parseFloat(parseSmartData[0]["etagen_zahl"]) - parseInt(parseSmartData[0]["etagen_zahl"]) == 0
            ? parseInt(parseSmartData[0]["etagen_zahl"])
            : parseFloat(parseSmartData[0]["etagen_zahl"])

    //  small icon data
    const iconData = [
        {key: "Befeuerung",         visible: parseSmartData[0]["befeuerung"].length ? true : false,             icon: Befeuerung,       text: parseSmartData[0]["befeuerung"].length ? parseSmartData[0]["befeuerung"].map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(", ") : ""},
        {key: "Heizungsart",        visible: parseSmartData[0]["heizungsart"].length ? true : false,            icon: Heizungsart,      text: parseSmartData[0]["heizungsart"].length ? parseSmartData[0]["heizungsart"].map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(", ") : ""},
        {key: "Etagenzahl",         visible: etagen_zahl > 0 ? true : false,                                    icon: Etagenzahl,       text: etagen_zahl > 0 ? "Etagenzahl " + etagen_zahl : ""},
        {key: "Fahrstuhl",          visible: parseSmartData[0]["fahrstuhl"] == "0" ? false : true,              icon: Fahrstuhl,        text: "Fahrstuhl"},
        {key: "Stellplätze",        visible: garageData ? true : false,                                         icon: Stellplätze,      text: garageData},
        {key: "Balkon",             visible: parseSmartData[0]["balkon"] == "0" ? false : true,                 icon: Balkon,           text: "Balkon"},
        {key: "Terrasse",           visible: parseSmartData[0]["terrasse"] == "0" ? false : true,               icon: Terrasse,         text: "Terrasse"},
        {key: "Wintergarten",       visible: parseSmartData[0]["wintergarten"] == "0" ? false : true,           icon: Wintergarten,     text: "Wintergarten"},
        {key: "Sauna",              visible: parseSmartData[0]["sauna"] == "0" ? false : true,                  icon: Sauna,            text: "Sauna"},
        {key: "Unterkellert",       visible: parseSmartData[0]["unterkellert"] == "JA" ? true : false,          icon: Unterkellert,     text: "Keller"},
        {key: "Kamin",              visible: parseSmartData[0]["kamin"] == "0" ? false : true,                  icon: Kamin,            text: "Kamin"},
        {key: "Wallbox",            visible: parseSmartData[0]["electricCarCharging"] == "0" ? false : true,    icon: Wallbox,          text: "E-Auto-Ladestation"},
        {key: "Fahrradraum",        visible: parseSmartData[0]["fahrradraum"] == "0" ? false : true,            icon: Fahrradraum,      text: "Fahrradraum"},
        {key: "Rollstuhlgerecht",   visible: parseSmartData[0]["rollstuhlgerecht"] == "0" ? false : true,       icon: Rollstuhlgerecht, text: "Rollstuhlgerecht"},
        {key: "Swimmingpool",       visible: parseSmartData[0]["swimmingpool"] == "0" ? false : true,           icon: Swimmingpool,     text: "Swimmingpool"},
        {key: "Trockenraum",        visible: parseSmartData[0]["wasch_trockenraum"] == "0" ? false : true,      icon: Trockenraum,      text: "Wasch/Trockenraum"},
    ];

    const [iconAmount, setIconAmount] = useState(8);
    const [iconExpand, setIconExpand] = useState(false);
    const clickMoreIcons = () => {
        if (iconExpand == false) {
            setIconExpand(true);
        } else {
            setIconExpand(false);
        }
    }

    return (
        <div className="d-flex flex-column gap-15 mt-15 mt-md-0">
            <div className="d-none d-md-flex d-lg-none flex-column gap-9">
                <p className="text-primary lh-sm fs-1 fw-bold">{parseData.titel || parseData.objektTyp[0].toUpperCase() + parseData.objektTyp.slice(1)}</p>
                <div className="d-flex gap-5 align-items-center">
                    <img src={MapMarker} />
                    <p className="text-light lh-lg fw-normal fs-3">{parseData.adresse.stadt} {parseData.adresse.plz}, {parseData.adresse.strasse} {parseData.adresse.nr}</p>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between gap-10 gap-md-13">
                <div className="d-flex flex-column gap-15 gap-xl-10">
                    <div className="d-flex d-md-none d-lg-flex flex-column gap-5 gap-lg-9">
                        <p className="text-primary lh-sm fs-2 fs-lg-1 fw-bold">{parseData.titel || parseData.objektTyp[0].toUpperCase() + parseData.objektTyp.slice(1)}</p>
                        <div className="d-flex gap-5 align-items-center">
                            <img src={MapMarker} />
                            <p className="text-light lh-lg fw-normal fs-5 fs-lg-4">{parseData.adresse.stadt} {parseData.adresse.plz} {parseData.adresse.strasse}, {parseData.adresse.nr}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-5">
                        <div className="d-flex gap-5 flex-wrap">
                            {iconExpand ? iconData.filter((data) => data.visible == true).map((data) => 
                                <div className="icon-card align-items-center justify-content-around">
                                    <img src={data.icon} style={{ padding: "6px 6px" }} width="34px" height="34px" className="image-height" />
                                    <p className="text-primary fw-normal fs-5">{data.text}</p>
                                </div>
                            ) : iconData.filter((data) => data.visible == true).slice(0, 6).map((data) => 
                                <div className="icon-card align-items-center justify-content-around">
                                    <img src={data.icon} style={{ padding: "6px 6px" }} width="34px" height="34px" className="image-height" />
                                    <p className="text-primary fw-normal fs-5">{data.text}</p>
                                </div>
                            )}
                        </div>
                        <p 
                            className="more-button border-bottom border-secondary lh-lg pb-1 cursor-pointer fs-5 fs-xl-3 hover-secondary w-fit-content" 
                            style={iconData.filter((data) => data.visible == true).length > 6 ? { display: "block" } : { display: "none" }}
                            onClick={clickMoreIcons}
                        >
                            {!iconExpand ? "Mehr" : "Weniger"}
                        </p>
                    </div>
                    <div className="d-flex flex-column gap-9">
                        {description.map((item, id) => {
                            if (id < descriptionAmount) {
                                return <p className="text-light fw-normal lh-lg fs-4 fs-xl-3">{item}</p>
                            }
                        })}
                        <p className="more-button border-bottom border-secondary lh-lg pb-1 cursor-pointer fs-5 fs-xl-3 hover-secondary w-fit-content" style={description.length > 2 ? { display: "block" } : { display: "none" }} onClick={clickMoreDescription}>
                            {!descriptionExpand ? "Mehr" : "Weniger"}
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column rounded border right-detail h-fit-content">
                    <div className="d-flex w-100 border-bottom">
                        <p id="kaufpreis" className="w-100 text-center text-primary py-8 fs-2 cursor-pointer border-end tab-active" style={{ borderTopLeftRadius: "10px" }} onClick={() => { clickKaufpreis(); }}>Kaufpreis</p>
                        <p id="details" className="w-100 text-center  text-primary py-8 fs-2 cursor-pointer" style={{ borderTopRightRadius: "10px" }} onClick={() => { clickDetails(); }}>
                            Details
                        </p>
                    </div>
                    {index == 1 ?
                        kaufpreis.map((item, id) => {
                            return id == kaufpreis.length - 1 ? 
                                <div className="d-flex gap-5 w-100 p-8">
                                    <p className="fs-5 w-100 text-light fw-normal">{item.key}</p>
                                    <p className="fs-5 w-100 text-primary fw-normal">{item.value}</p>
                                </div> :
                                <div className="d-flex gap-5 w-100 p-8 border-bottom">
                                    <p className="fs-5 w-100 text-light fw-normal">{item.key}</p>
                                    <p className="fs-5 w-100 text-primary fw-normal">{item.value}</p>
                                </div>
                        }) :
                        details.map((item, id) => {
                            if (item.key != "") {
                                return id == details.length - 1 ? 
                                    <div className="d-flex gap-5 w-100 p-8">
                                        <p className="fs-5 w-100 text-light fw-normal">{item.key}</p>
                                        <p className="fs-5 w-100 text-primary fw-normal">{item.value}</p>
                                    </div> :
                                    <div className="d-flex gap-5 w-100 p-8 border-bottom">
                                        <p className="fs-5 w-100 text-light fw-normal">{item.key}</p>
                                        <p className="fs-5 w-100 text-primary fw-normal">{item.value}</p>
                                    </div>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FirstScreen;
