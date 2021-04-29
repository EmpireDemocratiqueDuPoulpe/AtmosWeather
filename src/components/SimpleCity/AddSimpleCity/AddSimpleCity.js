import {useState} from "react";
import PropTypes from "prop-types";
import Cities from "../../../global/Cities.js";
import { ReactComponent as AddIcon } from "../../../assets/images/add_black_24dp.svg";
import "./AddSimpleCity.css";

function AddSimpleCity(props) {
	const { uid, onCityAdd } = props;
	const [ idle, setIdle ] = useState(false);
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
		<div className={`add-simple-city ${idle ? "" : "expand"}`}>
			<div className="asc-content">
				{
					idle ? (
						<div className="asc-show-form-btn" onClick={() => setIdle(false)}>
							<AddIcon/>
						</div>
					) : (
						<form onSubmit={handleSubmit}>
							<div className="asc-form-field">
								<span className="custom-input isao">
									<input
										className="asc-city-name"
										type="text"
										id="cityName"
										onChange={e => setCity(e.target.value)}
										minLength={1}
									/>
									<label htmlFor="cityName" data-content="Nom de la ville">
										<span>Nom de la ville</span>
									</label>
								</span>
								<label>
									<input type="submit" value="Ajouter"/>
									<AddIcon/>
								</label>
							</div>
							<input type="button" value="Annuler" onClick={() => setIdle(true)}/>
						</form>
					)
				}
			</div>
		</div>
	);
}

AddSimpleCity.propTypes = {
	uid: PropTypes.string.isRequired,
	onCityAdd: PropTypes.func.isRequired
};

export default AddSimpleCity;