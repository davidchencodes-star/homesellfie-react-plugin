import { useEffect, useState } from "@wordpress/element";
import { useAuthContext } from "../../context/AuthContext";

import PopupWrapper from "../PopupWrapper";
import iconCloseBtn from "../../assets/x_primary.svg";

import Button from "../Button";
import Message from "../Message";

import axios from "../../config/axiosConfig";

const DocumentUnlockModal = () => {
    const { loggedIn } = useAuthContext();
    const [showDocumentUnlockModal, setShowDocumentUnlockModal] = useState(false);
    const [documentID, setDocumentID] = useState(null);
    
    useEffect(() => {
        window.renderDocumentUnlockModal = setShowDocumentUnlockModal;
        window.renderDocumentID = setDocumentID;
    }, []);

    useEffect(() => {
        if (showDocumentUnlockModal && documentID && loggedIn) {
            axios(loggedIn.token)
                .get(`/inserate/${estateInfo.id}/files/${documentID}`)
                .then((res) => {
                    const linkSource = `data:application/pdf;base64,${res.data.elements.content}`;
                    const downloadLink = document.createElement("a");
                    const fileName = res.data.elements.originalname;

                    downloadLink.href = linkSource;
                    downloadLink.download = fileName;
                    downloadLink.click();
                })
                .catch((e) => {
                    if (e.response) {
                        console.log(e);
                    }
                });
        }
    },[showDocumentUnlockModal, documentID, loggedIn]);

    return (
        showDocumentUnlockModal && !loggedIn && (
            <PopupWrapper
                closeHandle={() => setShowDocumentUnlockModal(false)}
                closeIcon={iconCloseBtn}
                innerWrapperClass="rounded-1 px-5 px-sm-8 py-sm-15 px-md-10 py-md-10 login-modal"
            >
                <Message
                    headline="Die Gerätefunktion eignet sich hervorragend zum Registrieren von Geräten."
                    message="Registrieren Sie sich bitte, um vollen Zugriff auf die Funktionen der Website zu erhalten"
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gridGap: "15px",
                        }}
                    >
                        <Button
                            className="w-100 home_button"
                            style={{ marginTop: "30px" }}
                            onClick={() => {
                                window.location.href = "/dashboard/registrieren";
                            }}
                        >
                            Registrieren
                        </Button>
                        <Button
                            className="w-100 home_2nd_button"
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
export default DocumentUnlockModal;
