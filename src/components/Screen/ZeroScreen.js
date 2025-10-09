import RoundCross from "../../assets/images/svg/round-cross.svg";
import ThreeDTour from "../../assets/images/svg/3dtour.svg";
import Gallery from "../../assets/images/svg/gallery.svg";
import FloorPlan from "../../assets/images/svg/floorplan.svg";
import MapMarker from "../../assets/images/svg/map-marker.svg";
import Info from "../../assets/images/svg/info.svg";
import User2 from "../../assets/images/png/user-2-update.png";
import User1 from "../../assets/images/png/user-1-update.png";
import PhoneWhite from "../../assets/images/svg/phone-white.svg";
import Phone from  "../../assets/images/svg/phone.svg";
import Cover from "../../assets/images/svg/cover.svg";
import { useTotalContext } from "../../context/TotalContext";
import { useAuthContext } from "../../context/AuthContext";
import CloseBtn from "../../assets/x_black.svg";
import Calendar from "../../assets/images/svg/calendar.svg";

const ZeroScreen = () => {
    const { homedata, offerLength } = useTotalContext();
    const { loggedIn } = useAuthContext();
    const parseData = JSON.parse(homedata);

    const onClickAngebotMachen = (isTablet) => {
        if (loggedIn) window.renderAngebotsformular(true);
        else {
            if (isTablet) {
                document.getElementById("tablet-angebot-info").classList.remove("d-none");
            } else {
                window.renderAngebotMobileModal(true);
            }
        }
    }

    const closeTabletAngebotInfo = () => {
        document.getElementById("tablet-angebot-info").classList.add("d-none");
    }

    const tabletPhoneOver = () => {
        document.getElementById("tablet-phone").src = PhoneWhite;
    }

    const tabletPhoneLeave = () => {
        document.getElementById("tablet-phone").src = Phone;
    }

    const gotoTour3D = () => {
        document.getElementById("tour3d").scrollIntoView({ behavior: "smooth" });
    }

    const gotoGallery = () => {
        if (window.innerWidth >= 768) {
            document.getElementById("tour3d").scrollIntoView({ behavior: "smooth" });
        } else {
            document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
        }
    }

    const gotoFloor = () => {
        if (window.innerWidth >= 768) {
            document.getElementById("tour3d").scrollIntoView({ behavior: "smooth" });
        } else {
            document.getElementById("floor").scrollIntoView({ behavior: "smooth" });
        }
    }

    const gotoMap = () => {
        document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    }

    const removeTopPhoneCover = () => {
        document.getElementById("top-md-phone-cover-img").style.display = "none";
        document.getElementById("top-md-phone-cover-text").style.display = "none";
        document.getElementById("top-sm-phone-cover-img").style.display = "none";
        document.getElementById("top-sm-phone-cover-text").style.display = "none";
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
        <div className="d-flex d-xl-none p-9 gap-9 flex-column rounded shadow">
            <div className="d-flex flex-column flex-md-row gap-9">
                <div className="d-flex gap-5 gap-md-8 flex-column w-100">
                    <p className="fs-2 fs-md-1 text-primary lh-lg lh-md-sm fw-bold">{parseData.titel || parseData.objektTyp[0].toUpperCase() + parseData.objektTyp.slice(1)}</p>
                    <p className="fs-5 fs-md-4 text-light lh-base lh-md-lg">{parseData.adresse.stadt} {parseData.adresse.plz}, {parseData.adresse.strasse} {parseData.adresse.nr}</p>
                </div>
                <div className="d-flex flex-column gap-8 w-100">
                    <div className="d-flex flex-column gap-5">
                        <div className="d-flex flex-column flex-sm-row gap-5 gap-sm-8 align-items-sm-center">
                            <p className="fs-2 fs-md-1 lh-base lh-md-sm fw-bold text-primary">{Math.floor(Number(parseData.verkaufspreis)).toLocaleString().replaceAll(',', '.')} €</p>
                            <div className="d-flex gap-2 text-secondary align-items-center">
                                <img src={RoundCross} width="15px" height="15px" />
                                <p className="fs-5">keine Käuferprovision</p>
                            </div>
                        </div>
                        <div className="d-flex text-light">
                            <div className="fs-5 pe-3">{parseData.wohnflaeche}m²</div>
                            <div className="fs-5 px-3 border-start border-end">{Math.floor(Number(parseData.zimmer))} Zimmer</div>
                            <div className="fs-5 ps-3">{parseData.baujahr}</div>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div className="cursor-pointer d-flex gap-4 bg-danger rounded align-items-center pe-5 w-fit-content" onClick={gotoTour3D}>
                            <div className="d-flex rounded justify-content-center align-items-center" style={{ backgroundColor: "#FFDBE9" }}>
                                <img src={ThreeDTour} />
                            </div>
                            <p className="fs-5 text-primary pt-1">Tour 3D</p>
                        </div>
                        <div className="cursor-pointer bg-danger d-flex rounded justify-content-center align-items-center" style={{ width: "34px", height: "34px" }} onClick={gotoGallery}>
                            <img src={Gallery} />
                        </div>
                        <div className="cursor-pointer bg-danger d-flex rounded justify-content-center align-items-center" style={{ width: "34px", height: "34px" }} onClick={gotoFloor}>
                            <img src={FloorPlan} />
                        </div>
                        <div className="cursor-pointer bg-danger d-flex rounded justify-content-center align-items-center" style={{ width: "34px", height: "34px" }} onClick={gotoMap}>
                            <img src={MapMarker} />
                        </div>
                    </div>
                    <div className="d-flex d-md-none ps-8 rounded position-relative" style={{ backgroundColor: "#F5F5F5", height: "106px" }}>
                        <p className="position-absolute fs-4 lh-lg fw-normal text-primary" style={{ top: "15px", width: "208px" }}>Gerne begleiten wir Sie bei Ihrem Verkauf!</p>
                        <p className="position-absolute fs-5 fw-normal text-primary" style={{ top: "65px" }} onClick={phoneNumberClick}>Tel: 016 078 55511</p>
                        <img id="top-sm-phone-cover-img" src={Cover} style={{ position: 'absolute', left: '65px', top: '65px' }} />
                        <p id="top-sm-phone-cover-text" onClick={removeTopPhoneCover} className="text-phone fs-6 hover-secondary cursor-pointer text-center" style={{ position: 'absolute', width: '116px', left: '65px', top: '66px' }}>Zeigen</p>
                        <img src={User2} className="position-absolute" width="50px" height="50px" style={{ top: "43px", right: "15px" }} />
                        <img src={User1} className="position-absolute" width="50px" height="50px" style={{ top: "43px", right: "55px" }} />
                    </div>
                    <div className="d-flex d-md-none p-5 rounded" style={{ backgroundColor: "#F5F5F5" }}>
                        <div className="d-flex w-100 align-items-center gap-8 ps-5">
                            <div className="border rounded bg-white align-items-center text-center" style={{ width: 30, height: 30 }}>
                                <p className="fs-3 lh-base fw-normal text-secondary pt-2">{offerLength}</p>
                            </div>
                            <p className="text-primary fs-4 lh-base fw-normal">Anzahl Gebote</p>
                        </div>
                        <div className="d-flex w-100 align-items-center">
                            <p className="text-secondary text-decoration-underline fs-4 lh-base fw-normal ps-8 cursor-pointer border-start" onClick={() => onClickAngebotMachen(false)}>Angebot Machen</p>
                        </div>
                    </div>
                    <div className="d-flex d-md-none flex-column p-5 gap-5 rounded position-relative" style={{ backgroundColor: "#F5F5F5" }}>
                        <div className="d-flex gap-2">
                            <p className="text-primary fs-5">Wir helfen Ihnen bei ihrer Finanzierung</p>
                            <div className="d-flex align-items-start position-relative">
                                <div className="mobile-info-tooltip d-none">
                                    <img className="mobile-info-tooltip-close cursor-pointer" src={CloseBtn} width={15} height={15} onClick={(e) => closeInfoClick(e)} />
                                    <p className="lh-base fs-6 fw-normal text-light pt-9">
                                        Lassen Sie sich von einem Experten für Immobilienfinanzierung beraten und finden Sie das beste Angebot, das auf Ihre Situation zugeschnitten ist. Der Service ist kostenlos, die Kontaktaufnahme unverbindlich.
                                    </p>
                                </div>
                                <img className="cursor-pointer" src={Info} onClick={(e) => infoClick(e)} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <h5 className="fs-6 hover-secondary cursor-pointer text-primary fw-normal text-decoration-underline border-end pe-5" onClick={() => window.renderKontaktformular(true)}>
                                Finanzierung berechnen
                            </h5>
                            <h5 className="fs-6 hover-secondary cursor-pointer text-2nd-calc fw-normal text-decoration-underline ps-5" onClick={() => window.renderKontaktformular(true)}>
                                Finanzierung anfragen
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-flex flex-md-row gap-9">
                <div className="d-flex flex-column gap-9 w-100">
                    <div className="d-flex flex-column p-lg-8 p-5 rounded gap-md-8 gap-lg-5" style={{ backgroundColor: "#F5F5F5" }}>
                        <div className="d-flex gap-2">
                            <p className="text-primary fs-5">Wir helfen Ihnen bei ihrer Finanzierung</p>
                            <div className="d-flex align-items-start position-relative">
                                <div className="tablet-info-tooltip d-none">
                                    <img className="tablet-info-tooltip-close cursor-pointer" src={CloseBtn} width={15} height={15} onClick={(e) => closeInfoClick(e)} />
                                    <p className="lh-base fs-5 fw-normal text-light">
                                        Lassen Sie sich von einem Experten für Immobilienfinanzierung beraten und finden Sie das beste Angebot, das auf Ihre Situation zugeschnitten ist. Der Service ist kostenlos, die Kontaktaufnahme unverbindlich.
                                    </p>
                                </div>
                                <img className="cursor-pointer" src={Info} onClick={(e) => infoClick(e)} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <h5 className="fs-5 hover-secondary cursor-pointer text-primary fw-normal text-decoration-underline border-end pe-5" onClick={() => window.renderKontaktformular(true)}>
                                Finanzierung berechnen
                            </h5>
                            <h5 className="fs-5 hover-secondary cursor-pointer text-2nd-calc fw-normal text-decoration-underline ps-5" onClick={() => window.renderKontaktformular(true)}>
                                Finanzierung anfragen
                            </h5>
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
                                <div class="d-flex p-15 rounded border bg-white tablet-angebot-info d-none" id="tablet-angebot-info">
                                    <img className="tablet-angebot-info-close cursor-pointer" src={CloseBtn} width={15} height={15} onClick={closeTabletAngebotInfo} />
                                    <p class="fs-4 lh-lg fw-normal text-light">
                                        Nach der Besichtigung können Sie Ihr Gebot abgeben und andere Gebote einsehen. Registrieren Sie sich, um diesen Service zu nutzen.
                                    </p>
                                </div>
                                <p className="fs-4 lh-base fw-normal text-secondary text-decoration-underline ps-5 cursor-pointer border-start" onClick={() => onClickAngebotMachen(true)}>Angebot Machen</p>
                            </div>
                        </div>
                    </div>
                    {/* <p className="fs-6 lh-base text-light" style={{ maxWidth: "350px" }}>
                        Gerne begleiten wir sie bei dem Verkauf Ihrer Immobilie und stehen Ihnen für Ihre Fragen
                        zur Seite.
                    </p> */}
                </div>
                <div className="d-flex flex-column gap-9 w-100">
                    <div className="d-flex py-8 px-md-5 px-lg-8 justify-content-between rounded" style={{ backgroundColor: "#F5F5F5" }}>
                        <div className="d-flex flex-column gap-5">
                            <p className="fs-5 text-primary fw-normal">Wenden Sie sich an unser Team</p>
                            <div className="w-fit-content position-relative">
                                <p className="fs-3 text-primary lh-lg fw-normal" onClick={phoneNumberClick}>Tel: 016 078 55511</p>
                                <img id="top-md-phone-cover-img" src={Cover} style={{ position: 'absolute', right: '0px', top: '0px' }} />
                                <p id="top-md-phone-cover-text" onClick={removeTopPhoneCover} className="text-phone fs-6 hover-secondary cursor-pointer text-center" style={{ position: 'absolute', width: '116px', right: '0px', top: '1px' }}>Zeigen</p>
                            </div>
                        </div>
                        <div className="position-relative" style={{ width: "90px", height: "50px" }}>
                            <img src={User2} width="50px" height="50px" className="position-absolute" style={{ right: "0px" }} />
                            <img src={User1} width="50px" height="50px" className="position-absolute" style={{ right: "40px" }} />
                        </div>
                    </div>
                    <div className="rounded-1 gap-4 px-7 py-8 border d-md-flex d-lg-none justify-content-center w-100 bg-secondary cursor-pointer" onClick={() => { window.renderKontaktformular(true) }}>
                        <img src={PhoneWhite} />
                        <p className="fs-4 text-white fw-normal">Kontaktiere uns</p>
                    </div>
                    <div className="d-flex gap-5 d-none d-lg-flex">
                        <div className="gap-4 px-7 py-8 d-flex justify-content-center w-100 cursor-pointer btn-main" onClick={() => { window.renderKontaktformular(true) }} onMouseOver={tabletPhoneOver} onMouseLeave={tabletPhoneLeave}>
                            <img id="tablet-phone" src={Phone} />
                            <p className="fw-normal fs-4">Kontaktiere uns</p>
                        </div>
                        <div className="rounded-1 gap-4 px-7 py-8 d-flex justify-content-center w-100 bg-secondary cursor-pointer" onClick={() => { window.renderTerminbuchung(true) }}>
                            <img src={Calendar} />
                            <p className="text-white fw-normal fs-4">Termin buchen</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZeroScreen;