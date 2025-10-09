import FooterAlt from "../../assets/home/footer-alt.jpg";
import UserFirst from "../../assets/home/user-1.png";
import UserSecond from "../../assets/home/user-2.png";
import { PhoneCoverIcon } from "../../utils/svg";

const HomeFooter = () => {
    return (
        <div className="d-flex px-8 px-md-9 px-lg-15 px-xl-12 mx-auto w-100 home-footer">
            <div className="d-flex flex-column gap-15 left-content">
                <p className="text-primary fw-semibold fw-md-bold title">
                    Хотите продать свою недвижимость? Тогда обратитесь за консультацией к нашим экспертам прямо сейчас.
                </p>

                <div className="d-flex gap-5 justify-content-between description">
                    <div className="d-flex flex-column gap-5 w-100 text">
                        <div className="d-flex justify-content-between">
                            <div className="position-relative w-fit-content">
                                <p className="text-primary fw-normal lh-lg pt-7 pb-7 pt-lg-1 pb-lg-0" style={{ fontSize: 16 }}>
                                    Tel: +490160 7855511
                                </p>
                                <PhoneCoverIcon className="position-absolute phone-number-cover" />
                                <p className="position-absolute phone-number-cover-text fw-normal lh-base text-center cursor-pointer hover-secondary">
                                    Zeigen
                                </p>
                            </div>
                            <div className="position-relative images d-block d-lg-none">
                                <img className="position-absolute image-1" src={UserSecond} />
                                <img className="position-absolute image-2" src={UserFirst} />
                            </div>
                        </div>
                        <p className="text-primary fw-normal lh-lg" style={{ fontSize: 15 }}>
                            Мы будем рады помочь вам с продажей и расскажем подробнее о вашей выгоде.
                        </p>
                    </div>

                    <div className="position-relative lg-images d-none d-lg-block">
                        <img className="position-absolute lg-image-1" src={UserSecond} />
                        <img className="position-absolute lg-image-2" src={UserFirst} />
                    </div>
                </div>

                <p className="text-primary fw-bold text-decoration-underline cursor-pointer home-link">Узнать подробнее</p>
            </div>

            <img src={FooterAlt} className="d-none d-md-block right-image" />
        </div>
    )
}

export default HomeFooter;