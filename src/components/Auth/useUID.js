import { useState } from "react";
import config from "../../config/config.js";

export default function useUID() {
	const storage = config.auth.persistent ? localStorage : sessionStorage;

	const getUID = () => {
		return storage.getItem("uid");
	};

	const saveUID = uid => {
		storage.setItem("uid", uid);
	};

	const [ uid ] = useState(getUID());
	return { setUID: saveUID, uid: uid };
}