import { DekraSertificateIcon, DropdownIconDown, DropdownIconUp, ThreeDViewIcon, DiscountCircleIcon } from "../../utils/svg";

const HomeUsp = () => {

    const onClickUspItem = (index, show) => {
        if (show) {
            document.getElementById(`desc-${index}`).classList.remove("d-none", "d-md-block");

            document.getElementById(`icon-${index}-down`).classList.remove("d-block", "d-md-none");
            document.getElementById(`icon-${index}-down`).classList.add("d-none");

            document.getElementById(`icon-${index}-up`).classList.remove("d-none");
            document.getElementById(`icon-${index}-up`).classList.add("d-block", "d-md-none");
        } else {
            document.getElementById(`desc-${index}`).classList.add("d-none", "d-md-block");
            
            document.getElementById(`icon-${index}-up`).classList.remove("d-block", "d-md-none");
            document.getElementById(`icon-${index}-up`).classList.add("d-none");

            document.getElementById(`icon-${index}-down`).classList.remove("d-none");
            document.getElementById(`icon-${index}-down`).classList.add("d-block", "d-md-none");
        }
    }

    return (
        <div className="d-flex flex-column flex-md-row gap-8 gap-md-9 px-8 px-md-9 px-lg-15 px-xl-12 mx-auto home-usp">
            <div className="d-flex flex-column w-100 rounded px-8 px-md-9 px-xl-15 py-9 py-xl-15 gap-9 usp-item">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center item-mark">
                        <div className="p-3 rounded icon lh-base">
                            <DekraSertificateIcon />
                        </div>
                        <p className="text-primary fw-normal lh-lg mark-content-1">Persönliche Betreuung</p>
                    </div>

                    <DropdownIconUp onClick={() => { onClickUspItem(1, false) }} id="icon-1-up" className="d-block d-md-none cursor-pointer" style={{ marginTop: 12 }} />
                    <DropdownIconDown onClick={() => { onClickUspItem(1, true) }} id="icon-1-down" className="d-none cursor-pointer" style={{ marginTop: 12 }} />
                </div>

                <p className="text-primary fw-bold lh-base lh-md-sm title">
                    Ihr persönlicher Immobilienmakler vor Ort
                </p>

                <p className="text-light fw-normal lh-lg description" id="desc-1">
                    Ihr lokaler Immobilienmakler begleitet Sie zuverlässig und persönlich – von der Bewertung bis zum Notartermin!
                </p>
            </div>

            <div className="d-flex flex-column w-100 rounded px-8 px-md-9 px-xl-15 py-9 py-xl-15 gap-9 usp-item">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center item-mark">
                        <div className="p-3 rounded icon lh-base">
                            <DiscountCircleIcon />
                        </div>
                        <p className="text-primary fw-normal lh-lg mark-content-2">Maklerprovision war gestern</p>
                    </div>

                    <DropdownIconUp onClick={() => { onClickUspItem(2, false) }} id="icon-2-up" className="d-block d-md-none cursor-pointer" style={{ marginTop: 12 }} />
                    <DropdownIconDown onClick={() => { onClickUspItem(2, true) }} id="icon-2-down" className="d-none cursor-pointer" style={{ marginTop: 12 }} />
                </div>

                <p className="text-primary fw-bold lh-base lh-md-sm title">
                    Schluss mit teuren Maklerprovision
                </p>

                <p className="text-light fw-normal lh-lg description" id="desc-2">
                    Egal welche Immobilie – wir verkaufen zum festen Preis. Klar. Fair. Transparent. Fix statt ZUVIEL: Ihre Immobilie verdient Klarheit, keine Provision.
                </p>
            </div>

            <div className="d-flex flex-column w-100 rounded px-8 px-md-9 px-xl-15 py-9 py-xl-15 gap-9 usp-item">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center item-mark">
                        <div className="p-1 rounded icon lh-base">
                            <ThreeDViewIcon />
                        </div>
                        <p className="text-primary fw-normal lh-lg mark-content-3">3D-Rundgang</p>
                    </div>

                    <DropdownIconUp onClick={() => { onClickUspItem(3, false) }} id="icon-3-up" className="d-block d-md-none cursor-pointer" style={{ marginTop: 12 }} />
                    <DropdownIconDown onClick={() => { onClickUspItem(3, true) }} id="icon-3-down" className="d-none cursor-pointer" style={{ marginTop: 12 }} />
                </div>

                <p className="text-primary fw-bold lh-base lh-md-sm title">
                    Erleben Sie Ihr Zuhause online in jedem Detail.
                </p>

                <p className="text-light fw-normal lh-lg description" id="desc-3">
                    Sparen Sie Zeit und besichtigen Sie Ihr Traumhaus bequem per virtuellem 3D-Rundgang.
                </p>
            </div>
        </div>
    )
}

export default HomeUsp;
