import {useState} from "react";
import PropTypes from "prop-types";
import config from "../../../config/config.js";
import "./AddSimpleCity.css";

async function addCity(uid, name) {
	const isValid = await checkCityName(name);
	if (isValid.cod !== 200) return { code: isValid.cod, message: isValid.message };

	const { awApi } = config;
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

	try {
		const result = await fetch(awApi.cities.add, options);
		return await result.json();
	} catch (err) {
		console.error(err.message);
	}
}

async function checkCityName(name) {
	const { oweather } = config;
	const options = { headers: { Accept: "application/json" } };

	try {
		const result = await fetch(
			`https://${oweather.current}?q=${name}&units=${oweather.units}&lang=${oweather.lang}&appid=${oweather.key}`,
			options
		);
		return await result.json();
	} catch (err) {
		console.error(err.message);
	}
}

function AddSimpleCity(props) {
	const { uid, onCityAdd } = props;
	const [ idle, setIdle ] = useState(true);
	const [ city, setCity ] = useState();

	const handleSubmit = async event => {
		event.preventDefault();

		const result = await addCity(uid, city);

		if (result.code) {
			switch (result.code) {
			case 200:
				onCityAdd(city);
				setIdle(true);
				break;
			default:
				console.error(result.message);
				break;
			}
		}
	};

	return (
		<div className={`add-simple-city ${idle ? "no-padding" : ""}`}>
			{
				idle ? (
					<div className="asc-show-form-btn" onClick={() => setIdle(false)}>
						<p>Cliquez pour ajouter une ville</p>
					</div>
				) : (
					<form onSubmit={handleSubmit}>
						<input
							className="asc-city-name"
							type="text"
							placeholder="Nom de la ville"
							onChange={e => setCity(e.target.value)}
							minLength={1}
						/>
						<input type="submit" value="Ajouter"/>
						<input type="button" value="Annuler" onClick={() => setIdle(true)}/>
					</form>
				)
			}
		</div>
	);
}

AddSimpleCity.propTypes = {
	uid: PropTypes.string.isRequired,
	onCityAdd: PropTypes.func.isRequired
};

export default AddSimpleCity;