import { useEffect, useState } from "@wordpress/element";
import { useAuthContext } from "../../context/AuthContext";

import PopupWrapper from "../PopupWrapper";
import iconCloseBtn from "../../assets/x_primary.svg";

import Button from "../Button";
import Message from "../Message";

const ShareModal = () => {
    const { loggedIn } = useAuthContext();
    const [showShareModal, setShowShareModal] = useState(false);
    useEffect(() => {
        window.renderShareModal = setShowShareModal;
    }, []);

    return (
        showShareModal && !loggedIn && (
            <PopupWrapper
                closeHandle={() => setShowShareModal(false)}
                closeIcon={iconCloseBtn}
                innerWrapperClass="rounded-1 px-5 px-sm-8 py-sm-15 px-md-10 py-md-10 login-modal"
            >
                <Message
                    headline="Buchung nicht möglich"
                    message="Um eine Besichtigung zu buchen, müssen Sie registriert sein und über ein vollständig ausgefülltes Finanzierungsprofil verfügen. Wenn Sie bereits registriert sind, melden Sie sich an"
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gridGap: "15px",
                        }}
                    >
                        <Button
                            className="border text-primary bg-white msg-button border-secondary"
                            style={{ marginTop: "30px" }}
                            onClick={() => {
                                window.location.href = "/dashboard/registrieren";
                            }}
                        >
                            Registrieren
                        </Button>
                        <Button
                            className="border text-primary bg-white msg-button"
                            style={{ marginTop: "30px" }}
                            onClick={() => {
                                window.location.href = "/dashboard/Login";
                            }}
                        >
                            Login
                        </Button>
                    </div>
                </Message>
            </PopupWrapper>
        )
    );
};
export default ShareModal;
