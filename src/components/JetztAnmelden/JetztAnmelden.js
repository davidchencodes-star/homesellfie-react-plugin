import { useEffect, useState } from "@wordpress/element";

import PopupWrapper from "../PopupWrapper";
import iconCloseBtn from "../../assets/x_primary.svg";

import Button from "../Button";
import Message from "../Message";

const JetzAnmelden = () => {
	const [showJetzAnmelden, setShowJetzAnmelden] = useState(false);
	useEffect(() => {
		window.renderJetztAnmelden = setShowJetzAnmelden;
	}, []);

	return (
		showJetzAnmelden && (
			<PopupWrapper
				closeHandle={() => setShowJetzAnmelden(false)}
				closeIcon={iconCloseBtn}
				innerWrapperStyle={{ maxWidth: "500px" }}
			>
				<Message
					headline="Info"
					message="Du musst dich zuerst anmelden, um die Adresse sehen zu können."
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
export default JetzAnmelden;
