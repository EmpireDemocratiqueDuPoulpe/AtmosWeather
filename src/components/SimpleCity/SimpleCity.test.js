import { shallow } from "enzyme";
import SimpleCity from "./SimpleCity.js";

describe("<SimpleCity/>", () => {
	it("renders without crashing", () => {
		const wrapper = shallow(<SimpleCity uid="" name="Paris"/>);
	});
});