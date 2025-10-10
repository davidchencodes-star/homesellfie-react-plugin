import HouseAlt from '../../assets/home/house-alt.jpg';
import { HeartUnfillIcon, MapMarkerIcon, DiscountCirclePinkSmallIcon } from '../../utils/svg';

const HomeContent = () => {
    const houses = [
        { name: "Einfamilienhaus", address: "Bad Doberan 18209, Am Hasenberg 3", price: "420.000 €", square: "145,09m²", zimmer: "5 Zimmer", year: "1979" },
        { name: "Einfamilienhaus", address: "Bad Doberan 18209, Am Hasenberg 3", price: "420.000 €", square: "145,09m²", zimmer: "5 Zimmer", year: "1979" },
        { name: "Einfamilienhaus", address: "Bad Doberan 18209, Am Hasenberg 3", price: "420.000 €", square: "145,09m²", zimmer: "5 Zimmer", year: "1979" },
        { name: "Einfamilienhaus", address: "Bad Doberan 18209, Am Hasenberg 3", price: "420.000 €", square: "145,09m²", zimmer: "5 Zimmer", year: "1979" },
        { name: "Einfamilienhaus", address: "Bad Doberan 18209, Am Hasenberg 3", price: "420.000 €", square: "145,09m²", zimmer: "5 Zimmer", year: "1979" },
        { name: "Einfamilienhaus", address: "Bad Doberan 18209, Am Hasenberg 3", price: "420.000 €", square: "145,09m²", zimmer: "5 Zimmer", year: "1979" },
        { name: "Einfamilienhaus", address: "Bad Doberan 18209, Am Hasenberg 3", price: "420.000 €", square: "145,09m²", zimmer: "5 Zimmer", year: "1979" },
        { name: "Einfamilienhaus", address: "Bad Doberan 18209, Am Hasenberg 3", price: "420.000 €", square: "145,09m²", zimmer: "5 Zimmer", year: "1979" },
    ];

    const defaultClassName = "d-flex flex-column gap-0 rounded position-relative item";
    const mdClassName = "d-none d-md-flex flex-column gap-0 rounded position-relative item";
    const xlClassName = "d-none d-xl-flex flex-column gap-0 rounded position-relative item";

    return (
        <div className="d-flex flex-column px-8 px-md-9 px-lg-15 px-xl-12 mx-auto position-relative home-content">
            <div className="position-absolute bg-title"></div>
            <p className="text-primary fw-semibold fw-md-bold w-fit-content mx-md-auto title">Новые объекты недвижимости</p>

            <div className="d-flex d-md-grid gap-8 gap-xl-9 items">
                {houses.map((house, index) => (
                    <div className={ index < 4 ? defaultClassName : (index < 6 ? mdClassName : xlClassName) }>
                        <div className="position-absolute p-3 lh-base" style={{ width: 34, height: 34, top: 20, right: 20, borderRadius: "50%", backgroundColor: "#F5F5F5" }}>
                            <HeartUnfillIcon />
                        </div>
                        <img className="item-image" src={HouseAlt} />

                        <div className="item-details d-flex flex-column gap-9 gap-md-15 p-8 p-md-9">
                            <div className="d-flex flex-column gap-5">
                                <p className="text-primary fw-bold lh-lg house-name">{house.name}</p>
                                <div className="d-flex gap-4 home-address">
                                    <MapMarkerIcon />
                                    <p className="text-light fw-normal lh-base text">{house.address}</p>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-8 gap-md-2 gap-lg-8">
                                <div className="d-flex gap-8 price-container">
                                    <p className="text-primary fw-semibold lh-base house-price">{house.price}</p>
                                    <div className="d-flex gap-2" style={{ paddingTop: 3 }}>
                                        <DiscountCirclePinkSmallIcon className="price-info-icon" />
                                        <p className="text-secondary fw-normal lh-base home-price-info">Keine Kommission</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-3 info-container">
                                    <p className="text-light fw-normal lh-lg lh-md-base info-text">{house.square}</p>
                                    <div className="info-divider"></div>
                                    <p className="text-light fw-normal lh-lg lh-md-base info-text">{house.zimmer}</p>
                                    <div className="info-divider"></div>
                                    <p className="text-light fw-normal lh-lg lh-md-base info-text">{house.year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a 
                className="button bg-secondary py-8 mx-auto rounded-1 text-center text-white fw-normal lh-base text-decoration-none" 
                style={{ fontSize: 16 }}
                href="/alle-immobilien"
            >
                Смотреть все
            </a>
        </div>
    )
}

export default HomeContent;