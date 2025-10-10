import MovieAlt from "../../assets/landlord/movie-alt.png";
import { AnalyticsBgPinkLargeIcon, AnalyticsBgPinkMediumIcon, DekraSertificateBgPinkLargeIcon, DekraSertificateBgPinkMediumIcon, DiscountCircleBgPinkLargeIcon, DiscountCircleBgPinkMediumIcon } from "../../utils/svg";

const LandlordWhyChooseUs = () => {
    return (
        <div className="ll-why-choose-us pt-0 pt-xl-10 mb-12">
            <div className="d-flex flex-column flex-md-row gap-10 gap-md-9 gap-xl-0 pt-9 pt-xl-12 px-8 px-md-9 px-lg-15 px-xl-12 mx-auto justify-content-between real-container">
                <div className="d-flex flex-column gap-15 left-container">
                    <div className="d-flex flex-column gap-5">
                        <p className="text-primary fw-semibold title">
                            Почему вам стоит продать свой дом с помощью Homeselfie?
                        </p>
                        <p className="text-light fw-normal lh-lg d-none d-md-block" style={{ fontSize: 16 }}>
                            Доверяя нам продажу своего дома, Вы получаете:
                        </p>
                        <p className="text-light fw-normal lh-lg d-block d-md-none" style={{ fontSize: 14 }}>
                            Доверяя нам продажу своего дома, Вы получаете:
                        </p>
                    </div>

                    <div className="d-flex flex-column content">
                        <div className="d-flex gap-8 gap-md-9">
                            <DekraSertificateBgPinkLargeIcon className="icon d-none d-xl-block" />
                            <DekraSertificateBgPinkMediumIcon className="icon d-block d-xl-none" />
                            <div className="d-flex flex-column gap-4">
                                <p className="text-primary fw-bold lh-sm subtitle">
                                    Персональный местный брокер
                                </p>
                                <p className="text-light fw-normal lh-lg description">
                                    Ваш местный агент по недвижимости будет сопровождать вас от оценки до подписания договора купли-продажи у нотариуса — надежно и лично.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex gap-8 gap-md-9">
                            <DiscountCircleBgPinkLargeIcon className="icon d-none d-xl-block" />
                            <DiscountCircleBgPinkMediumIcon className="icon d-block d-xl-none" />
                            <div className="d-flex flex-column gap-4">
                                <p className="text-primary fw-bold lh-sm subtitle">
                                    Переосмысление брокерской комиссии
                                </p>
                                <p className="text-light fw-normal lh-lg description">
                                    С нами вы платите фиксированную цену, независимо от цены продажи вашей недвижимости. Это экономит вам тысячи евро.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex gap-8 gap-md-9">
                            <AnalyticsBgPinkLargeIcon className="icon d-none d-xl-block" />
                            <AnalyticsBgPinkMediumIcon className="icon d-block d-xl-none" />
                            <div className="d-flex flex-column gap-4">
                                <p className="text-primary fw-bold lh-sm subtitle">
                                    Мы сотрудничаем с крупнейшими рекламными площадками
                                </p>
                                <p className="text-light fw-normal lh-lg description">
                                    У вас есть полный доступ к статистике всех объявлений в вашем аккаунте Homeselfie.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 rounded-1 bg-secondary button">
                        <h4 className="fw-normal lh-base text-white text-center">Узнать цены</h4>
                    </div>
                </div>

                <div className="d-flex flex-column gap-9 pt-5 pt-md-0 right-container">
                    {/* <div className="d-flex flex-column flex-xl-row gap-9">
                        <div className="d-flex flex-column w-100 justify-content-between py-9 px-8 px-md-9 item item-1">
                            <div className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center"
                                style="height: 34px;">
                                <div className="p-1 rounded icon">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.3727 9.45368C10.6143 9.32005 10.7019 9.01582 10.5683 8.77416C10.4346 8.53251 10.1304 8.44494 9.88876 8.57858L10.1307 9.01613L10.3727 9.45368ZM5.6974 11.4677L5.45543 11.0302C5.29622 11.1182 5.1974 11.2858 5.1974 11.4677H5.6974ZM19.6307 11.4677H20.1307C20.1307 11.2858 20.0319 11.1182 19.8727 11.0302L19.6307 11.4677ZM15.4394 8.57858C15.1977 8.44494 14.8935 8.53251 14.7598 8.77416C14.6262 9.01582 14.7138 9.32005 14.9554 9.45368L15.1974 9.01613L15.4394 8.57858ZM12.6641 21.8871L12.4463 22.3372C12.5838 22.4037 12.7443 22.4037 12.8818 22.3372L12.6641 21.8871ZM9.08184 19.5983C8.83327 19.478 8.53426 19.582 8.41398 19.8306C8.29371 20.0792 8.39771 20.3782 8.64628 20.4985L8.86406 20.0484L9.08184 19.5983ZM16.6818 20.4985C16.9304 20.3782 17.0344 20.0792 16.9141 19.8306C16.7939 19.582 16.4949 19.478 16.2463 19.5983L16.4641 20.0484L16.6818 20.4985ZM19.1307 16.371C19.1307 16.6471 19.3546 16.871 19.6307 16.871C19.9069 16.871 20.1307 16.6471 20.1307 16.371H19.6307H19.1307ZM5.1974 16.371C5.1974 16.6471 5.42125 16.871 5.6974 16.871C5.97354 16.871 6.1974 16.6471 6.1974 16.371H5.6974H5.1974ZM12.1641 9.01613C12.1641 9.29227 12.3879 9.51613 12.6641 9.51613C12.9402 9.51613 13.1641 9.29227 13.1641 9.01613H12.6641H12.1641ZM12.6641 3.5L13.0118 3.1407C12.8179 2.9531 12.5102 2.9531 12.3164 3.1407L12.6641 3.5ZM9.78302 5.59231C9.58458 5.78435 9.57939 6.10089 9.77143 6.29932C9.96346 6.49776 10.28 6.50295 10.4784 6.31091L10.1307 5.95161L9.78302 5.59231ZM14.8497 6.31091C15.0481 6.50295 15.3647 6.49776 15.5567 6.29932C15.7487 6.10089 15.7435 5.78435 15.5451 5.59231L15.1974 5.95161L14.8497 6.31091ZM7.94511 18.569C8.14354 18.3769 8.14873 18.0604 7.9567 17.862C7.76466 17.6635 7.44812 17.6583 7.24969 17.8504L7.5974 18.2097L7.94511 18.569ZM3.16406 22.5H2.66406C2.66406 22.7761 2.88792 23 3.16406 23V22.5ZM3.66406 19.4355C3.66406 19.1593 3.4402 18.9355 3.16406 18.9355C2.88792 18.9355 2.66406 19.1593 2.66406 19.4355H3.16406H3.66406ZM6.33073 23C6.60687 23 6.83073 22.7761 6.83073 22.5C6.83073 22.2239 6.60687 22 6.33073 22V22.5V23ZM18.0784 17.8504C17.88 17.6583 17.5635 17.6635 17.3714 17.862C17.1794 18.0604 17.1846 18.3769 17.383 18.569L17.7307 18.2097L18.0784 17.8504ZM22.1641 22.5V23C22.4402 23 22.6641 22.7761 22.6641 22.5H22.1641ZM18.9974 22C18.7213 22 18.4974 22.2239 18.4974 22.5C18.4974 22.7761 18.7213 23 18.9974 23V22.5V22ZM22.6641 19.4355C22.6641 19.1593 22.4402 18.9355 22.1641 18.9355C21.8879 18.9355 21.6641 19.1593 21.6641 19.4355H22.1641H22.6641ZM10.1307 9.01613L9.88876 8.57858L5.45543 11.0302L5.6974 11.4677L5.93936 11.9053L10.3727 9.45368L10.1307 9.01613ZM5.6974 11.4677L5.49607 11.9254L12.4627 14.9899L12.6641 14.5323L12.8654 14.0746L5.89872 11.0101L5.6974 11.4677ZM12.6641 14.5323L12.8654 14.9899L19.8321 11.9254L19.6307 11.4677L19.4294 11.0101L12.4627 14.0746L12.6641 14.5323ZM19.6307 11.4677L19.8727 11.0302L15.4394 8.57858L15.1974 9.01613L14.9554 9.45368L19.3888 11.9053L19.6307 11.4677ZM12.6641 14.5323H12.1641V21.8871H12.6641H13.1641V14.5323H12.6641ZM12.6641 21.8871L12.8818 21.437L9.08184 19.5983L8.86406 20.0484L8.64628 20.4985L12.4463 22.3372L12.6641 21.8871ZM12.6641 21.8871L12.8818 22.3372L16.6818 20.4985L16.4641 20.0484L16.2463 19.5983L12.4463 21.437L12.6641 21.8871ZM19.6307 11.4677H19.1307V16.371H19.6307H20.1307V11.4677H19.6307ZM5.6974 11.4677H5.1974V16.371H5.6974H6.1974V11.4677H5.6974ZM12.6641 9.01613H13.1641V3.5H12.6641H12.1641V9.01613H12.6641ZM12.6641 3.5L12.3164 3.1407L9.78302 5.59231L10.1307 5.95161L10.4784 6.31091L13.0118 3.8593L12.6641 3.5ZM12.6641 3.5L12.3164 3.8593L14.8497 6.31091L15.1974 5.95161L15.5451 5.59231L13.0118 3.1407L12.6641 3.5ZM7.5974 18.2097L7.24969 17.8504L2.81635 22.1407L3.16406 22.5L3.51177 22.8593L7.94511 18.569L7.5974 18.2097ZM3.16406 22.5H3.66406V19.4355H3.16406H2.66406V22.5H3.16406ZM3.16406 22.5V23H6.33073V22.5V22H3.16406V22.5ZM17.7307 18.2097L17.383 18.569L21.8164 22.8593L22.1641 22.5L22.5118 22.1407L18.0784 17.8504L17.7307 18.2097ZM22.1641 22.5V22H18.9974V22.5V23H22.1641V22.5ZM22.1641 22.5H22.6641V19.4355H22.1641H21.6641V22.5H22.1641Z"
                                            fill="#19202E" />
                                    </svg>
                                </div>
                                <h3 className="text-primary fw-normal lh-lg">Tour 3D</h3>
                            </div>

                            <div className="d-flex flex-column gap-5 w-100">
                                <h2 className="text-primary fw-bold lh-sm">Virtual 3D tours</h2>
                                <p className="text-light fw-normal lh-lg description">Virtual 3D tours of your home and
                                    high-quality images that make our presentation stand out from the competition.</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column w-100 justify-content-between py-9 px-8 px-md-9 item item-2">
                            <div className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center"
                                style="height: 34px;">
                                <div className="p-3 rounded icon">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.16797 18.332H18.8346" stroke="#292D32" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M8.625 3.33464V18.3346H12.375V3.33464C12.375 2.41797 12 1.66797 10.875 1.66797H10.125C9 1.66797 8.625 2.41797 8.625 3.33464Z"
                                            stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M3 8.33464V18.3346H6.33333V8.33464C6.33333 7.41797 6 6.66797 5 6.66797H4.33333C3.33333 6.66797 3 7.41797 3 8.33464Z"
                                            stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M14.668 12.4987V18.332H18.0013V12.4987C18.0013 11.582 17.668 10.832 16.668 10.832H16.0013C15.0013 10.832 14.668 11.582 14.668 12.4987Z"
                                            stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-primary fw-normal lh-lg">Analytics</h3>
                            </div>

                            <div className="d-flex flex-column gap-5 w-100">
                                <h2 className="text-primary fw-bold lh-sm">Alle Analysen an einem Ort</h2>
                                <p className="text-light fw-normal lh-lg description">Durch deinen LogIn halten wir dich 24 / 7
                                    durchgehend zu deinem Verkauf auf dem neuesten Stand.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 position-relative overflow-hidden item item-3">

                        <div
                            className="position-absolute d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center logo">
                            <div className="p-3 rounded icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.66406 1.66406V15.8307C1.66406 17.2141 2.78073 18.3307 4.16406 18.3307H18.3307"
                                        stroke="#19202E" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M4.16406 14.1693L7.98906 9.70262C8.6224 8.96928 9.7474 8.91927 10.4307 9.61094L11.2224 10.4026C11.9057 11.0859 13.0307 11.0443 13.6641 10.3109L17.4974 5.83594"
                                        stroke="#19202E" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-primary fw-normal lh-lg">Макркетинг</h3>
                        </div>

                        <div className="position-absolute container-1"
                            style="background-image: url('./85a8d4cb5dd8334894f69f8c4156fea900e1fc9a.png');">
                            <img src="./321c39e009e6e92f972c7565fd2765cd3a8da656.png" className="image" />
                        </div>

                        <div className="position-absolute container-2"
                            style="background-image: url('./85a8d4cb5dd8334894f69f8c4156fea900e1fc9a.png');">
                            <img src="./b35ac5a38afef5e148dce7a5ee21358ff712de31.png" className="image" />
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default LandlordWhyChooseUs;