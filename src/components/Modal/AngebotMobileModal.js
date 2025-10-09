import { useEffect, useState } from "@wordpress/element";

import PopupWrapper from "../PopupWrapper";
import iconCloseBtn from "../../assets/x_black.svg";

const AngebotMobileModal = () => {
    const [showAngebotMobileModal, setShowAngebotMobileModal] = useState(false);
    useEffect(() => {
        window.renderAngebotMobileModal = setShowAngebotMobileModal;
    }, []);

    return (
        showAngebotMobileModal ? (
            <PopupWrapper
                closeHandle={() => setShowAngebotMobileModal(false)}
                closeIcon={iconCloseBtn}
                innerWrapperClass="rounded-1 px-5 px-sm-8 py-sm-15 px-md-10 py-md-10 login-modal"
            >
                <p className="fs-4 lh-lg fw-normal text-light">
                    Nach der Besichtigung können Sie Ihr Gebot abgeben und andere Gebote einsehen. Registrieren Sie sich, um diesen Service zu nutzen.
                </p>
            </PopupWrapper>
        ) : <></>
    );
};
export default AngebotMobileModal;
