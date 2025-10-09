import {
	createContext,
	useState,
	useEffect,
	useContext,
} from "@wordpress/element";

const TerminbuchungContext = createContext({});

export const useTerminbuchungContext = () => useContext(TerminbuchungContext);

export const TerminbuchungContextProvider = ({ children }) => {
	const [showTerminbuchung, setShowTerminbuchung] = useState(false);
	const [bookingError, setBookingError] = useState(null);
	const [showResponseMessage, setShowResponseMessage] = useState(false);

	const renderTerminbuchung = (visible) => {
		if (!visible) {
			setShowTerminbuchung(false);
			setBookingError(null);
			setShowResponseMessage(false);
		} else {
			setShowTerminbuchung(true);
		}
	};

	useEffect(() => {
		// save render function in global window var, to toggle popup visibility from outside of the react app
		window.renderTerminbuchung = renderTerminbuchung;
	}, []);

	const contextValue = {
		showTerminbuchung,
		setShowTerminbuchung,
		renderTerminbuchung,
		bookingError,
		setBookingError,
		showResponseMessage,
		setShowResponseMessage,
	};
	return (
		<TerminbuchungContext.Provider value={contextValue}>
			{children}
		</TerminbuchungContext.Provider>
	);
};
