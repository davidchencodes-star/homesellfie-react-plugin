import {
	createContext,
	useState,
	useEffect,
	useContext,
} from "@wordpress/element";

const ObjektunterlagenContext = createContext({});

export const useObjektunterlagenContext = () =>
	useContext(ObjektunterlagenContext);

export const ObjektunterlagenContextProvider = ({ children }) => {
	const [showObjektunterlagen, setShowObjektunterlagen] = useState(false);

	const renderObjektunterlagen = (visible) => {
		if (!visible) {
			setShowObjektunterlagen(false);
		} else {
			setShowObjektunterlagen(true);
		}
	};

	useEffect(() => {
		// save render function in global window var, to toggle popup visibility from outside of the react app
		window.renderObjektunterlagen = renderObjektunterlagen;
	}, []);

	const contextValue = {
		showObjektunterlagen,
		setShowObjektunterlagen,
		renderObjektunterlagen,
	};
	return (
		<ObjektunterlagenContext.Provider value={contextValue}>
			{children}
		</ObjektunterlagenContext.Provider>
	);
};
