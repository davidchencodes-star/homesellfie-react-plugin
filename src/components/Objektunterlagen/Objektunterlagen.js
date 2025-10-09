import classes from "./Objektunterlagen.module.css";
import { useEffect, useState } from "@wordpress/element";
import { useAngebotsformularContext } from "../../context/AngebotsformularContext";
import { useTerminbuchungContext } from "../../context/TerminbuchungContext";
import { useAuthContext } from "../../context/AuthContext";

import PopupWrapper from "../PopupWrapper";
import iconCloseBtn from "../../assets/x_primary.svg";
import iconCloseBtnWhite from "../../assets/x_white.svg";
import iconFile from "../../assets/file_icon.svg";
import { CircularProgress, Box } from "@mui/material";

import axios from "../../config/axiosConfig";
import Button from "../Button";
import Message from "../Message";
import { useObjektunterlagenContext } from "../../context/ObjektunterlagenContext";

const Objektunterlagen = () => {
	const { showObjektunterlagen, renderObjektunterlagen } =
		useObjektunterlagenContext();
	const { loggedIn } = useAuthContext();
	const [isLoading, setIsLoading] = useState(true);
	const [buttonsLoading, setButtonsLoading] = useState({});

	const [loadingId, setLoadingId] = useState({});

	const [objektunterlagen, setObjektunterlagen] = useState([]);

	const fetchObjektunterlagen = () => {
		setIsLoading(true);
		axios(loggedIn.token)
			.get(`/inserate/${estateInfo.id}/files`)
			.then((res) => {
				console.log(res);
				/*if (res.status === 200 && res.data.errorCode === "2x1") {
					setBookingError(res.data.errorCode);
					setShowResponseMessage(true);
					setIsLoading(false);
					return;
				}*/
				setObjektunterlagen(res.data);

				// res.data.forEach((v, k))
				setIsLoading(false);
			})
			.catch((e) => {
				if (e.response) {
					console.log(e);
				}
			});
	};

	const downloadFileHandle = (fileId) => {
		setLoadingId((ids) => ({
			...ids,
			[fileId]: true,
		}));
		axios(loggedIn.token)
			.get(`/inserate/${estateInfo.id}/files/${fileId}`)
			.then((res) => {
				console.log(res);

				const linkSource = `data:application/pdf;base64,${res.data.elements.content}`;
				const downloadLink = document.createElement("a");
				const fileName = res.data.elements.originalname;

				downloadLink.href = linkSource;
				downloadLink.download = fileName;
				downloadLink.click();

				setLoadingId((ids) => ({
					...ids,
					[fileId]: false,
				}));
			})
			.catch((e) => {
				if (e.response) {
					console.log(e);
				}
			});
	};

	useEffect(() => {
		if (!loggedIn) return;
		if (showObjektunterlagen) {
			fetchObjektunterlagen();
		}
	}, [showObjektunterlagen]);

	if (showObjektunterlagen && !loggedIn) {
		return (
			<PopupWrapper
				verticalAlign="center"
				closeHandle={renderObjektunterlagen}
				closeIcon={iconCloseBtn}
				innerWrapperStyle={{ maxWidth: "500px" }}
			>
				<Message
					headline="Unterlagen einsehen nicht möglich!"
					message="Um die Unterlagen einsehen zu können, musst du angemeldet
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

	return (
		<>
			{showObjektunterlagen && (
				<PopupWrapper
					verticalAlign="center"
					closeHandle={renderObjektunterlagen}
					closeIcon={iconCloseBtnWhite}
					innerWrapperStyle={
						!loggedIn || isLoading
							? {
									maxWidth: "500px",
									minHeight: "300px",
							  }
							: {
									maxWidth: "900px",
									padding: 0,
									overflowY: "auto",
							  }
					}
				>
					<>
						{isLoading ? (
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
							<>
								<h2 className={classes.headline}>Alle Objektunterlagen</h2>
								<ul className={classes.files}>
									{objektunterlagen.length == 0 ? (
										<li className={classes.file}>
											Keine Unterlagen vorhanden!
										</li>
									) : (
										objektunterlagen.map((file, index) => (
											<li key={index} className={classes.file}>
												<img
													className={classes.img}
													src={iconFile}
													alt="File Icon"
												/>
												<span className={classes.filename}>
													{file.elements.originalname}
												</span>
												{/* <DownloadButton onClick={() => downloadFileHandle(file.id)}>
												Download
											</DownloadButton> */}
												<Box
													sx={{
														position: "relative",
														display: "inline-block",
														marginLeft: "auto",
													}}
												>
													<Button
														style={
															loadingId[file.id]
																? {
																		opacity: ".3",
																  }
																: {}
														}
														disabled={loadingId[file.id]}
														type="button"
														className={classes.download}
														onClick={(e) => downloadFileHandle(file.id)}
													>
														Download
													</Button>
													{loadingId[file.id] && (
														<CircularProgress
															size={24}
															sx={{
																color: "#EA4C89",
																position: "absolute",
																top: "50%",
																left: "50%",
																marginTop: "-12px",
																marginLeft: "-12px",
															}}
														/>
													)}
												</Box>
											</li>
										))
									)}
								</ul>
							</>
						)}
					</>
				</PopupWrapper>
			)}
		</>
	);
};
export default Objektunterlagen;
