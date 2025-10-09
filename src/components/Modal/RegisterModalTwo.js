const RegisterModalTwo = () => {
    return (
        <div className="modal" id="registerModalTwo">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="d-flex flex-column gap-15 bg-white rounded-1 px-sm-8 py-sm-15 px-md-10 py-md-10 login-modal">
                        <div className="d-flex flex-column gap-9">
                            <p className="fs-sm-2 fs-md-1 lh-sm-lg lh-md-sm fw-bold text-primary">Buchung nicht möglich</p>
                            <p className="fs-sm-4 fs-md-3 lh-lg fw-normal text-light">Um eine Besichtigung zu buchen, müssen Sie registriert sein und über ein vollständig ausgefülltes Finanzierungsprofil verfügen. Wenn Sie bereits registriert sind, melden Sie sich an</p>
                        </div>
                        <div className="d-flex gap-sm-5 gap-md-8">
                            <div className="w-100 rounded-1 py-sm-5 py-md-8 bg-secondary cursor-pointer fs-4 text-white fw-normal text-center">Registrieren</div>
                            <div className="w-100 rounded-1 py-sm-5 py-md-8 bg-white border cursor-pointer fs-4 text-primary fw-normal text-center">Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModalTwo;