import HeaderBg from "../../assets/landlord/header-bg.png";
import { ClockCircleIcon, HomeIcon, LikeIcon, DiscountCirclePinkMediumIcon, WhitePhoneIcon, ClickTapIcon, HandStarsIcon, TagIcon } from "../../utils/svg";

const LandlordHeader = () => {
    return (
        <div className="mb-12 mx-0 d-flex flex-column position-relative ll-header">
            <img src={HeaderBg} className="header-image" />

            <div className="position-absolute d-flex flex-column gap-15 header-cover">
                <p className="text-white fw-bold fw-md-semibold lh-lg lh-md-1 text-center title">
                    Ihr Immobilienverkauf zum besten Preis
                </p>

                <div 
                    className="d-flex gap-4 rounded-1 py-8 mx-auto align-items-center justify-content-center bg-secondary cursor-pointer button"
                    onClick={() => { window.renderKontaktformular(true) }}
                >
                    <WhitePhoneIcon />
                    <p className="fw-normal lh-base" style={{ fontSize: 16 }}>Kontakt aufnehmen</p>
                </div>
            </div>

            <div className="d-flex w-100 usp">

                <div className="d-flex w-100 px-9 px-md-5 px-lg-15 px-xl-12 gap-9 gap-md-0 mx-auto justify-content-between" style={{ maxWidth: 1440 }}>
                    <div className="d-flex py-8 py-lg-15 gap-8 gap-md-5 gap-8 w-fit-content">
                        <div className="item-icon rounded p-6">
                            <ClockCircleIcon />
                        </div>
                        <div className="d-flex flex-column w-fit-content">
                            <p className="text-primary fw-semibold lh-sm title">Die erste Wahl</p>
                            <p className="text-light fw-normal lh-lg subtitle">Die erste Wahl bei Eigentümern</p>
                        </div>
                    </div>

                    <div className="item-divider"></div>

                    <div className="d-flex py-8 py-lg-15 gap-8 gap-md-5 gap-8 w-fit-content">
                        <div className="item-icon rounded p-6">
                            <ClickTapIcon />
                        </div>
                        <div className="d-flex flex-column w-fit-content">
                            <p className="text-primary fw-semibold lh-sm title">Die Kontrolle</p>
                            <p className="text-light fw-normal lh-lg subtitle">Sie behalten die volle Kontrolle</p>
                        </div>
                    </div>

                    <div className="item-divider"></div>

                    <div className="d-flex py-8 py-lg-15 gap-8 gap-md-5 gap-8 w-fit-content">
                        <div className="item-icon rounded p-6">
                            <HandStarsIcon />
                        </div>
                        <div className="d-flex flex-column w-fit-content">
                            <p className="text-primary fw-semibold lh-sm title">Ehrlichkeit</p>
                            <p className="text-light fw-normal lh-lg subtitle">Sie können jederzeit zurücktreten</p>
                        </div>
                    </div>

                    <div className="item-divider"></div>

                    <div className="d-flex py-8 py-lg-15 gap-8 gap-md-5 gap-8 w-fit-content me-9 me-md-0">
                        <div className="item-icon rounded p-6">
                            <TagIcon />
                        </div>
                        <div className="d-flex flex-column w-fit-content">
                            <p className="text-primary fw-semibold lh-sm title">Fixpreis</p>
                            <p className="text-light fw-normal lh-lg subtitle">Sie erhalten alles zum Fixpreis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandlordHeader;