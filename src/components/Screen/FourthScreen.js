import MinusPrimary from "../../assets/images/svg/minus-primary.svg";
import MinusSecondary from "../../assets/images/svg/minus-secondary.svg";
import PlusPrimary from "../../assets/images/svg/plus-primary.svg";
import PlusSecondary from "../../assets/images/svg/plus-secondary.svg";
import { useTotalContext } from "../../context/TotalContext";

const FourthScreen = () => {
    const { homedata } = useTotalContext();
    const parseData = JSON.parse(homedata);

    const MinusMouseOver = () => {
        document.getElementById("minus").src = MinusSecondary;
    }

    const MinusMouseLeave = () => {
        document.getElementById("minus").src = MinusPrimary;
    }

    const PlusMouseOver = () => {
        document.getElementById("plus").src = PlusSecondary;
    }

    const PlusMouseLeave = () => {
        document.getElementById("plus").src = PlusPrimary;
    }

    return (
        <div className="order-1 order-md-0 d-lg-flex d-block gap-lg-9">
            {/* <div
                className="w-100 d-flex flex-column flex-md-row flex-lg-column flex-xl-row py-9 px-0 px-md-9 rounded bg-sm-transparent justify-content-xl-between justify-content-md-between gap-9 gap-md-0 gap-lg-15"
            >
                <div className="col-xl-6 col-lg-12 col-md-5 pe-xl-9 d-flex flex-column gap-9">
                    <p className="text-primary lh-lg lh-md-sm fs-2 fs-md-1 fw-bold">
                        Benötigen Sie eine Baufinanzierung?
                    </p>
                    <p className="d-none d-md-block d-lg-none d-xl-block text-light lh-lg fw-normal fs-md-4 fs-xl-3">
                        Gerne begleiten wir Sie von A bis Z bei Ihrer Transaktion und
                        beantworten Ihre Fragen. Gerne begleiten wir Sie von A bis Z bei Ihrer
                        Transaktion und beantworten Ihre Fragen.
                    </p>
                </div>
                <div className="col-xl-5 col-lg-12 col-md-7 ps-lg-0 ps-md-2 d-flex flex-column gap-9 gap-md-15">
                    <div className="d-flex flex-column gap-9">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-8">
                                <p className="text-light fw-normal fs-5">Verkaufspreis</p>
                                <p className="text-primary fw-semibold fs-2">{Math.floor(Number(parseData.verkaufspreis)).toLocaleString().replaceAll(',', '.')} €</p>
                            </div>
                            <div className="d-flex gap-15">
                                <img id="minus" src={MinusPrimary} width="20px" height="20px" className="cursor-pointer" onMouseOver={MinusMouseOver} onMouseLeave={MinusMouseLeave} />
                                <img id="plus" src={PlusPrimary} width="20px" height="20px" className="cursor-pointer" onMouseOver={PlusMouseOver} onMouseLeave={PlusMouseLeave} />
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-xl-column gap-9">
                            <div className="w-100 d-flex gap-6 flex-column">
                                <p className="text-light fw-normal fs-5">Eigenmittel</p>
                                <div className="d-flex gap-5 py-5 py-md-7 px-5 border rounded-1 w-100">
                                    <input
                                        type="text"
                                        className="w-100 p-0 text-light bg-transparent border-0"
                                        style={{ outline: 0 }}
                                    />
                                    <p className="fw-normal text-light ms-auto fs-4">€</p>
                                </div>
                            </div>
                            <div className="w-100 d-flex gap-6 flex-column">
                                <p className="text-light fw-normal fs-5">Jährliches Bruttoeinkommen</p>
                                <div className="d-flex gap-5 py-5 py-md-7 px-5 border rounded-1 w-100">
                                    <input
                                        type="text"
                                        className="w-100 p-0 bg-transparent text-light border-0"
                                        style={{ outline: 0 }}
                                    />
                                    <p className="fw-normal text-light ms-auto fs-4">€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-100 bg-white py-5 py-md-8 fs-4 text-primary rounded-1 btn-main">
                        Jetzt Finanzierung anfragen
                    </button>
                </div>
            </div> */}
            <div className="w-100 d-block d-md-none mt-md-9 mt-lg-0 pb-10">
                <div className="rounded-0 rounded-md p-0 p-md-9 d-flex flex-column bg-sm-transparent gap-15 gap-md-10 gap-lg-15">
                    <div className="d-flex flex-column gap-9 gap-md-15">
                        <p className="text-primary lh-lg fw-bold fs-2 fs-md-1">
                            Verschaffen Sie sich einen Vorsprung mit einem Finanzierungszertifikat
                        </p>
                        <div className="d-flex flex-column gap-8 gap-md-9 gap-lg-8">
                            <p className="lh-lg fw-normal text-light fs-4">
                                <span className="text-secondary">Interessieren Sie sich für diese Immobilie? </span>
                                Erhöhen Sie Ihre Chancen auf den Zuschlag durch die Vorlage Ihres Finanzierungszertifikates.
                            </p>
                            <p className="lh-lg fw-normal text-secondary fs-4">Bringen Sie das Glück auf Ihre Seite!</p>
                            <p className="lh-lg fw-normal text-light fs-4">
                            Wenn Sie bei der Besichtigung eine Finanzierungsbestätigung vorweisen können, verschaffen Sie sich einen beträchtlichen Vorteil gegenüber anderen Käufern.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex rounded-1 justify-content-center bg-secondary py-5 py-md-8 cursor-pointer" onClick={() => window.renderKontaktformular(true)}>
                        <p className="text-white fw-normal fs-4">Jetzt Finanzierung anfragen</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthScreen;
