import {useState} from "react";
import PropTypes from "prop-types";
import Cities from "../../../global/Cities.js";
import "./AddSimpleCity.css";

function AddSimpleCity(props) {
	const { uid, onCityAdd } = props;
	const [ idle, setIdle ] = useState(true);
	const [ city, setCity ] = useState();

	const handleSubmit = async event => {
		event.preventDefault();

		Cities.add(uid, city)
			.then(response => {
				switch (response.code) {
				case 200:
					onCityAdd(city);
					setIdle(true);
					break;
				default:
					console.error(response.message);
					break;
				}
			})
			.catch(console.error);
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