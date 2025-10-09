const RegisterModalOne = () => {
    return (
        <div className="modal" id="registerModalOne">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="d-flex flex-column gap-15 bg-white rounded-1 px-5 py-9 px-sm-8 py-md-15 px-md-10 py-md-10 login-modal">
                        <div className="d-flex flex-column gap-9">
                            <p className="fs-2 fs-md-1 lh-lg lh-md-sm fw-bold text-primary">Die Gerätefunktion eignet sich hervorragend zum Registrieren von Geräten.</p>
                            <p className="fs-4 fs-md-3 lh-lg fw-normal text-light">Registrieren Sie sich bitte, um vollen Zugriff auf die Funktionen der Website zu erhalten</p>
                        </div>
                        <div className="d-flex gap-5 gap-md-8">
                            <div className="w-100 rounded-1 py-5 py-md-8 bg-secondary cursor-pointer fs-4 text-white fw-normal text-center">Registrieren</div>
                            <div className="w-100 rounded-1 py-5 py-md-8 bg-white border cursor-pointer fs-4 text-primary fw-normal text-center">Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModalOne;