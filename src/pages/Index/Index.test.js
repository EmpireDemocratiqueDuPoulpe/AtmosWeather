import { expect } from "chai";
import { shallow } from "enzyme";
import Index from "./Index.js";
import AddSimpleCity from "../../components/SimpleCity/AddSimpleCity/AddSimpleCity";

describe("<Index/>", () => {
	it("should renders without crashing", () => {
		shallow(<Index/>);
	});
	
	it("should contains <AddSimpleCity/>", () => {
		const wrapper = shallow(<Index/>);

		//expect(wrapper).to.contains(<AddSimpleCity uid="" onCityAdd={() => {}}/>);
		expect(wrapper.exists(AddSimpleCity)).to.equal(true);
	});
});