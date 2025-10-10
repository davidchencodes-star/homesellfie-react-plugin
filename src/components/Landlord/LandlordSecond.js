import MovieAlt from "../../assets/landlord/movie-alt.png";
import { PlayIcon } from "../../utils/svg";

const LandlordSecond = () => {
    return (
        <div className="d-flex flex-column px-8 px-md-9 px-lg-15 px-xl-12 pt-0 pt-xl-10 mx-auto mb-12 position-relative ll-second">
            <div className="position-absolute bg-title"></div>
            <p className="text-primary fw-semibold fw-md-bold lh-base mx-md-auto title">
                Wie funktioniert das?
            </p>

            <div className="d-flex align-items-start content-container">
                <div className="sticky-top sticky d-none d-md-block">
                    <div className="position-relative">
                        <img src={MovieAlt} className="image" />
                        <PlayIcon className="sticky-play position-absolute cursor-pointer" />
                    </div>
                </div>

                <div className="d-flex flex-column gap-15">
                    <div className="position-relative d-block d-md-none">
                        <img src={MovieAlt} className="mobile-image" />
                        <PlayIcon className="mobile-play position-absolute cursor-pointer" />
                    </div>

                    <div className="d-flex flex-column gap-10 gap-xl-12 content">
                        <div className="step">
                            <div className="step-number h5 lh-base fw-normal">1</div>
                            <div className="step-content d-flex flex-column gap-9">
                                <p className="text-primary fw-bold lh-sm item-title">
                                    Erzählen Sie uns von Ihrer Immobilie
                                </p>
                                <p className="text-light fw-normal lh-lg item-description">
                                    <span className="text-primary position-relative">
                                        Hinterlassen Sie eine Anfrage{' '}
                                        <svg className="position-absolute d-none d-md-block" style={{ left: 0, top: 22 }}
                                            width="221" height="1" viewBox="0 0 221 1" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="221" height="1" fill="#EA4C89" />
                                        </svg>
                                        <svg className="position-absolute d-block d-md-none" style={{ left: 0, top: 20 }}
                                            width="194" height="1" viewBox="0 0 194 1" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="194" height="1" fill="#EA4C89" />
                                        </svg>
                                    </span>
                                    und erzählen Sie uns mehr über Ihre Immobilie. Unser Gutachter kommt zu Ihnen und schätzt den fairen Wert Ihres Hauses.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number h5 lh-base fw-normal">2</div>
                            <div className="step-content d-flex flex-column gap-9">
                                <p className="text-primary fw-bold lh-sm item-title">
                                    Vorbereitung für den Verkauf
                                </p>
                                <p className="text-light fw-normal lh-lg item-description">
                                    Wir erstellen hochwertige Fotos, 3D-Touren und Pläne. Wir schreiben Verkaufstexte und schalten eine Anzeige auf bekannten Websites (ImmoScout24, Immowelt).
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number h5 lh-base fw-normal">3</div>
                            <div className="step-content d-flex flex-column gap-9">
                                <p className="text-primary fw-bold lh-sm item-title">
                                    Wir nehmen alle Anfragen entgegen und organisieren Besichtigungen
                                </p>
                                <p className="text-light fw-normal lh-lg item-description">
                                    Wir übernehmen für Sie die Bearbeitung aller eingehenden Anfragen, prüfen die Bonität potenzieller Käufer und organisieren Besichtigungstermine zu einem für Sie passenden Zeitpunkt.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number h5 lh-base fw-normal">4</div>
                            <div className="step-content d-flex flex-column gap-9">
                                <p className="text-primary fw-bold lh-sm item-title">
                                    Transaktionsbegleitung bis hin zum Notar
                                </p>
                                <p className="text-light fw-normal lh-lg item-description">
                                    Wir erstellen für Sie die vollständigen Unterlagen für den Verkauf Ihrer Immobilie und begleiten die Transaktion bis zum Notar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandlordSecond;