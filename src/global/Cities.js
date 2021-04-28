import config from "../config/config.js";

const { awApi, oweather } = config;

/* ---- CREATE ---------------------------------- */
async function add(uid, name) {
	const isValid = await checkCityName(name);
	if (isValid.cod !== 200) return { code: isValid.cod, message: isValid.message };

	const options = {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify({
			uid: uid,
			name: name
		})
	};

	const response = await fetch(awApi.cities.add, options);
	return await response.json();
}

/* ---- READ ------------------------------------ */
async function getOf(uid) {
	const response = await fetch(
		`${awApi.cities.getOf}/${uid}`,
		{ headers: { Accept: "application/json" } }
	);

	return await response.json();
}

async function checkCityName(name) {
	const response = await fetch(
		`https://${oweather.current}?q=${name}&units=${oweather.units}&lang=${oweather.lang}&appid=${oweather.key}`,
		{ headers: { Accept: "application/json" } }
	);

	return await response.json();
}

/* ---- DELETE ---------------------------------- */
async function del(uid, name) {
	const options = {
		method: "DELETE",
		headers: {
			"Content-type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify({ uid: uid, name: name })
	};

	const response = await fetch(awApi.cities.delete, options);
	return await response.json();
}

/* ---- EXPORT ---------------------------------- */

const Cities = { add, getOf, checkCityName, delete: del };
export default Cities;