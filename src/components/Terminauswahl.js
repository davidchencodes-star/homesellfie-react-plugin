import classes from "./Terminauswahl.module.css";
import { useEffect, useState, useRef } from "@wordpress/element";
import { useTerminbuchungContext } from "../context/TerminbuchungContext";
import { useAuthContext } from "../context/AuthContext";
import axios from "../config/axiosConfig";
import { Box, CircularProgress } from "@mui/material";
import Button from "./Button";
import PopupWrapper from "./PopupWrapper";

import icnArrowLeftPrimary from "../assets/arrow_left_primary.svg";
import icnArrowLeftDisabled from "../assets/arrow_left_disabled.svg";
import icnArrowRightPrimary from "../assets/arrow_right_primary.svg";
import icnArrowRightDisabled from "../assets/arrow_right_disabled.svg";

const wochentage = [
	"Sonntag",
	"Montag",
	"Dienstag",
	"Mittwoch",
	"Donnerstag",
	"Freitag",
	"Samstag",
];

const monate = [
	"Januar",
	"Februar",
	"März",
	"April",
	"Mai",
	"Juni",
	"Juli",
	"August",
	"September",
	"Oktober",
	"November",
	"Dezember",
];

const Terminauswahl = ({
	availableAppointments,
	selectedDayIndex,
	dayChanger,
	days,
}) => {
	const { loggedIn } = useAuthContext();
	const { setBookingError, setShowResponseMessage } = useTerminbuchungContext();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

	const handleTerminClick = (id) => {
		if (selectedAppointmentId === id) {
			setSelectedAppointmentId(null);
		} else if (selectedAppointmentId !== id) {
			setSelectedAppointmentId(id);
		}
	};

	const handleTerminBuchenClick = () => {
		if (loggedIn) {
			setIsLoading(true);
			axios(loggedIn.token)
				.put(`/users/${loggedIn.data.userId}/termine`, {
					appointmentId: selectedAppointmentId,
				})
				.then((res) => {
					console.log(res);
					if (res.response && res.response.status == 400) {
						setBookingError(res.response.data.errorCode);
					}
					setShowResponseMessage(true);
					setIsLoading(false);
				})
				.catch((e) => {
					//console.log(e);
					if (e.response) {
						console.log(e);
					}
				});
		}
	};

	const handleNextDayClick = () => {
		if (dayChanger.checkIfNextDayExists()) {
			dayChanger.nextDay();
		}
	};

	const handlePreviousDayClick = () => {
		if (dayChanger.checkIfPreviousDayExists()) {
			dayChanger.previousDay();
		}
	};

	useEffect(() => {
		// console.log("test");
		const tmp = availableAppointments
			.filter(
				({ date }) => date.getDate() == days[selectedDayIndex].getDate()
			)
		tmp.forEach((value, index) => {
			console.log(`${("0" + value.date.getHours()).slice(-2)}:${(
				"0" + value.date.getMinutes()
			).slice(-2)}`)
		})
	}, [selectedDayIndex]);

	return (
		<div className={classes.wrapper}>
			<div>
				<div className={classes.nav}>
					<button
						className={`${classes.nav__button} ${classes.nav__button_zurueck}`}
						onClick={handlePreviousDayClick}
					>
						<img
							src={
								dayChanger.checkIfPreviousDayExists()
									? icnArrowLeftPrimary
									: icnArrowLeftDisabled
							}
							alt="Arrow left icon"
						/>
					</button>
					<span>
						{`${wochentage[days[selectedDayIndex].getDay()]}, ${days[
							selectedDayIndex
						].getDate()}. ${monate[days[selectedDayIndex].getMonth()]}`}
					</span>
					<button
						className={`${classes.nav__button} ${classes.nav__button_weiter}`}
						onClick={handleNextDayClick}
					>
						<img
							src={
								dayChanger.checkIfNextDayExists()
									? icnArrowRightPrimary
									: icnArrowRightDisabled
							}
							alt="Arrow right icon"
						/>
					</button>
				</div>
				<div className={classes.termine}>
					{availableAppointments ? (
						availableAppointments
							.filter(
								// ({ date }) => date.getDay() == days[selectedDayIndex].getDay()
								({ date }) => date.getDate() == days[selectedDayIndex].getDate()
							)
							.map((value, index) => (
								<button
									onClick={() => handleTerminClick(value.id)}
									key={index}
									className={`${classes.btnTermin}${selectedAppointmentId === value.id
										? " " + classes["btnTermin--selected"]
										: ""
										}`}
								>{`${("0" + value.date.getHours()).slice(-2)}:${(
									"0" + value.date.getMinutes()
								).slice(-2)}`}</button>
							))
					) : (
						<span>Kein Datum ausgewählt</span>
					)}
				</div>
				<Box sx={{ position: "relative", width: "100%" }}>
					<Button
						style={
							isLoading
								? { padding: "10px 20px", opacity: ".3" }
								: { padding: "10px 20px" }
						}
						disabled={isLoading}
						type="button"
						onClick={handleTerminBuchenClick}
					>
						Termin jetzt buchen
					</Button>
					{isLoading && (
						<CircularProgress
							size={24}
							sx={{
								color: "var(--we-primary)",
								position: "absolute",
								top: "50%",
								left: "50%",
								marginTop: "-12px",
								marginLeft: "-12px",
							}}
						/>
					)}
				</Box>
			</div>
			<p className={classes.hinweis}>
				Nach der Terminbuchung erhältst du eine Bestätigungsemail mit allen
				Informationen.
			</p>
		</div>
	);
};
export default Terminauswahl;
