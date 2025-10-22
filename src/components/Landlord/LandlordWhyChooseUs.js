import IntroBg from "../../assets/landlord/intro-bg.png";
import IntroFirst from "../../assets/landlord/intro-1.png";
import IntroSecond from "../../assets/landlord/intro-2.png";
import { AnalyticsBgPinkLargeIcon, AnalyticsBgPinkMediumIcon, AnalyticsIcon, ChartIcon, DekraSertificateBgPinkLargeIcon, DekraSertificateBgPinkMediumIcon, DiscountCircleBgPinkLargeIcon, DiscountCircleBgPinkMediumIcon, ThreeDViewIcon } from "../../utils/svg";

const LandlordWhyChooseUs = () => {
    return (
        <div className="ll-why-choose-us pt-0 pt-xl-10 mb-12">
            <div className="d-flex flex-column flex-md-row gap-10 gap-md-9 gap-xl-0 pt-9 pt-xl-12 px-8 px-md-9 px-lg-15 px-xl-12 mx-auto justify-content-between real-container">
                <div className="d-flex flex-column gap-15 left-container">
                    <div className="d-flex flex-column gap-5">
                        <p className="text-primary fw-semibold title">
                            Warum mit homeselfie verkaufen?
                        </p>
                        <p className="text-light fw-normal lh-lg d-none d-md-block" style={{ fontSize: 16 }}>
                            Ihre Vorteile im Überblick:
                        </p>
                        <p className="text-light fw-normal lh-lg d-block d-md-none" style={{ fontSize: 14 }}>
                            Ihre Vorteile im Überblick:
                        </p>
                    </div>

                    <div className="d-flex flex-column content">
                        <div className="d-flex gap-8 gap-md-9">
                            <DekraSertificateBgPinkLargeIcon className="icon d-none d-xl-block" />
                            <DekraSertificateBgPinkMediumIcon className="icon d-block d-xl-none" />
                            <div className="d-flex flex-column gap-4">
                                <p className="text-primary fw-bold lh-sm subtitle">
                                    Persönlicher, lokaler Ansprechpartner
                                </p>
                                <p className="text-light fw-normal lh-lg description">
                                    Von der Immobilienbewertung bis zur notariellen Unterschrift – Ihr regionaler Makler ist an Ihrer Seite.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex gap-8 gap-md-9">
                            <DiscountCircleBgPinkLargeIcon className="icon d-none d-xl-block" />
                            <DiscountCircleBgPinkMediumIcon className="icon d-block d-xl-none" />
                            <div className="d-flex flex-column gap-4">
                                <p className="text-primary fw-bold lh-sm subtitle">
                                    Schluss mit hohen prozentuale Maklergebühren
                                </p>
                                <p className="text-light fw-normal lh-lg description">
                                    Bei uns zahlen Sie einen festen Fixpreis – unabhängig vom Verkaufspreis. Das spart Ihnen tausende Euro.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex gap-8 gap-md-9">
                            <AnalyticsBgPinkLargeIcon className="icon d-none d-xl-block" />
                            <AnalyticsBgPinkMediumIcon className="icon d-block d-xl-none" />
                            <div className="d-flex flex-column gap-4">
                                <p className="text-primary fw-bold lh-sm subtitle">
                                    Maximale Reichweite durch Top-Plattformen
                                </p>
                                <p className="text-light fw-normal lh-lg description">
                                    Alle Statistiken Ihrer Inserate jederzeit in Ihrem persönlichen homesellfie-Konto.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 rounded-1 bg-secondary button">
                        <h4 className="fw-normal lh-base text-white text-center">Preise einsehen</h4>
                    </div>
                </div>

                <div className="d-flex flex-column gap-9 pt-5 pt-md-0 right-container">
                    <div className="d-flex flex-column flex-xl-row gap-9">
                        <div className="d-flex flex-column w-100 justify-content-between py-9 px-8 px-md-9 item item-1">
                            <div 
                                className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center"
                                style={{ height: 34 }}
                            >
                                <div className="p-1 rounded icon">
                                    <ThreeDViewIcon />
                                </div>
                                <p className="text-primary fw-normal lh-lg h3">Tour 3D</p>
                            </div>

                            <div className="d-flex flex-column gap-5 w-100">
                                <p className="text-primary fw-bold lh-sm" style={{ fontSize: 18 }}>
                                    Virtual 3D tours
                                </p>
                                <p className="text-light fw-normal lh-lg description">
                                    Virtual 3D tours of your home and high-quality images that make our presentation stand out from the competition.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex flex-column w-100 justify-content-between py-9 px-8 px-md-9 item item-2">
                            <div 
                                className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center"
                                style={{ height: 34 }}
                            >
                                <div className="p-3 rounded icon lh-base">
                                    <ChartIcon />
                                </div>
                                <p className="text-primary fw-normal lh-lg h3">Analytics</p>
                            </div>

                            <div className="d-flex flex-column gap-5 w-100">
                                <p className="text-primary fw-bold lh-sm" style={{ fontSize: 18 }}>
                                    Alle Analysen an einem Ort
                                </p>
                                <p className="text-light fw-normal lh-lg description">
                                    Durch deinen LogIn halten wir dich 24 / 7 durchgehend zu deinem Verkauf auf dem neuesten Stand.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 position-relative overflow-hidden item item-3">
                        <div className="position-absolute d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center logo">
                            <div className="p-3 rounded icon lh-base">
                                <AnalyticsIcon />
                            </div>
                            <p className="text-primary fw-normal lh-lg h3">Макркетинг</p>
                        </div>

                        <div className="position-absolute container-1" style={{ backgroundImage: `url(${IntroBg})` }}>
                            <img src={IntroFirst} className="image" />
                        </div>

                        <div className="position-absolute container-2" style={{ backgroundImage: `url(${IntroBg})` }}>
                            <img src={IntroSecond} className="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandlordWhyChooseUs;