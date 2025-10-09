import { useEffect, useState } from "@wordpress/element";

import PopupWrapper from "../../PopupWrapper";
import iconCloseBtn from "../../../assets/x_black.svg";
import User1 from "../../../assets/images/png/user-1-update.png";
import User2 from "../../../assets/images/png/user-2-update.png";
import Phone from "../../../assets/images/svg/phone.svg";
import PhoneWhite from "../../../assets/images/svg/phone-white.svg";
import Cover from "../../../assets/images/svg/cover.svg";

const KontaktiereUnsModal = () => {
    const [showKontaktiereUnsModal, setShowKontaktiereUnsModal] = useState(false);
    
    useEffect(() => {
        window.renderKontaktiereUnsModal = setShowKontaktiereUnsModal;
    }, []);

    const handleMouseOver = () => {
        if (document.getElementById("kontaktiere-uns-phone")) {
            document.getElementById("kontaktiere-uns-phone").src = PhoneWhite;
        }
    }

    const handleMouseLeave = () => {
        if (document.getElementById("kontaktiere-uns-phone")) {
            document.getElementById("kontaktiere-uns-phone").src = Phone;
        }
    }

    const phoneNumberClick = () => {
        gtag(
            "event", "phone-number", {
                phone_number: "016 078 55511"
            }
        )
    }

    const removePhoneCover = () => {
        document.getElementById("modal-phone-cover-img").style.display = "none";
        document.getElementById("modal-phone-cover-text").style.display = "none";
    }

    return (
        showKontaktiereUnsModal ? (
            <PopupWrapper
                closeHandle={() => setShowKontaktiereUnsModal(false)}
                closeIcon={iconCloseBtn}
                innerWrapperClass="d-flex flex-column gap-9 gap-md-15 rounded-1 px-9 px-md-10 py-10 kontaktiere-uns-modal"
            >
                <p className="fs-2 fs-md-1 text-primary fw-bold lh-sm">
                    Haben Sie das gesuchte Angebot nicht gefunden? Rufen Sie uns an und wir finden die passende Option für Sie
                </p>
                <div className="d-flex flex-column gap-5 p-5 p-md-8 rounded-1 bg-f5 position-relative">
                    <p className="fs-6 fs-sm-5 fs-md-4 text-primary lh-base">Wenden Sie sich an unser Team</p>
                    <div className="w-fit-content position-relative">
                        <p className="fs-4 fs-md-3 text-primary lh-base cursor-pointer" onClick={phoneNumberClick}>Tel: 016 078 55511</p>
                        <img id="modal-phone-cover-img" src={Cover} style={{ position: 'absolute', right: '0px', top: '0px', height: '22px' }} />
                        <p id="modal-phone-cover-text" onClick={removePhoneCover} className="fs-6 fs-md-5 text-light cursor-pointer text-center hover-secondary" style={{ position: 'absolute', width: '90px', right: '0px', top: '-1px' }}>Zeigen</p>
                    </div>
                    <img className="position-absolute kontaktiere-uns-user-2" src={User2} />
                    <img className="position-absolute kontaktiere-uns-user-1" src={User1} />
                </div>
                <div className="d-flex gap-5 align-items-center justify-content-center kontaktiere-uns-button py-5 py-md-8 cursor-pointer" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <img className="d-none d-md-flex" id="kontaktiere-uns-phone" src={Phone} />
                    <img className="d-flex d-md-none" src={PhoneWhite} />
                    <p className="fs-4">Kontaktiere uns</p>
                </div>
            </PopupWrapper>
        ) : <></>
    );
};
export default KontaktiereUnsModal;