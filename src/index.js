const { render } = wp.element; //use wp.element here!
import Terminbuchung from "./components/Terminbuchung";
import Kontaktformular from "./components/Kontaktformular/Kontaktformular";
import { AuthContextProvider } from "./context/AuthContext";
import { KontaktformularContextProvider } from "./context/KontaktformularContext";
import { TerminbuchungContextProvider } from "./context/TerminbuchungContext";
import "./components/App.css";
import "./components/main.css";
import "./components/style.css";
import "./components/Price/Price.css";
// import "./components/we-menu.css";
import { AngebotsformularContextProvider } from "./context/AngebotsformularContext";
import Angebotsformular from "./components/Angebotformular/Angebotsformular";
import JetzAnmelden from "./components/JetztAnmelden/JetztAnmelden";
import Objektunterlagen from "./components/Objektunterlagen/Objektunterlagen";
import { ObjektunterlagenContextProvider } from "./context/ObjektunterlagenContext";
import GeboteAnsehenMeldung from "./components/GeboteAnsehenMeldung/GeboteAnsehenMeldung";
import TOTAL from "./components/Total";
import { TotalContextProvider } from "./context/TotalContext";
import MobileBottomBar from "./components/MobileBottomBar";
import ShareModal from "./components/Modal/ShareModal";
import DocumentUnlockModal from "./components/Modal/DocumentUnlockModal";
import FullScreen3DTour from "./components/Modal/FullScreen3DTour";
import AngebotMobileModal from "./components/Modal/AngebotMobileModal";
import Price from "./components/Price/Price";
import KontaktiereUnsModal from "./components/Price/Modal/Kontaktiere-uns";

import "./components/Home/index.css";
import Home from "./components/Home";

if (document.getElementById("we-total")) {
	//check if element exists before rendering
	render(
		<AuthContextProvider>
			<TotalContextProvider>
				<TOTAL />
			</TotalContextProvider>
		</AuthContextProvider>,
		document.getElementById("we-total")
	);
}

if (document.getElementById("we-bottom-bar")) {
	render(
		<MobileBottomBar />,
		document.getElementById("we-bottom-bar")
	);
}

if (document.getElementById("we-terminbuchung")) {
	//check if element exists before rendering
	render(
		<AuthContextProvider>
			<TerminbuchungContextProvider>
				<Terminbuchung />
			</TerminbuchungContextProvider>
		</AuthContextProvider>,
		document.getElementById("we-terminbuchung")
	);
}

if (document.getElementById("we-kontaktformular")) {
	//check if element exists before rendering
	render(
		<AuthContextProvider>
			<KontaktformularContextProvider>
				<Kontaktformular />
			</KontaktformularContextProvider>
		</AuthContextProvider>,
		document.getElementById("we-kontaktformular")
	);
}

if (document.getElementById("we-angebotsformular")) {
	//check if element exists before rendering
	render(
		<AuthContextProvider>
			<AngebotsformularContextProvider>
				<Angebotsformular />
			</AngebotsformularContextProvider>
		</AuthContextProvider>,
		document.getElementById("we-angebotsformular")
	);
}

if (document.getElementById("we-objektunterlagen")) {
	//check if element exists before rendering
	render(
		<AuthContextProvider>
			<ObjektunterlagenContextProvider>
				<Objektunterlagen />
			</ObjektunterlagenContextProvider>
		</AuthContextProvider>,
		document.getElementById("we-objektunterlagen")
	);
}

if (document.getElementById("we-jetzt-anmelden")) {
	//check if element exists before rendering
	render(<JetzAnmelden />, document.getElementById("we-jetzt-anmelden"));
}

if (document.getElementById("we-gebote-meldung")) {
	//check if element exists before rendering
	render(
		<GeboteAnsehenMeldung />,
		document.getElementById("we-gebote-meldung")
	);
}

if (document.getElementById("we-share-modal")) {
	//check if element exists before rendering
	render(
		<AuthContextProvider>
			<ShareModal />
		</AuthContextProvider>,
		document.getElementById("we-share-modal")
	);
}

if (document.getElementById("we-document-modal")) {
	//check if element exists before rendering
	render(
		<AuthContextProvider>
			<DocumentUnlockModal />
		</AuthContextProvider>,
		document.getElementById("we-document-modal")
	);
}

if (document.getElementById("we-fullscreen-iframe")) {
	//check if element exists before rendering
	render(
		<TotalContextProvider>
			<FullScreen3DTour />
		</TotalContextProvider>,
		document.getElementById("we-fullscreen-iframe")
	);
}

if (document.getElementById("we-angebot-mobile-modal")) {
	//check if element exists before rendering
	render(
		<AngebotMobileModal />,
		document.getElementById("we-angebot-mobile-modal")
	);
}

if (document.getElementById("we-price")) {
	//check if element exists before rendering
	render(
		<Price />,
		document.getElementById("we-price")
	);
}

if (document.getElementById("we-kontaktiere-uns-modal")) {
	//check if element exists before rendering
	render(
		<KontaktiereUnsModal />,
		document.getElementById("we-kontaktiere-uns-modal")
	);
}

if (document.getElementById("we-home")) {
	render(
		<Home />,
		document.getElementById("we-home")
	);
}