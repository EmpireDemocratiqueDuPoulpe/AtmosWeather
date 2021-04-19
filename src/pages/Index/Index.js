import SimpleCity from "../../components/SimpleCity/SimpleCity";
import "./Index.css";

const Index = () => {
	return (
		<div className="sky">
			<div className="cities-wrapper">
				<SimpleCity name="Paris"/>
				<SimpleCity name="Washington"/>
				<SimpleCity name="Venise"/>
				<SimpleCity name="Pékin"/>
				<SimpleCity name="Château-L'Abbaye"/>
				<SimpleCity name="Sidney"/>
				<SimpleCity name="Montréal"/>
				<SimpleCity name="Helsinki"/>
				<SimpleCity name="Moscou"/>
				<SimpleCity name="Luxembourg"/>
				<SimpleCity name="Vatican"/>
			</div>

			<div className="city-detail">

			</div>
		</div>
	);
};

export default Index;