// import Phone from "../assets/images/svg/phone.svg";
import PhoneWhite from "../assets/images/svg/phone-white.svg"
import Calendar from "../assets/images/svg/calendar.svg";

const MobileBottomBar = () => {
    // const BottomSMPhoneMouseOver = () => {
    //     document.getElementById("bottom-sm-phone").src = PhoneWhite;
    // }

    // const BottomSMPhoneMouseLeave = () => {
    //     document.getElementById("bottom-sm-phone").src = Phone;
    // }

    return (
        <div className="d-sm-flex d-md-none p-5 w-100 flex-column bg-white rounded-top border border-bottom-bar" style={{ position: 'fixed', bottom: "0px", zIndex: 1000 }}>
			<div className="d-flex gap-5">
				<div className="gap-4 py-5 d-flex justify-content-center w-100 cursor-pointer bg-secondary rounded-1" onClick={() => { window.renderKontaktformular(true) }}>
					<img id="bottom-sm-phone" src={PhoneWhite} />
					<p className="text-white fw-normal fs-4">Kontaktiere uns</p>
				</div>
				<div className="rounded-1 gap-4 py-5 d-flex justify-content-center w-100 bg-secondary cursor-pointer" onClick={() => { window.renderTerminbuchung(true) }}>
					<img src={Calendar} />
					<p className="text-white fw-normal fs-4">Termin buchen</p>
				</div>
			</div>
		</div>
    );
};

export default MobileBottomBar;
