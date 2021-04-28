import { useState } from "react";
import config from "../../config/config.js";

export default function useAuth() {
	const storage = config.auth.persistent ? localStorage : sessionStorage;

	const getToken 		= () => { return storage.getItem("token"); };
	const getUID 			= () => { return storage.getItem("uid"); };
	const getUsername = () =>	{ return storage.getItem("username"); };
	const getAll 			= () => { return { token: getToken(), uid: getUID(), username: getUsername() }; };

	const saveToken 		= token => { storage.setItem("token", token ?? ""); };
	const saveUID 			= uid => { storage.setItem("uid", uid ?? ""); };
	const saveUsername 	= username => { storage.setItem("username", username ?? ""); };
	const saveAll = (token, uid, username) => { saveToken(token); saveUID(uid); saveUsername(username); };

	const removeToken 		= () => { storage.removeItem("token"); };
	const removeUID 			= () => { storage.removeItem("uid"); };
	const removeUsername 	= () => { storage.removeItem("username"); };
	const removeAll 			= () => { removeToken(); removeUID(); removeUsername(); };

	const [ token ] = useState(getToken());
	const [ uid ] = useState(getUID());
	const [ username ] = useState(getUsername());

	return {
		token: 		{ set: saveToken, delete: removeToken, value: token },
		uid: 			{ set: saveUID, delete: removeUID, value: uid },
		username:	{ set: saveUsername, delete: removeUsername, value: username },
		all:			{ set: saveAll, delete: removeAll, get: getAll }
	};
}