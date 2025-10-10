import HeaderBg from "../../assets/landlord/header-bg.png";
import { ClockCircleIcon, HomeIcon, LikeIcon, DiscountCirclePinkMediumIcon, WhitePhoneIcon } from "../../utils/svg";

const LandlordHeader = () => {
    return (
        <div className="mb-12 mx-0 d-flex flex-column position-relative ll-header">
            <img src={HeaderBg} className="header-image" />

            <div className="position-absolute d-flex flex-column gap-15 header-cover">
                <p className="text-white fw-bold fw-md-semibold lh-lg lh-md-1 text-center title">
                    Комплексная услуга по продаже вашей недвижимости без брокерской комиссии
                </p>

                <div className="d-flex gap-4 rounded-1 py-8 mx-auto align-items-center justify-content-center bg-secondary cursor-pointer button">
                    <WhitePhoneIcon />
                    <p className="fw-normal lh-base" style={{ fontSize: 16 }}>Связаться с нами</p>
                </div>
            </div>

            <div className="d-flex w-100 px-9 px-md-5 px-lg-15 px-xl-12 gap-9 gap-md-0 justify-content-between usp">

                <div className="d-flex py-8 py-lg-15 gap-8 w-fit-content">
                    <div className="item-icon rounded p-6">
                        <ClockCircleIcon />
                    </div>
                    <div className="d-flex flex-column w-fit-content">
                        <p className="text-primary fw-semibold lh-sm title">10 +</p>
                        <p className="text-light fw-normal lh-lg subtitle">лет на рынке</p>
                    </div>
                </div>

                <div className="item-divider"></div>

                <div className="d-flex py-8 py-lg-15 gap-8 w-fit-content">
                    <div className="item-icon rounded p-6">
                        <LikeIcon />
                    </div>
                    <div className="d-flex flex-column w-fit-content">
                        <p className="text-primary fw-semibold lh-sm title">1000 +</p>
                        <p className="text-light fw-normal lh-lg subtitle">Довольных клиентов</p>
                    </div>
                </div>

                <div className="item-divider"></div>

                <div className="d-flex py-8 py-lg-15 gap-8 w-fit-content">
                    <div className="item-icon rounded p-6">
                        <HomeIcon />
                    </div>
                    <div className="d-flex flex-column w-fit-content">
                        <p className="text-primary fw-semibold lh-sm title">700 +</p>
                        <p className="text-light fw-normal lh-lg subtitle">Проданных объектов</p>
                    </div>
                </div>

                <div className="item-divider"></div>

                <div className="d-flex py-8 py-lg-15 gap-8 w-fit-content">
                    <div className="item-icon rounded p-6">
                        <DiscountCirclePinkMediumIcon />
                    </div>
                    <div className="d-flex flex-column w-fit-content">
                        <p className="text-primary fw-semibold lh-sm title">0%</p>
                        <p className="text-light fw-normal lh-lg subtitle">Комиссии</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandlordHeader;