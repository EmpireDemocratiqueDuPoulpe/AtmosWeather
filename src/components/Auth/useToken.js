import { useState } from "react";
import config from "../../config/config.js";

export default function useToken() {
	const storage = config.auth.persistent ? localStorage : sessionStorage;

	const getToken = () => {
		return storage.getItem("token");
	};

	const saveToken = token => {
		storage.setItem("token", JSON.stringify(token));
	};

	const [ token ] = useState(getToken());
	return { setToken: saveToken, token: token };
}