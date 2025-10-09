import { createContext, useState, useContext } from "@wordpress/element";

const TotalContext = createContext({});

export const useTotalContext = () => useContext(TotalContext);

export const TotalContextProvider = ({ children }) => {
	const [homedata, setHomeData] = useState(
		localStorage.getItem("homedata")
	);

	const [smartData, setSmartData] = useState(
		localStorage.getItem("smartData")
	);

	const [offerLength, setOfferLength] = useState(
		localStorage.getItem("offerLength")
	);

	const [loading, setLoading] = useState(localStorage.getItem("loading"));

	const contextValue = {
		homedata,
		smartData,
		offerLength,
		loading
	};
    
	return (
		<TotalContext.Provider value={contextValue}>{children}</TotalContext.Provider>
	);
};
