import { useEffect, useState } from "@wordpress/element";
import { HeartUnfillIcon, MapMarkerIcon, DiscountCirclePinkSmallIcon } from '../../utils/svg';

const AllRealEstate = () => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('/wp-json/reactplug/v1/estates?type=all')
            .then(res => res.json())
            .then(data => setEstates(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="d-flex flex-column px-8 px-md-9 px-lg-15 px-xl-12 mx-auto position-relative all-real-estate">
            <p className="text-primary mx-auto" style={{ fontSize: 40, lineHeight: 1, marginTop: 50, marginBottom: 50 }}>
                Alle Immobilien
            </p>
            
            <div className="d-grid gap-8 gap-xl-9 items">
                {estates.map((estate) => (
                    <a href={`/alle-immobilien/${estate?.id ?? ''}`}>
                        <div className="d-flex flex-column gap-0 rounded position-relative item">
                            <div className="position-absolute p-3 lh-base" style={{ width: 34, height: 34, top: 20, right: 20, borderRadius: "50%", backgroundColor: "#F5F5F5" }}>
                                <HeartUnfillIcon />
                            </div>
                            <img className="item-image" src={estate?.titelbild?.src ?? ''} alt={estate?.titelbild?.alt ?? ''} />

                            <div className="item-details d-flex flex-column gap-9 gap-md-15 p-8 p-md-9">
                                <div className="d-flex flex-column gap-5">
                                    <p className="text-primary fw-bold lh-lg house-name">{estate?.objektTyp ?? ''}</p>
                                    <div className="d-flex gap-4 align-items-center home-address">
                                        <MapMarkerIcon />
                                        <div>
                                            <p className="text-light fw-normal lh-base text">
                                                {estate?.adresse?.stadt ?? ''}{' '}
                                                {estate?.adresse?.plz ?? ''}{', '}
                                            </p>
                                            <p className="text-light fw-normal lh-base text">
                                                {estate?.adresse?.strasse ?? ''}{' '}
                                                {estate?.adresse?.nr ?? ''}{' '}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column gap-8 gap-md-2 gap-lg-8">
                                    <div className="d-flex gap-8 price-container">
                                        <p className="text-primary fw-semibold lh-base house-price">
                                            {Math.floor(Number(estate?.verkaufspreis ?? 0)).toLocaleString().replaceAll(',', '.')} €
                                        </p>
                                        <div className="d-flex gap-2" style={{ paddingTop: 3 }}>
                                            <DiscountCirclePinkSmallIcon className="price-info-icon" />
                                            <p className="text-secondary fw-normal lh-base home-price-info">Keine Kommission</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3 info-container">
                                        <p className="text-light fw-normal lh-lg lh-md-base info-text">{estate?.wohnflaeche ?? 0}m²</p>
                                        <div className="info-divider"></div>
                                        <p className="text-light fw-normal lh-lg lh-md-base info-text">{Math.floor(Number(estate?.zimmer ?? 0))} Zimmer</p>
                                        <div className="info-divider"></div>
                                        <p className="text-light fw-normal lh-lg lh-md-base info-text">{estate?.baujahr ?? '--'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default AllRealEstate;