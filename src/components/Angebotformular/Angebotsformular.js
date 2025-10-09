import classes from "./Angebotsformular.module.css";
import { useEffect, useState } from "@wordpress/element";
import { useAngebotsformularContext } from "../../context/AngebotsformularContext";
import { useTerminbuchungContext } from "../../context/TerminbuchungContext";
import { useAuthContext } from "../../context/AuthContext";

import PopupWrapper from "../PopupWrapper";
import iconCloseBtn from "../../assets/x_primary.svg";

import axios from "../../config/axiosConfig";
import stockAxios from "axios";
import { CircularProgress, Box } from "@mui/material";
import Button from "../Button";
import Message from "../Message";

const Angebotsformular = (props) => {
	const { renderTerminbuchung } = useTerminbuchungContext();
	const {
		showAngebotsformular,
		setShowAngebotsformular,
		renderAngebotsformular,
		error,
		setError,
		showResponseMessage,
		setShowResponseMessage,
	} = useAngebotsformularContext();
	const { loggedIn } = useAuthContext();
	const [isLoading, setIsLoading] = useState(true);
	const [angebotWirdAngelegtLoader, setAngebotWirdAngelegtLoader] =
		useState(false);

	const [angebote, setAngebote] = useState([]);
	const [angebot, setAngebot] = useState("");

	useEffect(() => {
		console.log(angebot)
	}, [angebot])


	const [statusBesichtigung, setStatusBesichtigung] = useState(null);

	const getMaxAngebot = () => {
		return Intl.NumberFormat("de-DE", {
			// Currency Formatting
			style: "currency",
			currency: "EUR",
			maximumFractionDigits: 0,
		}).format(
			// Sorting the created copy of the array to get the highest offer while keeping the original order of the offers
			angebote.slice().sort((a, b) => {
				return b.preis - a.preis;
			})[0].preis
		);
	};

	const hideResponseMessage = () => {
		if (error) {
			setError(null);
		}

		setShowResponseMessage(false);
	};

	const renderError = () => {
		switch (error) {
			case "3x1":
				return (
					<Message
						headline="Angebot bereits abgegeben"
						message="Du hast bereits ein Angebot für diese Immobilie abgegeben"
					>
						<Button
							style={{ marginTop: "15px" }}
							onClick={() => hideResponseMessage()}
						>
							Zurück
						</Button>
					</Message>
				);
			case "3x2":
				return (
					<Message
						headline="Abgabe des Angebots nicht möglich!"
						message="Um ein Angebot abgeben zu können musst du bereits eine Besichtigung durchgeführt haben."
					>
						<Button
							style={{ marginTop: "15px" }}
							onClick={() => {
								hideResponseMessage();
								setShowAngebotsformular(false);
							}}
						>
							Schließen
						</Button>
					</Message>
				);
			case "3x3":
				return (
					<Message
						headline="Abgabe des Angebots nicht möglich!"
						message="Der Betrag darf nur aus Zahlen bestehen."
					>
						<Button
							style={{ marginTop: "15px" }}
							onClick={() => hideResponseMessage()}
						>
							Zurück
						</Button>
					</Message>
				);
			default:
				return (
					<Message headline="Fehler" message={error}>
						<Button
							style={{ marginTop: "15px" }}
							onClick={() => hideResponseMessage()}
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
				headline="Angebot abgegeben"
				message="Dein Angebot wurde erfolgreich abgegeben."
			>
				<Button
					style={{ marginTop: "15px", marginRight: "15px" }}
					onClick={() => {
						renderAngebotsformular(false);
					}}
				>
					Schließen
				</Button>
				<Button
					style={{ marginTop: "15px" }}
					onClick={() => {
						window.location.href =
							"https://www.homesellfie.de/dashboard/gebote";
					}}
				>
					Meine Gebote einsehen
				</Button>
			</Message>
		);
	};

	const renderResponseMessage = () => {
		return error ? renderError() : renderSucess();
	};

	const fetchAngebote = () => {
		setIsLoading(true);

		const getStatusRequest = axios(loggedIn.token).post(
			`/users/${loggedIn.data.userId}/status/besichtigung`,
			{
				estateId: estateInfo.id,
			}
		);
		const getOffersRequest = axios(loggedIn.token).get(
			`/inserate/${estateInfo.id}/offers`
		);

		stockAxios
			.all([getStatusRequest, getOffersRequest])
			.then(
				stockAxios.spread((...responses) => {
					const responseStatus = responses[0];
					const responseOffers = responses[1];

					console.log({ statusBesichtigung: responseStatus.data });

					setStatusBesichtigung(responseStatus.data);
					setAngebote(responseOffers.data);
					setIsLoading(false);
				})
			)
			.catch((e) => {
				if (e.response) {
					console.log(e);
				}
			});
	};

	const angebotMachenHandle = () => {
		if (isNaN(angebot)) {
			setError("3x3");
			setShowResponseMessage(true);
			return;
		}
		setAngebotWirdAngelegtLoader(true);
		axios(loggedIn.token)
			.put(`/offer`, {
				estateId: estateInfo.id,
				offerValue: angebot,
			})
			.then((res) => {
				console.log(res);
				if (res.response && res.response.status == 400) {
					setError(res.response.data.errorCode);
				}
				window.fetchOffers();
				setShowResponseMessage(true);
				setAngebotWirdAngelegtLoader(false);
			})
			.catch((e) => {
				if (e.response) {
					console.log(e);
				}
			});
	};

	useEffect(() => {
		if (!loggedIn) return;
		if (!error && showAngebotsformular) {
			fetchAngebote();
		}
	}, [error, showAngebotsformular]);

	if (showAngebotsformular && !loggedIn) {
		return (
			<PopupWrapper
				verticalAlign="center"
				closeHandle={renderAngebotsformular}
				closeIcon={iconCloseBtn}
				innerWrapperStyle={{ maxWidth: "500px" }}
			>
				<Message
					headline="Angebot abgeben nicht möglich"
					message="Um ein Angebot abgeben zu können, musst du angemeldet
			sein."
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
		);
	}

	const renderContent = () => {
		return (
			<>
				<h2 className={classes.headline}>
					Jetzt ein Angebot machen und Kaufzusage erhalten
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
					<form
						className={classes.angebotMachen}
						onSubmit={(e) => {
							e.preventDefault();
							angebotMachenHandle();
						}}
					>
						<div class={classes.inpWrapper}>
							<input
								type="text"
								name="angebot"
								id="inpAngebot"
								className={classes.inpAngebot}
								value={angebot}
								onChange={(e) => setAngebot(e.target.value)}
								placeholder={`z. B. ${estateInfo.angebotspreis}`}
								required={true}
							/>
						</div>
						<Box sx={{ position: "relative", width: "100%" }}>
							<Button
								style={
									angebotWirdAngelegtLoader
										? {
											backgroundColor: "#F20560",
											boxShadow: "rgb(242 5 96) 0px 0px 14px 0px",
											width: "90%",
											fontSize: "18px",
											fontWeight: "600",
											opacity: ".3",
										}
										: {
											backgroundColor: "#F20560",
											boxShadow: "rgb(242 5 96) 0px 0px 14px 0px",
											width: "90%",
											fontSize: "18px",
											fontWeight: "600",
										}
								}
								disabled={angebotWirdAngelegtLoader}
								type="submit"
							>
								ANGEBOT MACHEN
							</Button>
							{angebotWirdAngelegtLoader && (
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
						<p className={classes.p}>
							Begib dich jetzt einen Schritt näher zu deinen neuen vier Wänden
							und mache ein unverbindliches Kaufangebot.
						</p>
						<div className={classes.infos}>
							{angebote.length > 0 ? (
								<>
									<div className={classes.info}>
										<span className={classes.info__value}>
											{angebote.length}
										</span>
										<span className={classes.info__title}>
											{angebote.length === 1 ? "Gebot" : "Gebote"}
										</span>
									</div>
									{statusBesichtigung === true && (
										<div className={classes.info}>
											<span className={classes.info__title}>Höchstgebot</span>
											<span className={classes.info__value}>
												{getMaxAngebot()}
											</span>
										</div>
									)}
								</>
							) : (
								"Noch keine Angebote abgegeben"
							)}
						</div>
						<Button
							style={{ width: "90%", fontSize: "18px", fontWeight: "600" }}
							background="dark"
							onClick={() => window.openContactForm()}
						>
							Jetzt beste Finanzierung sichern
						</Button>
					</form>
				</div>
			</>
		);
	};

	return (
		<>
			{showAngebotsformular && (
				<PopupWrapper
					verticalAlign="center"
					closeHandle={renderAngebotsformular}
					closeIcon={iconCloseBtn}
					innerWrapperStyle={
						showResponseMessage && !error
							? {
								width: "auto",
								minHeight: "auto",
							}
							: showResponseMessage || !loggedIn || isLoading
								? {
									maxWidth: "500px",
									minHeight: "250px",
								}
								: {
									maxWidth: "900px",
								}
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
						) : (
							renderContent()
						)}
					</>
				</PopupWrapper>
			)}
		</>
	);
};
export default Angebotsformular;
