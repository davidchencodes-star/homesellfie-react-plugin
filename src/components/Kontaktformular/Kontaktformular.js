import classes from "./Kontaktformular.module.css";
import { useEffect, useState } from "@wordpress/element";
import { useKontaktformularContext } from "../../context/KontaktformularContext";
import { useAuthContext } from "../../context/AuthContext";
import iconCloseBtn from "../../assets/x_primary.svg";
import PopupWrapper from "../PopupWrapper";
import CustomFormControl from "../CustomFormControl";
import { Alert, Box, CircularProgress } from "@mui/material";
import Button from "../Button";

const Kontaktformular = () => {
	const { renderKontaktformular, showKontaktformular } =
		useKontaktformularContext();
	const { loggedIn } = useAuthContext();
	const [error, setError] = useState(null);
	const [info, setInfo] = useState(null);
	const [fieldIsValid, setFieldIsValid] = useState({
		vorname: null,
		name: null,
		email: null,
		telefon: null,
		nachricht: null,
		password: null,
	});

	const [inputValues, setInputValue] = useState({
		vorname: "",
		name: "",
		email: "",
		telefon: "",
		nachricht: "",
		password: "",
		passwordRepeat: "",
	});

	const [cbKontoAnlegen, setCbKontoAnlegen] = useState(false);
	const [cbDatenschutz, setCbDatenschutz] = useState(false);

	const [loading, setLoading] = useState(false);

	//handle submit updates
	function handleChange(event) {
		const { name, value } = event.target;
		//console.log({ name, value });
		setInputValue({ ...inputValues, [name]: value });
	}

	const validateEmail = (e) => {
		return String(e)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const validateForm = () => {
		let validation = fieldIsValid;

		if (!loggedIn) {
			if (inputValues.vorname === "") {
				validation.vorname = false;
			} else {
				validation.vorname = true;
			}

			if (inputValues.name === "") {
				validation.name = false;
			} else {
				validation.name = true;
			}

			if (inputValues.email === "") {
				validation.email = false;
			} else {
				if (validateEmail(inputValues.email)) {
					validation.email = true;
				} else {
					validation.email = false;
				}
			}
			if (cbKontoAnlegen) {
				if (inputValues.password === "") {
					validation.password = false;
				} else {
					if (inputValues.password === inputValues.passwordRepeat) {
						validation.password = true;
						console.log(inputValues.password, inputValues.passwordRepeat);
					} else {
						validation.password = false;
					}
				}
			}
		}

		if (inputValues.telefon === "") {
			validation.telefon = false;
		} else {
			validation.telefon = true;
		}

		if (inputValues.nachricht === "") {
			validation.nachricht = false;
		} else {
			validation.nachricht = true;
		}

		setFieldIsValid(validation);
	};

	function handleSubmit() {
		setError("");
		validateForm();

		if (
			[
				fieldIsValid.vorname,
				fieldIsValid.name,
				fieldIsValid.email,
				fieldIsValid.telefon,
				fieldIsValid.nachricht,
				fieldIsValid.password,
			].includes(false)
		) {
			setError("Bitte eingaben Überprüfen");
			return;
		}

		setLoading(true);
		console.log("Submit");

		let url = "https://api.homesellfie.de";
		let endpoint = "/kontaktanfrage";
		let headers = {
			"Content-Type": "application/json",
		};
		let body = {
			phone: inputValues.telefon,
			message: inputValues.nachricht,
			inserat: estateInfo.id,
		};

		if (loggedIn) {
			body.userId = loggedIn.data.userId;
		} else {
			body.vorname = inputValues.vorname;
			body.name = inputValues.name;
			body.email = inputValues.email;

			if (cbKontoAnlegen) {
				body.password = inputValues.password;
			}
		}

		fetch(url + endpoint, {
			method: "POST",
			//withCredentials: true,
			//credentials: 'include',
			headers: headers,
			body: JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.infoCode === "0x1" || data.infoCode === "0x2") {
					/* Case: Nachricht wurde gesendet & Account existiert bereits. */
					setInfo("Nachricht wurde gesendet.");
				} else if (data.infoCode === "0x3") {
					/* Case: Nachricht wude gesendet & Neuer Acccount wurde erstellt. */
					setInfo("Nachricht wude gesendet.");
				} else if (data.infoCode === "0x4") {
					/* Case: Nachricht wude gesendet, Adresse wurde angelegt und als interessent gesetzt. */
					setInfo(
						"Nachricht wude gesendet."
					);
				} else {
					setInfo(`Infocode: ${data.infoCode}`);
				}
				setTimeout(() => renderKontaktformular(false), 1000)
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});

		console.log("submit");
	}

	return (
		<>
			{showKontaktformular && (
				<PopupWrapper
					closeIcon={iconCloseBtn}
					closeHandle={renderKontaktformular}
					innerWrapperStyle={{
						backgroundColor: "#ffffff",
						maxWidth: "391px",
						borderRadius: "5px",
					}}
					innerWrapperClass="px-5 px-sm-8 py-sm-15 px-md-10 py-md-10 contact-modal"
				>
					<form
						className={classes.form}
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
					>
						<p className="fs-2 fs-md-1 lh-lg fw-bold text-primary pb-9">Eine Anfrage hinterlassen</p>
                        <p className="fs-4 fs-md-3 lh-lg fw-normal text-light pb-9">Bitte hinterlassen Sie Ihre Daten und wir werden uns in Kürze mit Ihnen in Verbindung setzen</p>
						{!loggedIn && (
							<>
								<input
									id="inpVorname"
									type="text"
									name="vorname"
									value={inputValues.vorname}
									onChange={(e) => handleChange(e)}
									placeholder="Vorname"
									className="fs-5 lh-1 w-100 rounded border p-5 p-md-8 text-light mb-5"
									style={{ outline: 0 }}
									required
								/>
								{fieldIsValid.vorname === false && (
									<div className={classes.notValidMsg}>Ungültiger Vorname</div>
								)}
								<input
									id="inpName"
									type="text"
									name="name"
									value={inputValues.name}
									onChange={(e) => handleChange(e)}
									placeholder="Name"
									className="fs-5 lh-1 w-100 rounded border p-5 p-md-8 text-light mb-5"
									style={{ outline: 0 }}
									required
								/>
								{fieldIsValid.name === false && (
									<div className={classes.notValidMsg}>Ungültiger Name</div>
								)}
								<input
									id="inpEmail"
									type="text"
									name="email"
									value={inputValues.email}
									onChange={(e) => handleChange(e)}
									placeholder="E-Mail"
									className="fs-5 lh-1 w-100 rounded border p-5 p-md-8 text-light mb-5"
									style={{ outline: 0 }}
									required
								/>
								{fieldIsValid.email === false && (
									<div className={classes.notValidMsg}>
										Ungültige E-Mail Adresse
									</div>
								)}
							</>
						)}
						<input
							id="inpTelefon"
							type="text"
							name="telefon"
							value={inputValues.telefon}
							onChange={(e) => handleChange(e)}
							placeholder="Telefon"
							className="fs-5 lh-1 w-100 rounded border p-5 p-md-8 text-light mb-5"
							style={{ outline: 0 }}
							required
						/>
						{fieldIsValid.telefon === false && (
							<div className={classes.notValidMsg}>Ungültige Telefonnummer</div>
						)}
						<textarea
							id="inpNachricht"
							name="nachricht"
							value={inputValues.nachricht}
							onChange={(e) => handleChange(e)}
							placeholder="Deine Nachricht"
							className="fs-5 lh-1 w-100 p-5 p-md-8 text-light mb-5 border rounded"
							style={{ outline: 0, border: 'none' }}
							required
						/>
						{fieldIsValid.nachricht === false && (
							<div className={classes.notValidMsg}>Ungültige Nachricht</div>
						)}
						{!loggedIn && (
							<label className={classes.lblWithCheckbox}>
								<input
									type="checkbox"
									id="inpKontoAnlegen"
									name="kontoAnlegen"
									//value={inputValues.kontoAnlegen}
									checked={cbKontoAnlegen}
									onChange={(e) => setCbKontoAnlegen(!cbKontoAnlegen)}
									className={classes.inpCheckbox}
								/>
								<p className="fs-6 text-light">Ich möchte ein Konto angegen</p>
							</label>
						)}
						{cbKontoAnlegen && (
							<>
								<input
									type="password"
									id="inpPassword"
									name="password"
									value={inputValues.password}
									onChange={(e) => handleChange(e)}
									placeholder="Passwort"
									className="fs-5 lh-1 w-100 rounded border p-5 p-md-8 text-light my-5"
									style={{ outline: 0 }}
									required
								/>
								<input
									type="password"
									id="inpPasswordRepeat"
									name="passwordRepeat"
									value={inputValues.passwordRepeat}
									onChange={(e) => handleChange(e)}
									placeholder="Passwort Wiederholen"
									className="fs-5 lh-1 w-100 rounded border p-5 p-md-8 text-light mb-5"
									style={{ outline: 0 }}
									required
								/>
								{fieldIsValid.password === false && (
									<div className={classes.notValidMsg}>
										Passwörter stimmen nicht überein
									</div>
								)}
							</>
						)}
						<label className={classes.lblWithCheckbox}>
							<input
								type="checkbox"
								id="inpDatenschutz"
								name="datenschutz"
								checked={cbDatenschutz}
								onChange={(e) => setCbDatenschutz(!cbDatenschutz)}
								className={classes.inpCheckbox}
								required
							/>
							<p className="fs-6 text-light">Ich willige die Datenschutzerklärung ein</p>
						</label>
						<Box
							sx={{ position: "relative", width: "100%", marginTop: "15px" }}
						>
							<Button
								style={
									loading
										? {
											width: "100%",
											opacity: ".3",
										}
										: { width: "100%", marginTop: "15px" }
								}
								disabled={loading}
								type="submit"
								className="py-5 py-md-8 home_button"
							>
								Registrieren
							</Button>
							{loading && (
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
					</form>
					{error && (
						<Alert
							sx={{
								marginTop: "15px",
								width: "100%",
								"& .MuiAlert-message": {
									alignSelf: "center",
									lineHeight: "1",
								},
								backgroundColor: "transparent",
								border: "solid 2px var(--we-primary)",
								"& .MuiAlert-icon": {
									color: "var(--we-primary)",
								},
							}}
							severity="error"
						>
							{error}
						</Alert>
					)}

					{info && (
						<Alert
							sx={{
								marginTop: "15px",
								width: "100%",
								"& .MuiAlert-message": {
									alignSelf: "center",
									lineHeight: "1",
								},
								backgroundColor: "transparent",
								border: "solid 2px var(--we-primary)",
								"& .MuiAlert-icon": {
									color: "var(--we-primary)",
								},
							}}
							severity="info"
						>
							{info}
						</Alert>
					)}
				</PopupWrapper>
			)}
		</>
	);
};
export default Kontaktformular;
