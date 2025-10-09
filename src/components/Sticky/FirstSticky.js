import Phone from "../../assets/images/svg/phone.svg";
import PhoneWhite from "../../assets/images/svg/phone-white.svg";
import Calendar from "../../assets/images/svg/calendar.svg";
import User2 from "../../assets/images/png/user-2-update.png";
import User1 from "../../assets/images/png/user-1-update.png";
import Info from "../../assets/images/svg/info.svg";
import Gallery from "../../assets/images/svg/gallery.svg";
import FloorPlan from "../../assets/images/svg/floorplan.svg";
import MapMarker from "../../assets/images/svg/map-marker.svg";
import Tour from "../../assets/images/svg/3dtour.svg";
import RoundCross from "../../assets/images/svg/round-cross.svg";
import Cover from "../../assets/images/svg/cover.svg";
import { useTotalContext } from "../../context/TotalContext";
import CloseBtn from "../../assets/x_black.svg";
import { useAuthContext } from "../../context/AuthContext";

const FirstSticky = () => {
    const { homedata, offerLength } = useTotalContext();
    const { loggedIn } = useAuthContext();
    const parseData = JSON.parse(homedata);

    const onClickAngebotMachen = () => {
        if (loggedIn) window.renderAngebotsformular(true);
        else {
            document.getElementById("desktop-angebot-info").classList.remove("d-none");
        }
    }

    const closeAngebotInfo = () => {
        document.getElementById("desktop-angebot-info").classList.add("d-none");
    }

    const ContactMouseOver = () => {
        document.getElementById("sticky-phone").src = PhoneWhite;
    }

    const ContactMouseLeave = () => {
        document.getElementById("sticky-phone").src = Phone;
    }

    const gotoTour3D = () => {
        document.getElementById("tour3d").scrollIntoView({ behavior: "smooth" });
    }

    const gotoGallery = () => {
        document.getElementById("tour3d").scrollIntoView({ behavior: "smooth" });
    }

    const gotoFloor = () => {
        document.getElementById("tour3d").scrollIntoView({ behavior: "smooth" });
    }

    const gotoMap = () => {
        document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    }

    const removeStickyPhoneCover = () => {
        document.getElementById("sticky-phone-cover-img").style.display = "none";
        document.getElementById("sticky-phone-cover-text").style.display = "none";
    }

    const infoClick = (e) => {
        e.target.parentElement.firstChild.classList.remove("d-none");
    }

    const closeInfoClick = (e) => {
        e.target.parentElement.classList.add("d-none");
    }

    const phoneNumberClick = (e) => {
        gtag(
            "event", "phone-number", {
                phone_number: "016 078 55511"
            }
        )
    }

    return (
        <div className="d-xl-block d-none" style={{ minWidth: "400px", maxWidth: "400px" }}>
            <div className="shadow rounded p-9 pt-5 sticky-top d-flex gap-9 flex-column" style={{ top: "100px" }}>
                <div className="d-flex gap-8 flex-column">
                    <p className="text-primary lh-sm fs-1 fw-bold">{parseData.titel || parseData.objektTyp[0].toUpperCase() + parseData.objektTyp.slice(1)}</p>
                    <p className="text-light lh-lg fw-normal fs-3">{parseData.adresse.stadt} {parseData.adresse.plz}, {parseData.adresse.strasse} {parseData.adresse.nr}</p>
                </div>
                <div className="d-flex flex-column gap-8">
                    <div className="d-flex flex-column gap-5">
                        <div className="d-flex gap-5 flex-column">
                            <div id="price" className="d-flex gap-8 align-items-center">
                                <p className="lh-sm text-primary fs-1">{Math.floor(Number(parseData.verkaufspreis)).toLocaleString().replaceAll(',', '.')} €</p>
                                <div className="d-flex gap-2 text-secondary align-items-center">
                                    <img src={RoundCross} width="15px" height="15px" />
                                    <p className="fw-normal fs-5">keine Käuferprovision</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex text-light">
                            <div className="fs-5 pe-3">{parseData.wohnflaeche}m²</div>
                            <div className="fs-5 px-3 border-start border-end">{Math.floor(Number(parseData.zimmer))} Zimmer</div>
                            <div className="fs-5 ps-3">{parseData.baujahr}</div>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div className="cursor-pointer d-flex gap-4 bg-danger rounded align-items-center pe-5" style={{ width: "fit-content" }} onClick={gotoTour3D}>
                            <div className="d-flex rounded justify-content-center align-items-center" style={{ backgroundColor: "#FFDBE9", width: "34px", height: "34px" }}>
                                <img src={Tour} />
                            </div>
                            <p className="text-primary pt-1 fs-5">Tour 3D</p>
                        </div>
                        <div className="cursor-pointer bg-danger d-flex rounded justify-content-center align-items-center p-3" style={{ width: "34px", height: "34px" }} onClick={gotoGallery}>
                            <img src={Gallery} />
                        </div>
                        <div className="cursor-pointer bg-danger d-flex rounded justify-content-center align-items-center p-3" style={{ width: "34px", height: "34px" }} onClick={gotoFloor}>
                            <img src={FloorPlan} />
                        </div>
                        <div className="cursor-pointer bg-danger d-flex rounded justify-content-center align-items-center p-3" style={{ width: "34px", height: "34px" }} onClick={gotoMap}>
                            <img src={MapMarker} />
                        </div>
                    </div>
                </div>
                <div className="d-flex p-8 rounded" style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="d-flex gap-8" style={{ width: 300 }}>
                        <div className="d-flex w-100 align-items-center gap-4">
                            <div className="rounded border p-3" style={{ width: 32, height: 32, backgroundColor: "#FDFDFD" }}>
                                <p className="fs-4 lh-base fw-normal text-secondary text-center">{offerLength}</p>
                            </div>
                            <p className="fs-4 lh-base fw-normal text-primary">Anzahl Gebote</p>
                        </div>
                        <div className="d-flex w-100 align-items-center position-relative">
                            <div class="d-flex p-15 rounded border bg-white desktop-angebot-info d-none" id="desktop-angebot-info">
                                <img className="desktop-angebot-info-close cursor-pointer" src={CloseBtn} width={15} height={15} onClick={closeAngebotInfo} />
                                <p class="fs-4 lh-lg fw-normal text-light">
                                    Nach der Besichtigung können Sie Ihr Gebot abgeben und andere Gebote einsehen. Registrieren Sie sich, um diesen Service zu nutzen.
                                </p>
                            </div>
                            <p className="fs-4 lh-base fw-normal text-secondary text-decoration-underline ps-5 cursor-pointer border-start" onClick={onClickAngebotMachen}>Angebot Machen</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column p-8 gap-6 rounded" style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="d-flex gap-2">
                        <p className="text-primary fw-normal fs-5">Wir helfen Ihnen bei ihrer Finanzierung</p>
                        <div className="d-flex align-items-start position-relative">
                            <div className="sitcky-info-tooltip d-none">
                                <img className="sticky-info-tooltip-close cursor-pointer" src={CloseBtn} width={15} height={15} onClick={(e) => closeInfoClick(e)} />
                                <p className="lh-base fs-5 fw-normal text-light">
                                    Lassen Sie sich von einem Experten für Immobilienfinanzierung beraten und finden Sie das beste Angebot, das auf Ihre Situation zugeschnitten ist. Der Service ist kostenlos, die Kontaktaufnahme unverbindlich.
                                </p>
                            </div>
                            <img className="cursor-pointer" src={Info} onClick={(e) => infoClick(e)} />
                        </div>
                    </div>
                    <div className="d-flex">
                        <p className="cursor-pointer text-primary fw-normal text-decoration-underline border-end pe-5 fs-5 hover-secondary" onClick={() => window.renderKontaktformular(true)}>
                            Finanzierung berechnen
                        </p>
                        <p className="cursor-pointer fw-normal text-decoration-underline ps-5 fs-5 text-primary hover-secondary" onClick={() => window.renderKontaktformular(true)}>
                            Finanzierung anfragen
                        </p>
                    </div>
                </div>
                <div className="d-flex p-8 justify-content-between rounded" style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="d-flex flex-column justify-content-between">
                        <p className="text-primary fw-normal fs-5">Wenden Sie sich an unser Team</p>
                        <div className="w-fit-content position-relative">
                            <p className="text-primary lh-lg fw-normal fs-3 cursor-pointer" id="phone-number" onClick={phoneNumberClick}>Tel: 016 078 55511</p>
                            <img id="sticky-phone-cover-img" src={Cover} style={{ position: 'absolute', right: '0px', top: '0px' }} />
                            <p id="sticky-phone-cover-text" onClick={removeStickyPhoneCover} className="text-light fs-6 hover-secondary cursor-pointer text-center" style={{ position: 'absolute', width: '116px', right: '0px', top: '1px' }}>Zeigen</p>
                        </div>
                    </div>
                    <div className="position-relative" style={{ width: "90px", height: "50px" }}>
                        <img src={User2} width="50px" height="50px" className="position-absolute" style={{ right: "0px" }} />
                        <img src={User1} width="50px" height="50px" className="position-absolute" style={{ right: "40px" }} />
                    </div>
                </div>
                <div className="d-flex gap-5">
                    <div className="gap-4 px-7 py-8 d-flex justify-content-center w-100 cursor-pointer btn-main" onClick={() => { window.renderKontaktformular(true) }} onMouseOver={ContactMouseOver} onMouseLeave={ContactMouseLeave}>
                        <img id="sticky-phone" src={Phone} />
                        <p className="fw-normal fs-4">Kontaktiere uns</p>
                    </div>
                    <div className="rounded-1 gap-4 px-7 py-8 d-flex justify-content-center w-100 bg-secondary cursor-pointer" onClick={() => { window.renderTerminbuchung(true) }}>
                        <img src={Calendar} />
                        <p className="text-white fw-normal fs-4">Termin buchen</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSticky;
