import { createContext, useState, useContext } from "@wordpress/element";

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(
		JSON.parse(localStorage.getItem("_hsdt"))
	);

	const contextValue = {
		loggedIn,
	};
	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};
