const ContactModalOne = () => {
    return (
        <div className="modal" id="contactModalOne">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="d-flex flex-column gap-15 bg-white rounded-1 px-sm-8 py-sm-15 px-md-10 py-md-10 contact-modal">
                        <div className="d-flex flex-column gap-9">
                            <p className="fs-sm-2 fs-md-1 lh-lg fw-bold text-primary">Eine Anfrage hinterlassen</p>
                            <p className="fs-sm-4 fs-md-3 lh-lg fw-normal text-light">Bitte hinterlassen Sie Ihre Daten und wir werden uns in Kürze mit Ihnen in Verbindung setzen</p>
                            <div className="d-flex flex-column gap-5">
                                <input type="text" className="fs-5 lh-1 w-100 rounded border p-sm-5 p-md-8 text-light" style={{ outline: 0 }} placeholder="Telefon" id="telephone" />
                                <input type="text" className="fs-5 lh-1 w-100 rounded border p-sm-5 p-md-8 text-light" style={{ outline: 0 }} placeholder="E-mail" id="email" />
                                <input type="text" className="fs-5 lh-1 w-100 rounded border p-sm-5 p-md-8 text-light" style={{ outline: 0 }} placeholder="Name" id="name" />
                                <div className="d-flex gap-5 w-100 align-items-center">
                                    <input type="checkbox" id="cfcb_first" style={{ width: "18px", height: "18px" }}/>
                                    <p className="fs-6 text-light">Ich möchte ein Konto angegen</p>
                                </div>
                                <div className="d-flex gap-5 w-100 align-items-center">
                                    <input type="checkbox" id="cfcb_second" style={{ width: "18px", height: "18px" }} />
                                    <p className="fs-6 text-light">Ich willige die Datenschutzerklärung ein</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 rounded-1 py-sm-5 py-md-8 bg-secondary cursor-pointer fs-4 text-white fw-normal text-center">Registrieren</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModalOne;