import {
	createContext,
	useState,
	useEffect,
	useContext,
} from "@wordpress/element";

const AngebotsformularContext = createContext({});

export const useAngebotsformularContext = () =>
	useContext(AngebotsformularContext);

export const AngebotsformularContextProvider = ({ children }) => {
	const [showAngebotsformular, setShowAngebotsformular] = useState(false);
	const [error, setError] = useState(null);
	const [showResponseMessage, setShowResponseMessage] = useState(false);
	const [rerender, setRerender] = useState(false);

	const renderAngebotsformular = (visible) => {
		if (!visible) {
			setShowAngebotsformular(false);
			setError(null);
			setShowResponseMessage(false);
		} else {
			setShowAngebotsformular(true);
		}
	};

	useEffect(() => {
		// save render function in global window var, to toggle popup visibility from outside of the react app
		window.renderAngebotsformular = renderAngebotsformular;
	}, []);

	const contextValue = {
		showAngebotsformular,
		setShowAngebotsformular,
		renderAngebotsformular,
		error,
		setError,
		showResponseMessage,
		setShowResponseMessage,
	};
	return (
		<AngebotsformularContext.Provider value={contextValue}>
			{children}
		</AngebotsformularContext.Provider>
	);
};
