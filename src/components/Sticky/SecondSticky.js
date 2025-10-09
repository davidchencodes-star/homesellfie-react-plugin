import Check from "../../assets/images/svg/check.svg";
import CheckWhite from "../../assets/images/svg/check-white.svg";

const SecondSticky = () => {
    const CalcMouseOver = () => {
        document.getElementById("sticky-check").src = CheckWhite;
    }

    const CalcMouseLeave = () => {
        document.getElementById("sticky-check").src = Check;
    }

    return (
        <div className="d-xl-block d-none" style={{ minWidth: "400px", maxWidth: "400px" }}>
            <div className="shadow rounded sticky-top p-9 pt-5 d-flex flex-column gap-15" style={{ top: "100px" }}>
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
                <div className="d-flex gap-5 rounded-1 justify-content-center align-items-center bg-white btn-main py-8 cursor-pointer" onMouseOver={CalcMouseOver} onMouseLeave={CalcMouseLeave} onClick={() => window.renderKontaktformular(true)}>
                    <img id="sticky-check" src={Check} />
                    <p className="fw-normal fs-4">Jetzt Finanzierung anfragen</p>
                </div>
            </div>
        </div>
    );
};

export default SecondSticky;
