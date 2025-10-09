import Document from "../../assets/images/svg/document.svg";
import Lock from "../../assets/images/svg/lock.svg";
import DownloadIcon from "../../assets/images/svg/download.svg";

import { useEffect, useState } from "@wordpress/element";
import { useAuthContext } from "../../context/AuthContext";

const SecondSection = () => {
    const { loggedIn } = useAuthContext();
    
    const [otherInformation, setOtherInformation] = useState(
		localStorage.getItem("smartData") != null && localStorage.getItem("smartData") != "false" ? JSON.parse(localStorage.getItem("smartData"))[0]["sonstige_angaben"] : ""
	);

    const [documents, setDocuments] = useState(
        localStorage.getItem("smartData") != null && localStorage.getItem("smartData") != "false" ? JSON.parse(localStorage.getItem("smartData"))[0]["dokument"] : []
    )

    const storageListener = () => {
		setOtherInformation(localStorage.getItem("smartData") != null && localStorage.getItem("smartData") != "false" ? JSON.parse(localStorage.getItem("smartData"))[0]["sonstige_angaben"] : "");
        setDocuments(localStorage.getItem("smartData") != null && localStorage.getItem("smartData") != "false" ? JSON.parse(localStorage.getItem("smartData"))[0]["dokument"] : []);
    };

	useEffect(() => {
		window.addEventListener("storage", storageListener);
		return () => window.removeEventListener("storage", storageListener);
	}, []);

    return (
        <div className="my-9 m-md-9 m-lg-15 mx-xl-auto mb-xl-12 d-flex gap-10 home-section">
            <div className="w-100 accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item accordion-first-border border-left-right-none">
                    <p className="accordion-header fs-2">
                        <button className="accordion-button fs-1 fw-bold lh-sm collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseOne">
                            Modernisierungsmaßnahmen
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                        {otherInformation && <div className="accordion-body px-8 py-5">
                            {otherInformation.split('\r\n').map((info) => { if(info) return <p className="text-light pb-1 fs-3">{info}</p> })}
                        </div>}
                    </div>
                </div>
                <div className="accordion-item accordion-second-border border-left-right-none">
                    <p className="accordion-header fs-2">
                        <button className="accordion-button fs-1 fw-bold lh-sm" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseTwo">
                            Dokumente
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                        {documents.length > 0 ? <div className="accordion-body px-8 py-5 d-flex flex-column gap-9">
                            {documents.map((document) => {
                                if (document) {
                                    return (
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-8 align-items-center">
                                                <img src={Document} />
                                                <p className="text-primary fw-normal fs-4">{document.elements.title}</p>
                                            </div>
                                            <img src={loggedIn ? DownloadIcon : Lock} width={18} height={20} className="cursor-pointer" onClick={() => { window.renderDocumentUnlockModal(true); window.renderDocumentID(document.id); } } />
                                        </div>
                                    );
                                }
                            })}
                        </div> : null}
                            {/* <div className="d-flex justify-content-between">
                                <div className="d-flex gap-8 align-items-center">
                                    <img src={Document} />
                                    <p className="text-primary fw-normal fs-4">Grundrisse</p>
                                </div>
                                <img src={Lock} className="d-none cursor-pointer" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex gap-8 align-items-center">
                                    <img src={Document} />
                                    <p className="text-primary fw-normal fs-4">Wohnflächenberechnung</p>
                                </div>
                                <img src={Lock} className="d-none cursor-pointer" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex gap-8 align-items-center">
                                    <img src={Document} />
                                    <p className="text-light fw-normal fs-4">Flurkarte/Katstarplan</p>
                                </div>
                                <img src={Lock} className="cursor-pointer" onClick={() => { window.renderDocumentUnlockModal(true) }} />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex gap-8 align-items-center">
                                    <img src={Document} />
                                    <p className="text-light fw-normal fs-4">Grundbuchauszug</p>
                                </div>
                                <img src={Lock} className="cursor-pointer" onClick={() => { window.renderDocumentUnlockModal(true) }} />
                            </div>
                            <p className="d-none more-button border-bottom border-secondary lh-lg pb-1 w-fit-content fs-3 cursor-pointer hover-secondary">
                                Mehr
                            </p> */}
                    </div>
                </div>
            </div>
            <div className="d-xl-block d-none" style={{ minWidth: "400px", maxWidth: "400px", height: "0px" }}>
            </div>
        </div>
    );
};

export default SecondSection;