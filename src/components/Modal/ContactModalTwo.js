import User1 from "../../assets/images/png/user-1-update.png";
import User2 from "../../assets/images/png/user-2-update.png";
import PhoneWhite from "../../assets/images/svg/phone-white.svg";

const ContactModalTwo = () => {
    const phoneNumberClick = (e) => {
        gtag(
            "event", "phone-number", {
                phone_number: "016 078 55511"
            }
        )
    }

    return (
        <div className="d-flex flex-column gap-sm-9 gap-md-10 bg-white rounded-1 px-sm-8 py-sm-15 px-md-10 py-md-10 contact-second-modal">
            <div className="d-flex flex-column gap-sm-9 gap-md-15">
                <p className="fs-sm-2 fs-md-1 lh-sm-lg lh-md-sm fw-bold text-primary">Haben Sie das gesuchte Angebot nicht gefunden? Rufen Sie uns an und wir finden die passende Option für Sie</p>
                <div className="position-relative w-100 contact-form-info ps-sm-5 ps-md-8">
                    <p className="position-absolute fs-5 text-primary" style={{ top: "15px" }}>Wenden Sie sich an unser Team</p>
                    <p className="position-absolute fs-sm-5 fs-md-3 lh-sm-base lh-md-lg text-primary" style={{ top: "40px"}} onClick={phoneNumberClick}>Tel: 016 078 55511</p>
                    <img className="position-absolute contact-form-user-2" width="50px" src={User2} />
                    <img className="position-absolute contact-form-user-1" width="50px" src={User1} />
                </div>
            </div>
            <div className="w-100 rounded-1 py-sm-5 py-md-8 bg-secondary cursor-pointer fs-4 text-white fw-normal text-center d-flex gap-4 justify-content-center align-items-center">
                <img src={PhoneWhite} />
                <p>Kontaktiere uns</p>
            </div>
        </div>
    );
};

export default ContactModalTwo;