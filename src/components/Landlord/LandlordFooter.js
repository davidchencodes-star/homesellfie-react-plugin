import FooterAlt from "../../assets/common/footer-alt.jpg";
import UserFirst from "../../assets/common/user-1.png";
import UserSecond from "../../assets/common/user-2.png";
import { PhoneCoverIcon, WhitePhoneIcon } from "../../utils/svg";

const LandlordFooter = () => {
    const removePhoneCover = () => {
        document.getElementById("phone-number-cover").classList.add("d-none");
        document.getElementById("phone-number-cover-text").classList.add("d-none");
    }

    return (
        <div className="d-flex px-8 px-md-9 px-lg-15 px-xl-12 pt-0 pt-xl-10 mx-auto w-100 ll-footer">
            <div className="d-flex flex-column gap-10 left-content">
                <div className="d-flex flex-column gap-15">
                    <p className="text-primary fw-semibold fw-md-bold title">
                        Хотите продать свою недвижимость? Тогда обратитесь за консультацией к нашим экспертам прямо сейчас.
                    </p>

                    <div className="d-flex gap-5 justify-content-between description">
                        <div className="d-flex flex-column gap-5 w-100 text">
                            <div className="d-flex justify-content-between">
                                <div className="position-relative w-fit-content">
                                    <h3 className="text-primary fw-normal lh-lg pt-7 pb-7 pt-lg-1 pb-lg-0">
                                        Tel:{" "}
                                        <a href="tel:+4901607855511" className="text-primary text-decoration-none">
                                            +490160 7855511
                                        </a>
                                    </h3>
                                    <PhoneCoverIcon 
                                        className="position-absolute phone-number-cover" 
                                        id="phone-number-cover"
                                    />
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
                            <h4 className="text-primary fw-normal lh-lg">
                                Мы будем рады помочь вам с продажей и расскажем подробнее о вашей выгоде.
                            </h4>
                        </div>

                        <div className="position-relative lg-images d-none d-lg-block">
                            <img className="position-absolute lg-image-1" src={UserSecond} />
                            <img className="position-absolute lg-image-2" src={UserFirst} />
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-9">
                    <div 
                        className="d-flex gap-4 py-8 button rounded-1 cursor-pointer button-left justify-content-center text-center d-none d-md-block"
                        onClick={() => { window.renderKontaktformular(true) }}
                    >
                        <h4 className="text-primary fw-normal lh-base">Оставить заявку</h4>
                    </div>
                    <div 
                        className="d-flex gap-4 py-8 button rounded-1 cursor-pointer bg-secondary justify-content-center"
                        onClick={() => { window.renderKontaktformular(true) }}
                    >
                        <WhitePhoneIcon />
                        <h4 className="text-white fw-normal lh-base d-none d-md-block">
                            Kontaktiere uns
                        </h4>
                        <h3 className="text-white fw-normal lh-base d-block d-md-none">
                            Kontaktiere uns
                        </h3>
                    </div>
                </div>

            </div>


            <img src={FooterAlt} className="d-none d-md-block right-image" />
        </div>
    )
}

export default LandlordFooter;