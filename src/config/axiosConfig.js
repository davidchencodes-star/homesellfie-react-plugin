import axios from "axios";

const customAxios = (token) => {
	var config = {
		baseURL: "https://api.homesellfie.de",
	};
	if (token) {
		config.headers = { Authorization: `Bearer ${token}` };
	}

	const instance = axios.create(config);

	instance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response.status === 401) {
				console.log("401 unauthorized, Token will be deleted");
				localStorage.removeItem("_hsdt");
				window.location = "/dashboard/login";
			}
			return error;
		}
	);

	return instance;
};

export default customAxios;
