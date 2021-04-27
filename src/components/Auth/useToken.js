import { useState } from "react";
import config from "../../config/config.js";

export default function useToken() {
	const storage = config.auth.persistent ? localStorage : sessionStorage;

	const getToken = () => {
		return storage.getItem("token");
	};

	const saveToken = token => {
		storage.setItem("token", token);
	};

	const removeToken = () => {
		storage.removeItem("token");
	};

	const [ token ] = useState(getToken());
	return { setToken: saveToken, delToken: removeToken, token: token };
}