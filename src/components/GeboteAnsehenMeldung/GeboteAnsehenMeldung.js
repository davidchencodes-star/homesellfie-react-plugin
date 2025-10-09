import { useEffect, useState } from "@wordpress/element";

import PopupWrapper from "../PopupWrapper";
import iconCloseBtn from "../../assets/x_primary.svg";

import Button from "../Button";
import Message from "../Message";

const GeboteAnsehenMeldung = () => {
	const [showGeboteMeldung, setShowGeboteMeldung] = useState(false);
	useEffect(() => {
		window.renderGeboteMeldung = setShowGeboteMeldung;
	}, []);

	return (
		showGeboteMeldung && (
			<PopupWrapper
				closeHandle={() => setShowGeboteMeldung(false)}
				closeIcon={iconCloseBtn}
				innerWrapperStyle={{ maxWidth: "500px" }}
			>
				<Message
					headline="Info"
					message="Du musst dich zuerst anmelden, um die Anzahl an Geboten und das Maximalgebot sehen zu können."
				>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(2, 1fr)",
							gridGap: "15px",
						}}
					>
						<Button
							style={{ marginTop: "15px" }}
							background="dark"
							onClick={() => {
								window.location.href = "/dashboard/registrieren";
							}}
						>
							Registrieren
						</Button>
						<Button
							style={{ marginTop: "15px" }}
							onClick={() => {
								window.location.href = "/dashboard/Login";
							}}
						>
							Anmelden
						</Button>
					</div>
				</Message>
			</PopupWrapper>
		)
	);
};
export default GeboteAnsehenMeldung;
