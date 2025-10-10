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
                        <p className="text-primary fw-normal lh-lg mark-content-1">Личная поддержка</p>
                    </div>

                    <DropdownIconUp onClick={() => { onClickUspItem(1, false) }} id="icon-1-up" className="d-block d-md-none cursor-pointer" style={{ marginTop: 12 }} />
                    <DropdownIconDown onClick={() => { onClickUspItem(1, true) }} id="icon-1-down" className="d-none cursor-pointer" style={{ marginTop: 12 }} />
                </div>

                <p className="text-primary fw-bold lh-base lh-md-sm title">
                    Персональный местный брокер
                </p>

                <p className="text-light fw-normal lh-lg description" id="desc-1">
                    Dein lokaler Makler begleitet dich von der Bewertung bis zur Unterzeichnung des Kaufvertrags beim Notar – zuverlässig und persönlich!
                </p>
            </div>

            <div className="d-flex flex-column w-100 rounded px-8 px-md-9 px-xl-15 py-9 py-xl-15 gap-9 usp-item">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center item-mark">
                        <div className="p-3 rounded icon lh-base">
                            <DiscountCircleIcon />
                        </div>
                        <p className="text-primary fw-normal lh-lg mark-content-2">Никаких скрытых платежей</p>
                    </div>

                    <DropdownIconUp onClick={() => { onClickUspItem(2, false) }} id="icon-2-up" className="d-block d-md-none cursor-pointer" style={{ marginTop: 12 }} />
                    <DropdownIconDown onClick={() => { onClickUspItem(2, true) }} id="icon-2-down" className="d-none cursor-pointer" style={{ marginTop: 12 }} />
                </div>

                <p className="text-primary fw-bold lh-base lh-md-sm title">
                    Переосмысление брокерской комиссии
                </p>

                <p className="text-light fw-normal lh-lg description" id="desc-2">
                    Egal welcher Objekttyp oder Verkaufspreis, die teure und steigende Maklerprovision ist bei homesellfie Geschichte. Bei uns bist Du davor sicher, versprochen.
                </p>
            </div>

            <div className="d-flex flex-column w-100 rounded px-8 px-md-9 px-xl-15 py-9 py-xl-15 gap-9 usp-item">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-4 pe-5 rounded bg-danger w-fit-content align-items-center item-mark">
                        <div className="p-1 rounded icon lh-base">
                            <ThreeDViewIcon />
                        </div>
                        <p className="text-primary fw-normal lh-lg mark-content-3">Тур 3D</p>
                    </div>

                    <DropdownIconUp onClick={() => { onClickUspItem(3, false) }} id="icon-3-up" className="d-block d-md-none cursor-pointer" style={{ marginTop: 12 }} />
                    <DropdownIconDown onClick={() => { onClickUspItem(3, true) }} id="icon-3-down" className="d-none cursor-pointer" style={{ marginTop: 12 }} />
                </div>

                <p className="text-primary fw-bold lh-base lh-md-sm title">
                    Возможность просмотра всего дома онлайн
                </p>

                <p className="text-light fw-normal lh-lg description" id="desc-3">
                    Вы можете сэкономить время и совершить 3D-виртуальный тур по дому своей мечты.
                </p>
            </div>
        </div>
    )
}

export default HomeUsp;
