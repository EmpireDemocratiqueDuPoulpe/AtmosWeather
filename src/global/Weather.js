import config from "../config/config.js";

const { oweather } = config;

/* ---- READ ------------------------------------ */
async function getCurrent(cityName) {
	const response = await fetch(
		`https://${oweather.current}?q=${cityName}&units=${oweather.units}&lang=${oweather.lang}&appid=${oweather.key}`,
		{ headers: { Accept: "application/json" } }
	);

	return await response.json();
}

async function getWeekForecast(cityName) {
	const response = await fetch(
		`https://${oweather.forecast}?q=${cityName}&units=${oweather.units}&lang=${oweather.lang}&appid=${oweather.key}`,
		{ headers: { Accept: "application/json" } }
	);

	return await response.json();
}

/* ---- EXPORT ---------------------------------- */

const Weather = { getCurrent, getWeekForecast };
export default Weather;