import classes from "./Terminbuchung.module.css";
import { useEffect, useState } from "@wordpress/element";
import { useTerminbuchungContext } from "../context/TerminbuchungContext";
import { useAuthContext } from "../context/AuthContext";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./DayPicker.css";
import de from "date-fns/locale/de";
import img from "../assets/_DSC7665.jpg";

import PopupWrapper from "./PopupWrapper";
import Terminauswahl from "./Terminauswahl";
import iconCloseBtn from "../assets/x_primary.svg";

import axios from "../config/axiosConfig";
import { CircularProgress } from "@mui/material";
import Button from "./Button";
import Message from "./Message";

const Terminbuchung = () => {
	const {
		renderTerminbuchung,
		showTerminbuchung,
		bookingError,
		setBookingError,
		showResponseMessage,
		setShowResponseMessage,
	} = useTerminbuchungContext();
	const { loggedIn } = useAuthContext();
	const [isLoading, setIsLoading] = useState(true);

	const [availableAppointments, setAvailableAppointments] = useState();
	const [selectedDayIndex, setSelectedDayIndex] = useState(null);
	const [days, setDays] = useState(null);
	const hideResponseMessage = () => {
		if (bookingError) {
			setBookingError(null);
		}

		setShowResponseMessage(false);
	};

	const nextDay = () => {
		// Increment selected day index
		setSelectedDayIndex(selectedDayIndex + 1);
	};

	const checkIfNextDayExists = () => {
		// get the index of the element with the same day as the selected date from the days array
		if (selectedDayIndex < days.length - 1) {
			return true;
		}
		return false;
	};

	const previousDay = () => {
		setSelectedDayIndex(selectedDayIndex - 1);
	};

	const checkIfPreviousDayExists = () => {
		// get the index of the element with the same day as the selected date from the days array
		if (selectedDayIndex > 0) {
			return true;
		}
		return false;
	};

	const handleOnDayClick = (clickedDay, modifiers) => {
		//Check if clicked day is in the available appointments array
		var newIndex = days.findIndex(
			(day) => day.toDateString() === clickedDay.toDateString()
		);
		//console.log(newIndex);
		if (newIndex !== -1) {
			setSelectedDayIndex(newIndex);
		} else {
			console.log("Selected Date is not contained in availableAppointments");
		}
	};

	const renderBookingError = () => {
		switch (bookingError) {
			case "1x1":
				return (
					<Message
						headline="Finanzprofil nicht vorhanden"
						message="Um eine Besichtigung buchen zu können, muss dein Finanzprofil
					vollständig ausgefüllt sein."
					>
						<Button
							className="w-100 home_button"
							style={{ marginTop: "30px" }}
							onClick={() => (window.location.href = "/dashboard/finanzierungsprofil")}
						>
							Finanzprofil ausfüllen
						</Button>
					</Message>
				);
			case "1x2":
				return (
					<Message
						headline="Termin buchung nicht möglich!"
						message="Der Termin wurde bereits gebucht. Bitte wähle einen anderen Termin
						aus."
					>
						<Button
							className="w-100 home_button"
							style={{ marginTop: "30px" }}
							onClick={() => hideResponseMessage()}
						>
							Termin wählen
						</Button>
					</Message>
				);
			case "2x1":
				return (
					<Message
						headline="Terminbuchung nicht möglich"
						message="Leider gibt es keine verfügbaren Besichtigungstermine mehr."
					>
						<Button
							className="w-100 home_button"
							style={{ marginTop: "30px" }}
							onClick={() => {
								renderTerminbuchung(false);
							}}
						>
							Schließen
						</Button>
					</Message>
				);
			case "2x2":
				return (
					<Message
						headline="Terminbuchung nicht möglich"
						message="Sie haben bereits einen Besichtigungstermin für diese Immobilie gebucht."
					>
						<Button
							className="w-100 home_button"
							style={{ marginTop: "30px" }}
							onClick={() => {
								renderTerminbuchung(false);
							}}
						>
							Schließen
						</Button>
					</Message>
				);
			default:
				return (
					<Message headline="Fehler" message={bookingError}>
						<Button
							className="w-100 home_button"
							style={{ marginTop: "30px" }}
							onClick={() => renderTerminbuchung(false)}
						>
							Zurück
						</Button>
					</Message>
				);
		}
	};

	const renderSucess = () => {
		return (
			<Message
				headline="Terminbuchung erfolgreich"
				message="Dein Termin wurde erfolgreich gebucht. Du bekommst eine E-Mail mit einem Link zum bestätigen des Termins."
			>
				<Button
					className="w-100 home_button"
					style={{ marginTop: "30px" }}
					onClick={() => {
						renderTerminbuchung(false);
					}}
				>
					Schließen
				</Button>
			</Message>
		);
	};

	const renderResponseMessage = () => {
		return bookingError ? renderBookingError() : renderSucess();
	};

	const fetchAppointments = () => {
		setIsLoading(true);
		axios(loggedIn.token)
			.post(`/appointmentSlots`, {
				estateId: estateInfo.id,
			})
			.then((res) => {
				//console.log(res);
				if (res.status === 200 && res.data.errorCode === "2x1") {
					setBookingError(res.data.errorCode);
					setShowResponseMessage(true);
					setIsLoading(false);
					return;
				} else if (res.status === 200 && res.data.errorCode === "2x2") {
					setBookingError(res.data.errorCode);
					setShowResponseMessage(true);
					setIsLoading(false);
					return;
				} else if (res.status === 200 && res.data.errorCode === "2x3") {
					setBookingError(res.data.errorCode);
					setShowResponseMessage(true);
					setIsLoading(false);
					return;
				}

				console.log("DATEN: ", res.data)

				var appointments = [];
				for (var i = 0; i < res.data.length; i++) {
					const start_dt = res.data[i][0].elements.start_dt.replace(/-/g, "/");
					appointments.push({
						id: res.data[i][0].id,
						date: new Date(start_dt),
					});
				}

				appointments.sort((a, b) => {
					return a.date.getTime() - b.date.getTime();
				});

				setAvailableAppointments(appointments);
				setSelectedDayIndex(0);
				setIsLoading(false);
			})
			.catch((e) => {
				if (e.response) {
					console.log(e);
				}
			});
	};

	useEffect(() => {
		if (availableAppointments) {
			var daysTemp = availableAppointments
				.map((appointment) => {
					const { date } = structuredClone(appointment);
					date.setHours(0, 0, 0, 0);
					return date;
				})
				.filter(
					(date, i, self) =>
						self.findIndex((d) => d.getTime() === date.getTime()) === i
				);
			setDays(daysTemp);
		}
	}, [availableAppointments]);

	useEffect(() => {
		if (!loggedIn) return;
		if (!bookingError && showTerminbuchung) {
			fetchAppointments();
		}
	}, [bookingError, showTerminbuchung]);

	if (showTerminbuchung && !loggedIn) {
		return (
			<PopupWrapper
				verticalAlign="center"
				closeIcon={iconCloseBtn}
				closeHandle={renderTerminbuchung}
				// innerWrapperStyle={{ maxWidth: "500px" }}
				innerWrapperClass="rounded-1 px-5 px-sm-8 py-sm-15 px-md-10 py-md-10 login-modal"
			>
				<Message
					headline="Buchung nicht möglich"
					message="Um eine Besichtigung buchen zu können, musst du angemeldet
			sein und ein vollständig ausgefülltes Finanzierungsprofil
			haben."
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
		);
	}

	const renderContent = () => {
		return (
			<>
				<h2 className={classes.headline}>
					Datum und Uhrzeit für deine Besichtigung wählen
				</h2>
				<div className={classes.contentWrapper}>
					<div className={classes.imgAndDetails}>
						<img className={classes.img} src={estateInfo.img} />
						<div className={classes.detail}>
							<span className={classes.detail__name}>
								{estateInfo.objektTyp} in:
							</span>
							<span className={classes.detail__value}>{estateInfo.plz}</span>
						</div>
						<div className={classes.detail}>
							<span className={classes.detail__name}>Angebotspreis:</span>
							<span className={classes.detail__value}>
								{estateInfo.angebotspreis}
							</span>
						</div>
						<div className={classes.detail}>
							<span className={classes.detail__name}>Wohnfläche:</span>
							<span className={classes.detail__value}>
								{estateInfo.wohnflaeche}qm
							</span>
						</div>
					</div>
					<div className={classes.calendar}>
						<DayPicker
							locale={de}
							selected={days}
							mode="multiple"
							onDayClick={(day) => handleOnDayClick(day)}
							defaultMonth={days[selectedDayIndex]}
							modifiers={{ auswahl: [days[selectedDayIndex]] }}
							modifiersStyles={{
								auswahl: {
									background: "var(--we-primary)",
									color: "#fff",
								},
								selected: {
									backgroundColor: "#fff",
									color: "#000",
									border: "1px solid var(--we-primary)",
								},
							}}
						/>
						<div>
							<span className={classes.detail__name}>Termindauer:</span>{" "}
							<span className={classes.detail__value}>30 min</span>
							<p>
								Hat dir deine erste Besichtigung gefallen? Dann kannst du gerne
								eine zweite Besichtigung buchen.
							</p>
						</div>
						<div style={{ width: "100%" }}>
							<span className={classes.detail__name}>Terminort:</span>{" "}
							<span className={classes.detail__value}>
								{`${estateInfo.strasse} ${estateInfo.hausnummer}, ${estateInfo.plz} ${estateInfo.ort}`}
							</span>
						</div>
					</div>
					<div className={classes.terminAuswahl}>
						<Terminauswahl
							availableAppointments={availableAppointments}
							days={days}
							selectedDayIndex={selectedDayIndex}
							dayChanger={{
								nextDay: nextDay,
								previousDay: previousDay,
								checkIfNextDayExists: checkIfNextDayExists,
								checkIfPreviousDayExists: checkIfPreviousDayExists,
							}}
						/>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			{showTerminbuchung && (
				<PopupWrapper
					verticalAlign="center"
					closeIcon={iconCloseBtn}
					closeHandle={renderTerminbuchung}
					innerWrapperStyle={
						showResponseMessage || !loggedIn || isLoading
							? { maxWidth: "500px" }
							: { padding: "25px" }
					}
				>
					<>
						{showResponseMessage ? (
							renderResponseMessage()
						) : isLoading ? (
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
						) : availableAppointments ? (
							renderContent()
						) : (
							<Message
								headline="Terminbuchung nicht möglich"
								message="Leider gibt es keine verfügbaren Besichtigungstermine mehr."
							>
								<Button
									className="w-100 home_button"
									style={{ marginTop: "30px" }}
									onClick={() => {
										renderTerminbuchung(false);
									}}
								>
									Schließen
								</Button>
							</Message>
						)}
					</>
				</PopupWrapper>
			)}
		</>
	);
};
export default Terminbuchung;
