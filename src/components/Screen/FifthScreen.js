import DiscountCircle from "../../assets/images/svg/discount-circle.svg";
import HomeLogo from "../../assets/images/svg/homelogo.svg";
import PhoneWhite from "../../assets/images/svg/phone-white.svg";
import Phone from "../../assets/images/svg/phone.svg";
import User2 from "../../assets/images/png/user-2-update.png";
import User1 from "../../assets/images/png/user-1-update.png";
import Cover from "../../assets/images/svg/cover.svg";
import CheckWhite from "../../assets/images/svg/check-white.svg";
import { useTotalContext } from "../../context/TotalContext";

const FifthScreen = () => {

    const { homedata } = useTotalContext();

    const parseData = JSON.parse(homedata);
    const verkaufspreis = Number(parseData.verkaufspreis);
    const grunderwerbsteuer = Math.floor(verkaufspreis * 0.05);
    const notarkosten = Math.floor(verkaufspreis * 0.015);
    const grundbucheintrag = Math.floor(verkaufspreis * 0.005);
    const maklerprovision = Math.floor(verkaufspreis * 0.035);
    const nebenkosten = Math.floor(verkaufspreis * 0.105);
    const summe = Math.floor(verkaufspreis + nebenkosten);
    const gesamtsumme = Math.floor(summe - maklerprovision);

    const removeBottomPhoneCover = () => {
        document.getElementById("md-phone-cover-img").style.display = "none";
        document.getElementById("md-phone-cover-text").style.display = "none";
        document.getElementById("lg-phone-cover-img").style.display = "none";
        document.getElementById("lg-phone-cover-text").style.display = "none";
    }

    const BottomXLPhoneMouseOver = () => {
        document.getElementById("bottom-xl-phone").src = PhoneWhite;
    }

    const BottomXLPhoneMouseLeave = () => {
        document.getElementById("bottom-xl-phone").src = Phone;
    }

    const phoneNumberClick = (e) => {
        gtag(
            "event", "phone-number", {
                phone_number: "016 078 55511"
            }
        )
    }

    return (
        <div className="order-0 order-md-1 d-flex gap-10 flex-column">
            <div className="d-flex gap-10">
                <div className="w-100 d-flex gap-9 flex-column">
                    <p className="lh-lg text-primary fs-2 fs-md-1 fw-bold">Verkaufspreis</p>
                    <p className="lh-lg text-light fw-normal fs-4 fs-md-3">
                    Mit homesellfie zahlst du <span className="text-secondary">keine Käuferprovision</span>! Wir arbeiten ausschließlich mit <span className="text-secondary">transparenten Festpreisen</span>, die komplett vom Verkäufer getragen werden – für einen sorgenfreien und erfolgreichen Immobilienkauf.
                    </p>
                    <div className="d-flex flex-column gap-8">
                        <div className="d-flex gap-9 flex-column pb-8 border-bottom">
                            {/* <p className="text-light fw-normal fs-5">Kaufnebenkosten</p> */}
                            <div className="d-flex w-100 rounded-1 border">
                                <div className="py-6 w-100 d-flex gap-5 text-primary justify-content-center border-end">
                                    <p className="lh-base lh-md-sm fs-6 fs-sm-5 fs-md-4 fs-lg-2 text-primary fw-normal fw-md-bold">Kaufpreis</p>
                                    <p className="lh-base lh-md-sm fs-6 fs-sm-5 fs-md-4 fs-lg-2 text-primary fw-semibold fw-md-bold">{Math.floor(verkaufspreis).toLocaleString().replaceAll(',', '.')} €</p>
                                </div>
                                <div className="py-6 w-100 d-flex gap-5 text-primary justify-content-center">
                                    <p className="lh-base lh-md-sm fs-6 fs-sm-5 fs-md-4 fs-lg-2 text-primary fw-normal fw-md-bold">Nebenkosten</p>
                                    <p className="lh-base lh-md-sm fs-6 fs-sm-5 fs-md-4 fs-lg-2 text-primary fw-semibold fw-md-bold">{nebenkosten.toLocaleString().replaceAll(',', '.')} €</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-8">
                                <div className="d-flex w-100" style={{ height: "26px" }}>
                                    <div className="rounded-start h-100 bg-light" style={{ width: "45%" }}></div>
                                    <div className="h-100" style={{ width: "30%", backgroundColor: "#C3F0F7" }}></div>
                                    <div className="h-100" style={{ width: "15%", backgroundColor: "#ADFBD6" }}></div>
                                    <div className="rounded-end h-100" style={{ width: "10%", backgroundColor: "#A1B7FF" }}></div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex gap-5 gap-sm-8 align-items-center">
                                        <div style={{ backgroundColor: "#C3F0F7", borderRadius: "3px", width: "25px", height: "25px" }}></div>
                                        <p className="text-light fw-normal fs-6 fs-sm-5">Grunderwerbsteuer</p>
                                    </div>
                                    <div className="d-flex justify-content-between price-info">
                                        <p className="text-light fw-normal fs-6 fs-sm-5">5.00%</p>
                                        <p className="text-light fw-normal fs-6 fs-sm-5">{grunderwerbsteuer.toLocaleString().replaceAll(',', '.')} €</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex gap-5 gap-sm-8 align-items-center">
                                        <div style={{ backgroundColor: "#ADFBD6", borderRadius: "3px", width: "25px", height: "25px" }}></div>
                                        <p className="text-light fw-normal fs-6 fs-sm-5">Notarkosten</p>
                                    </div>
                                    <div className="d-flex justify-content-between price-info">
                                        <p className="text-light fw-normal fs-6 fs-sm-5">1.50%</p>
                                        <p className="text-light fw-normal fs-6 fs-sm-5">{notarkosten.toLocaleString().replaceAll(',', '.')} €</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex gap-5 gap-sm-8 align-items-center">
                                        <div style={{ backgroundColor: "#A1B7FF", borderRadius: "3px", width: "25px", height: "25px" }}></div>
                                        <p className="text-light fw-normal fs-6 fs-sm-5">Grundbucheintrag</p>
                                    </div>
                                    <div className="d-flex justify-content-between price-info">
                                        <p className="text-light fw-normal fs-6 fs-sm-5">0.50%</p>
                                        <p className="text-light fw-normal fs-6 fs-sm-5">{grundbucheintrag.toLocaleString().replaceAll(',', '.')} €</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex gap-5 gap-sm-8 align-items-center">
                                        <div style={{ backgroundColor: "#EA4C89", borderRadius: "3px", width: "25px", height: "25px", minWidth: "25px" }}></div>
                                        <p className="text-secondary fw-normal fs-6 fs-sm-5">übliche Käuferprovision anderer Makler</p>
                                    </div>
                                    <div className="d-flex justify-content-between price-info">
                                        <p className="text-secondary fw-normal fs-6 fs-sm-5">ca. 3.50%</p>
                                        <p className="text-secondary fw-normal fs-6 fs-sm-5">{maklerprovision.toLocaleString().replaceAll(',', '.')} €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-end gap-4">
                            <p className="text-primary fs-5 fs-md-3 lh-base lh-md-lg fw-bold fw-md-normal"><del>Summe {summe.toLocaleString().replaceAll(',', '.')} €</del></p>
                            <p className="text-secondary fs-6 fs-sm-5 fs-md-4 fs-lg-2 lh-base lh-md-sm fw-semibold fw-md-bold">Keine Käuferprovision mit homesellfie - {maklerprovision.toLocaleString().replaceAll(',', '.')} €</p>
                            <p className="text-primary lh-base lh-md-sm fw-semibold fw-md-bold fs-2">Gesamtsumme {gesamtsumme.toLocaleString().replaceAll(',', '.')} €</p>
                            <p className="text-light fw-normal fs-6">eine Beispielrechnung von homesellfie</p>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-flex d-xl-none rounded p-5 flex-column gap-15" style={{ minWidth: "340px", maxWidth: "340px" }}>
                    <p className="text-primary lh-sm fw-bold fs-1">
                        Verschaffen Sie sich einen Vorsprung mit einem Finanzierungszertifikat
                    </p>
                    <div className="d-flex flex-column gap-8">
                        <p className="lh-lg fw-normal text-light fs-3">
                            <span className="text-secondary">Interessieren Sie sich für diese Immobilie?</span>
                            Erhöhen Sie Ihre Chancen auf den Zuschlag durch die Vorlage Ihres Finanzierungszertifikates.
                        </p>
                        <p className="lh-lg fw-normal text-secondary fs-3">Bringen Sie das Glück auf Ihre Seite!</p>
                        <p className="lh-lg fw-normal text-light fs-3">
                            Wenn Sie bei der Besichtigung eine Finanzierungsbestätigung vorweisen können, verschaffen Sie sich einen beträchtlichen Vorteil gegenüber anderen Käufern.
                        </p>
                    </div>
                    <div className="d-flex gap-5 rounded-1 justify-content-center align-items-center bg-secondary text-white py-8 cursor-pointer" onClick={() => window.renderKontaktformular(true)}>
                        <img src={CheckWhite} />
                        <p className="fw-normal fs-4">Jetzt Finanzierung anfragen</p>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-9">
                <div className="w-100 d-flex flex-column rounded bg-danger py-8 px-6 p-md-8 p-lg-9 gap-5 gap-md-9">
                    <div className="me-auto gap-2 d-flex py-1 px-2 px-md-5 border border-secondary" style={{ borderRadius: "3px" }}>
                        <img src={DiscountCircle} />
                        <p className="lh-base lh-md-lg fs-5 fs-md-3 text-secondary fw-normal">Ihr Nutzen</p>
                    </div>
                    <div className="d-flex flex-column w-100">
                        <p className="lh-lg fs-4 fs-md-3 fs-lg-4 fs-xl-3 fw-normal text-primary">
                            Revolutionärer Ansatz! Bei
                            {' '}<span><img src={HomeLogo} style={{ marginTop: "-5px" }} /></span>{' '}
                            zahlen Sie statt einer prozentuellen Maklerprovision einen festen Preis! Sprechen Sie uns gerne an!
                        </p>
                        <br />
                        <p className="lh-lg fw-normal text-primary fs-lg-4 fs-xl-3 d-none d-lg-block">
                            Wir sind immer offen für unsere Kunden und helfen Ihnen, Geld zu sparen.
                        </p>
                    </div>
                </div>
                <div className="rounded border w-100 d-none d-md-flex flex-column p-md-0 p-lg-8 gap-md-9 gap-lg-15">
                    <div className="d-none d-lg-flex justify-content-between">
                        <div className="w-100 d-flex gap-5 flex-column text-primary">
                            <p className="lh-sm fw-bold fs-2">Sie haben Fragen?</p>
                            <div className="w-fit-content position-relative">
                                <p className="lh-lg fw-normal fs-3" onClick={phoneNumberClick}>Tel: 016 078 55511</p>
                                <img id="lg-phone-cover-img" src={Cover} style={{ position: 'absolute', right: '0px', top: '0px' }} />
                                <p id="lg-phone-cover-text" onClick={removeBottomPhoneCover} className="text-phone fs-6 hover-secondary cursor-pointer text-center" style={{ position: 'absolute', width: '116px', right: '0px', top: '1px' }}>Zeigen</p>
                            </div>
                            <p className="lh-lg fw-normal fs-4">Gerne begleiten wir Sie bei <br /> Ihrem Verkauf!</p>
                        </div>
                        <div className="position-relative" style={{ width: "145px" }}>
                            <img src={User2} className="position-absolute" style={{ right: "0px" }} width="80px" height="80px" />
                            <img src={User1} className="position-absolute" style={{ right: "65px" }} width="80px" height="80px" />
                        </div>
                    </div>
                    <div className="d-none d-md-flex d-lg-none ps-8 pt-5 rounded flex-column position-relative gap-5" style={{ backgroundColor: "#F5F5F5" }}>
                        <p className="text-primary fw-normal fs-5">Gerne begleiten wir Sie bei <br /> Ihrem Verkauf!</p>
                        <div className="d-flex justify-content-between align-items-center" style={{ height: "50px" }}>
                            <div className="w-fit-content position-relative">
                                <p className="text-primary fw-normal lh-lg fs-3" onClick={phoneNumberClick}>Tel: 016 078 55511</p>
                                <img id="md-phone-cover-img" src={Cover} style={{ position: 'absolute', right: '0px', top: '0px' }} />
                                <p id="md-phone-cover-text" onClick={removeBottomPhoneCover} className="text-phone fs-6 hover-secondary cursor-pointer text-center" style={{ position: 'absolute', width: '116px', right: '0px', top: '1px' }}>Zeigen</p>
                            </div>
                            <div className="position-relative" style={{ width: "90px" }}>
                                <img src={User2} className="position-absolute" style={{ right: "15px", top: "-32px" }} width="50px" height="50px" />
                                <img src={User1} className="position-absolute" style={{ right: "55px", top: "-32px" }} width="50px" height="50px" />
                            </div>
                        </div>
                    </div>
                    <div className="py-8 rounded-1 d-md-flex d-xl-none gap-4 align-items-center justify-content-center bg-secondary cursor-pointer" onClick={() => { window.renderKontaktformular(true) }}>
                        <img src={PhoneWhite} />
                        <p className="text-white fw-normal fs-4">Kontaktiere uns</p>
                    </div>
                    <div className="py-5 rounded-1 d-none d-xl-flex gap-4 align-items-center justify-content-center cursor-pointer btn-main" onClick={() => { window.renderKontaktformular(true) }} onMouseOver={BottomXLPhoneMouseOver} onMouseLeave={BottomXLPhoneMouseLeave} >
                        <img id="bottom-xl-phone" src={Phone} />
                        <p className="fw-normal fs-4">Kontaktiere uns</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FifthScreen;
