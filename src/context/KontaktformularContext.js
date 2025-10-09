import {
	createContext,
	useState,
	useEffect,
	useContext,
} from "@wordpress/element";

const KontaktformularContext = createContext({});

export const useKontaktformularContext = () =>
	useContext(KontaktformularContext);

export const KontaktformularContextProvider = ({ children }) => {
	const [showKontaktformular, setShowKontaktformular] = useState(false);

	const renderKontaktformular = (visible) => {
		if (!visible) {
			setShowKontaktformular(false);
		} else {
			setShowKontaktformular(true);
		}
	};

	useEffect(() => {
		// save render function in global window var, to toggle popup visibility from outside of the react app
		window.renderKontaktformular = renderKontaktformular;
	}, []);

	const contextValue = {
		showKontaktformular,
		renderKontaktformular,
	};
	return (
		<KontaktformularContext.Provider value={contextValue}>
			{children}
		</KontaktformularContext.Provider>
	);
};
