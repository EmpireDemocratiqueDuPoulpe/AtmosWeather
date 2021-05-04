import {useState} from "react";
import PropTypes from "prop-types";
import Cities from "../../../global/Cities.js";
import { ReactComponent as AddIcon } from "../../../assets/images/add_black_24dp.svg";
import { ReactComponent as CloseIcon } from "../../../assets/images/close_black_24dp.svg";
import "./AddSimpleCity.css";

function AddSimpleCity(props) {
	const { uid, onCityAdd } = props;
	const [ idle, setIdle ] = useState(true);
	const [ city, setCity ] = useState();

	const handleSubmit = async event => {
		event.preventDefault();

		Cities.add(uid, city)
			.then(response => {
				if (response.error) {
					console.error(response);
				} else {
					onCityAdd(city);
					setIdle(true);
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
								<input
									className="asc-city-name"
									type="text"
									placeholder="Nom de la ville"
									onChange={e => setCity(e.target.value)}
									minLength={1}
								/>
							</div>

							<div className="asc-buttons">
								<label className="asc-add-button">
									<input type="submit"/>
									<div className="asc-add-button-content">
										<AddIcon/>
										<span>Ajouter</span>
									</div>
								</label>

								<label className="asc-cancel">
									<input type="button" onClick={() => setIdle(true)}/>
									<CloseIcon/>
								</label>
							</div>
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