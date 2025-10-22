import FooterAlt from "../../assets/common/footer-alt.jpg";
import UserFirst from "../../assets/common/user-1.png";
import UserSecond from "../../assets/common/user-2.png";
import { PhoneCoverIcon } from "../../utils/svg";

const HomeFooter = () => {
    const removePhoneCover = () => {
        document.getElementById("phone-number-cover").classList.add("d-none");
        document.getElementById("phone-number-cover-text").classList.add("d-none");
    }

    return (
        <div className="d-flex px-8 px-md-9 px-lg-15 px-xl-12 mx-auto w-100 home-footer">
            <div className="d-flex flex-column gap-15 left-content">
                <p className="text-primary fw-semibold fw-md-bold title">
                    Sie möchten Ihre Immobilie verkaufen? Unsere Experten beraten Sie kostenlos und unverbindlich.
                </p>

                <div className="d-flex gap-5 justify-content-between description">
                    <div className="d-flex flex-column gap-5 w-100 text">
                        <div className="d-flex justify-content-between">
                            <div className="position-relative w-fit-content">
                                <p className="text-primary fw-normal lh-lg pt-7 pb-7 pt-lg-1 pb-lg-0" style={{ fontSize: 16 }}>
                                    Tel:{" "}
                                    <a href="tel:+4901607855511" className="text-primary text-decoration-none">
                                        +490160 7855511
                                    </a>
                                </p>
                                <PhoneCoverIcon 
                                    className="position-absolute phone-number-cover" 
                                    id="phone-number-cover" />
                                <p 
                                    className="position-absolute phone-number-cover-text fw-normal lh-base text-center cursor-pointer hover-secondary"
                                    id="phone-number-cover-text"
                                    onClick={removePhoneCover}
                                >
                                    Zeigen
                                </p>
                            </div>
                            <div className="position-relative images d-block d-lg-none">
                                <img className="position-absolute image-1" src={UserSecond} />
                                <img className="position-absolute image-2" src={UserFirst} />
                            </div>
                        </div>
                        <p className="text-primary fw-normal lh-lg" style={{ fontSize: 15 }}>
                            Wir unterstützen Sie beim Verkauf und zeigen Ihnen, wie Sie dabei am meisten profitieren.
                        </p>
                    </div>

                    <div className="position-relative lg-images d-none d-lg-block">
                        <img className="position-absolute lg-image-1" src={UserSecond} />
                        <img className="position-absolute lg-image-2" src={UserFirst} />
                    </div>
                </div>

                <a href="/landlord-v2" className="w-fit-content">
                    <p className="text-primary fw-bold text-decoration-underline cursor-pointer home-link">Mehr erfahren</p>
                </a>
            </div>

            <img src={FooterAlt} className="d-none d-md-block right-image" />
        </div>
    )
}

export default HomeFooter;