import PhoneWhite from "../../assets/images/svg/phone-white.svg";
import PriceHeader from "../../assets/images/price-header-update.jpg";
import DekraBrand from "../../assets/images/png/dekra-brand.png";
import Dekra from "../../assets/images/svg/dekra.svg";
import Provisionen from "../../assets/images/svg/provisionen.svg";
import Marketing from "../../assets/images/svg/marketing.svg";
import PriceCheck from "../../assets/images/svg/price-check.svg";
import PriceUnCheck from "../../assets/images/svg/price-uncheck.svg";
import ProvisionenSecondary from "../../assets/images/svg/provisionen-secondary.svg";
import { useState } from "@wordpress/element";

const Price = () => {
    const subtitles = [
        "Präzise Immobilienbewertung vor Ort",
        "Hochwertige Vermarktungsmaterialien: HD-Fotos, virtuelle 360°-Besichtigung, Drohnenaufnahmen",
        "Anfertigung von Grundrissen",
        "Vollständige und bankengerechte Objektunterlagen",
        "Maximale Reichweite – Deine Anzeige auf allen Top-Portalen!",
        "Effizient verkaufen – mit KI-gestützter Vermarktung!",
        "Detaillierte Statistiken rund um die Uhr",
        "Finanzierungsgeprüfte Käufer – sicher und zuverlässig!",
        "Koordination von Käuferanfragen, Beantwortung von Fragen und Planen von Besichtigungsterminen",
        "Verhandlungen und Bieterverfahren",
        "Unlimitierte Einzelbesichtigungen durch Ihren homesellfie-Makler durchgeführt",
        "Sichere Abwicklung – mit Notarbegleitung!",
    ]

    const [currentPlan, setCurrentPlan] = useState(2);

    const handleFirstPlan = () => { 
        setCurrentPlan(1);
        document.getElementById("plan-card-1").classList.add("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-1").classList.remove("plan-card-disable");
        document.getElementById("plan-card-2").classList.remove("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-2").classList.add("plan-card-disable");
        document.getElementById("plan-card-3").classList.remove("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-3").classList.add("plan-card-disable");
        document.getElementById("plan-type-1").classList.add("plan-type-text");
        document.getElementById("plan-type-2").classList.remove("plan-type-text");
        document.getElementById("plan-type-3").classList.remove("plan-type-text");
    }

    const handleSecondPlan = () => { 
        setCurrentPlan(2);
        document.getElementById("plan-card-2").classList.add("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-2").classList.remove("plan-card-disable");
        document.getElementById("plan-card-1").classList.remove("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-1").classList.add("plan-card-disable");
        document.getElementById("plan-card-3").classList.remove("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-3").classList.add("plan-card-disable");
        document.getElementById("plan-type-1").classList.remove("plan-type-text");
        document.getElementById("plan-type-2").classList.add("plan-type-text");
        document.getElementById("plan-type-3").classList.remove("plan-type-text");
    }

    const handleThirdPlan = () => { 
        setCurrentPlan(3);
        document.getElementById("plan-card-3").classList.add("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-3").classList.remove("plan-card-disable");
        document.getElementById("plan-card-1").classList.remove("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-1").classList.add("plan-card-disable");
        document.getElementById("plan-card-2").classList.remove("plan-card-border", "plan-card-enable");
        document.getElementById("plan-card-2").classList.add("plan-card-disable");
        document.getElementById("plan-type-1").classList.remove("plan-type-text");
        document.getElementById("plan-type-2").classList.remove("plan-type-text");
        document.getElementById("plan-type-3").classList.add("plan-type-text");
    }

    return (
        <div className="m-5 m-md-9 m-lg-15 mx-xl-auto d-flex flex-column gap-10 price-section">
            <div className="d-flex flex-column gap-10 gap-md-5 gap-lg-9 gap-xl-10">
                <div className="d-flex flex-column flex-md-row price-header-container">
                    <div className="order-1 order-md-0 d-flex flex-column bg-f4 price-header header-content px-8 px-lg-15 px-xl-10 pt-8 pt-md-10 pb-8 pb-md-0">
                        <div className="d-flex flex-column gap-9 mb-9 position-relative">
                            {/* <div className="position-absolute bg-header-title"></div> */}
                            <p className="fw-bold text-primary lh-lg lh-xl-base header-title-text" style={{ zIndex: 1 }}>
                                So verkaufst du deine Immobilie heute
                            </p>
                            <p className="fw-normal text-light fs-4 fs-xl-3 lh-lg">
                                Wir begleiten deinen Immobilienverkauf mit digitalen und persönlichen Services bis zum Notariat. Zum Fixpreis.
                            </p>
                        </div>
                        <div className="d-flex rounded-1 bg-secondary py-8 gap-4 mt-5 mt-lg-8 align-items-center justify-content-center cursor-pointer kontaktiere-uns" onClick={() => window.renderKontaktiereUnsModal(true)}>
                            <img src={PhoneWhite} />
                            <p className="fw-normal text-white fs-4 lh-base">Kontaktiere uns</p>
                        </div>
                    </div>
                    <img className="order-0 order-md-1 object-fit-cover price-header header-img" src={PriceHeader} />
                </div>

                <div className="d-flex flex-column flex-lg-row gap-15 gap-md-9 gap-xl-10 mt-5 mt-md-0">
                    <div className="d-flex flex-column w-100 rounded p-8 p-md-9 p-xl-15 gap-9 bg-white shadow position-relative price-card">
                        {/* <img className="position-absolute dekra-brand" src={DekraBrand} /> */}
                        <div className="d-flex bg-danger rounded gap-4 pe-5 align-items-center w-fit-content">
                            <img className="rounded p-3 svg-card" src={Dekra} />
                            <p className="fw-normal text-primary fs-4 fs-xl-3 lh-lg">
                                Persönliche Betreuung
                            </p>
                        </div>
                        <p className="fw-normal fw-xl-bold text-primary fs-3 fs-xl-2 lh-lg lh-xl-sm">
                            Persönlicher lokaler Makler
                        </p>
                        <p className="fw-normal text-light fs-4 fs-xl-3 lh-lg">
                            Dein lokaler Makler begleitet dich von der Bewertung bis zur Unterzeichnung des Kaufvertrags beim Notar – zuverlässig und persönlich!
                        </p>
                    </div>
                    <div className="d-flex flex-column w-100 rounded p-8 p-md-9 p-xl-15 gap-9 bg-white shadow price-card">
                        <div className="d-flex bg-danger rounded gap-4 pe-5 align-items-center w-fit-content">
                            <img className="rounded p-3 svg-card" src={Provisionen} />
                            <p className="fw-normal text-primary fs-4 fs-xl-3 lh-lg">
                                Perfekte Präsentation 
                            </p>
                        </div>
                        <p className="fw-normal fw-xl-bold text-primary fs-3 fs-xl-2 lh-lg lh-xl-sm">
                            Maklerprovision neu gedacht
                        </p>
                        <p className="fw-normal text-light fs-4 fs-xl-3 lh-lg">
                            Alles aus einer Hand: Wir kümmern uns um alle Objektunterlagen, erstellen beeindruckende virtuelle Rundgänge und professionelle Grundrisse – für eine erfolgreiche Vermarktung!
                        </p>
                    </div>
                    <div className="d-flex flex-column w-100 rounded p-8 p-md-9 p-xl-15 gap-9 bg-white shadow price-card">
                        <div className="d-flex bg-danger rounded gap-4 pe-5 align-items-center w-fit-content">
                            <img className="rounded p-3 svg-card" src={Marketing} />
                            <p className="fw-normal text-primary fs-4 fs-xl-3 lh-lg">
                                Marketing
                            </p>
                        </div>
                        <p className="fw-normal fw-xl-bold text-primary fs-3 fs-xl-2 lh-lg lh-xl-sm">
                            Wir kooperieren mit großen Werbeplattformen
                        </p>
                        <p className="fw-normal text-light fs-4 fs-xl-3 lh-lg">
                            Sie haben vollen Zugriff auf die Statistiken aller Anzeigen in Ihrem Homeselfie-Konto.
                        </p>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column mt-9 mt-md-5 mt-lg-0 mt-xl-11 position-relative">
                <div className="position-absolute bg-content-title"></div>
                <p className="fw-bold text-primary content-title-text lh-lg lh-md-sm lh-xl-base w-100 mb-8 description-title" style={{ zIndex: 1 }}>
                    Das fairste Angebot für deinen Immobilienverkauf.
                </p>
                <p className="fw-normal text-light fs-4 fs-xl-3 lh-lg w-100 mb-15 mb-md-9 mb-xl-10 description-title">
                    Verkaufe mit uns zum Fixpreis
                </p>
                <div className="d-flex flex-row mt-xl-5">
                    <div className="d-flex flex-column description-list">
                        <div className="description-header"></div>
                        {
                            subtitles.map((subtitle, index) => {
                                return index < 11 ?
                                    <p className={`fw-normal text-primary subtitle-font lh-lg border-top d-flex align-items-center ps-md-8 ps-xl-0 pe-sm-8 pe-md-0 pe-lg-5 pe-lg-15 description-item-${index + 1} description-subtitle`}>
                                        {subtitle}
                                    </p> :
                                    <p className={`fw-normal text-primary subtitle-font lh-lg border-top d-flex align-items-center ps-md-8 ps-xl-0 pe-sm-8 pe-md-0 pe-lg-5 pe-lg-15 description-item-${index + 1} description-subtitle border-bottom`}>
                                        {subtitle}
                                    </p>
                            })
                        }
                    </div>
                    <div className="d-flex flex-row w-100">
                        <div className="d-flex flex-column w-100 cursor-pointer position-relative plan-container" id="plan-detail-1" style={{ backgroundColor: currentPlan === 1 ? "#FFEEEF" : "transparent" }}>
                            <div className="position-absolute plan-card-disable" id="plan-card-1" onClick={handleFirstPlan}></div>
                            <div className="pt-5 pt-md-0 pt-xl-9 ps-xl-15 d-flex description-header">
                                <div className="d-flex flex-column gap-2">
                                    <p className="fw-normal text-light fs-6 fs-xl-5 lh-base d-flex description-header-first-line" id="plan-type-1">Base</p>
                                    <p className="fw-normal fw-xl-bold text-primary fs-5 fs-xl-1 lh-base lh-xl-sm">849 €</p>
                                </div>
                            </div>
                            {
                                Array.from({length: 12}).fill(0).map((_, index) => {
                                    return index < 11 ?
                                        <div className={`description-item-${index + 1} check ps-xl-15 d-flex align-items-center border-start border-top`}>
                                            <img src={index < 4 ? PriceCheck : PriceUnCheck} />
                                        </div> : 
                                        <div className={`description-item-${index + 1} check ps-xl-15 d-flex align-items-center border-start border-top border-bottom`}>
                                            <img src={PriceUnCheck} />
                                        </div>
                                })
                            }
                        </div>
                        <div className="d-flex flex-column w-100 cursor-pointer position-relative plan-container" id="plan-detail-2" style={{ backgroundColor: currentPlan === 2 ? "#FFEEEF" : "transparent" }}>
                            <div className="position-absolute plan-card-enable plan-card-border" id="plan-card-2" onClick={handleSecondPlan}></div>
                            <div className="pt-5 pt-md-0 pt-xl-9 ps-xl-15 d-flex description-header">
                                <div className="d-flex flex-column gap-2">
                                    <p className="fw-normal text-light fs-6 fs-xl-5 lh-base d-flex description-header-first-line plan-type-text" id="plan-type-2">Prämie</p>
                                    <div className="d-flex flex-column flex-md-row gap-md-5 align-items-baseline">
                                        <p className="fw-normal text-light fs-6 fs-xl-3 lh-base lh-xl-lg text-decoration-line-through">2.650 €</p>
                                        <p className="fw-normal fw-xl-bold text-primary fs-5 fs-xl-1 lh-base lh-xl-sm">1.850 €</p>
                                    </div>
                                </div>
                            </div>
                            {
                                Array.from({length: 12}).fill(0).map((_, index) => {
                                    return index < 11 ?
                                        <div className={`description-item-${index + 1} check ps-xl-15 d-flex align-items-center border-start border-top`}>
                                            <img src={index < 10 ? PriceCheck : PriceUnCheck} />
                                        </div> : 
                                        <div className={`description-item-${index + 1} check ps-xl-15 d-flex align-items-center border-start border-top border-bottom`}>
                                            <img src={PriceUnCheck} />
                                        </div>
                                })
                            }
                        </div>
                        <div className="d-flex flex-column w-100 cursor-pointer position-relative plan-container" id="plan-detail-3" style={{ backgroundColor: currentPlan === 3 ? "#FFEEEF" : "transparent" }}>
                            <div className="position-absolute plan-card-disable" id="plan-card-3" onClick={handleThirdPlan}></div>
                            <div className="pt-5 pt-md-0 pt-xl-9 ps-xl-15 d-flex description-header">
                                <div className="d-flex flex-column gap-2">
                                    <p className="text-light fw-normal fs-6 fs-xl-5 lh-base d-flex description-header-first-line" id="plan-type-3">Gold</p>
                                    <div className="d-flex flex-column flex-md-row gap-md-5 align-items-baseline">
                                        {/* <p className="fw-normal text-light fs-6 fs-xl-3 lh-base lh-xl-lg text-decoration-line-through">7.999 €</p> */}
                                        <p className="fw-normal fw-xl-bold text-primary fs-5 fs-xl-1 lh-base lh-xl-sm">3.950 €</p>
                                    </div>
                                </div>
                            </div>
                            {
                                Array.from({length: 12}).fill(0).map((_, index) => {
                                    return index < 11 ?
                                        <div className={`description-item-${index + 1} check ps-xl-15 d-flex align-items-center border-start border-top border-end`}>
                                            <img src={PriceCheck} />
                                        </div> : 
                                        <div className={`description-item-${index + 1} check ps-xl-15 d-flex align-items-center border`}>
                                            <img src={PriceCheck} />
                                        </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-flex border rounded-bottom-2 p-8 mb-md-15 mb-lg-10 mb-xl-15 bg-f5 price-bottom justify-content-center">
                    <p className="fw-normal text-primary fs-3 lh-base text-center">
                        <img src={ProvisionenSecondary} /> Bist du unsicher? Dann kontaktier uns für einen Termin für eine gratis Probefahrt bevor du dich entscheidest.
                    </p>
                </div>
                <div className="d-flex mt-15 mt-md-0 mb-10 mehr-infos-container">
                    <div className="d-flex py-8 bg-secondary rounded-1 justify-content-center mehr-infos cursor-pointer" onClick={() => window.renderKontaktformular(true)}>
                        <p className="fw-normal text-white fs-4 lh-base">Mehr Infos</p>
                    </div>
                </div>
                <div className="d-flex d-md-none flex-column border px-6 py-8 gap-5 rounded mb-10 bg-f5">
                    <div className="d-flex gap-2 px-2 py-1 rounded-1 border border-secondary w-fit-content align-items-center">
                        <img src={ProvisionenSecondary} />
                        <p className="fw-normal text-secondary fs-5 lh-base">Deine Vorteile</p>
                    </div>
                    <p className="fw-normal text-primary fs-4 lh-lg ">
                        Bist du unsicher? Dann kontaktier uns für einen Termin für eine gratis Probefahrt bevor du dich entscheidest.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Price;