import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";


import GatorMenu from "../../components/GatorMenu";

/* render test */
describe("<GatorMenu />", () => {
  describe("render()", () => {
    test("renders the componet", () => {
      const wrapper = shallow(<GatorMenu />);
      const component = wrapper.dive();
    });
    expect(toJson(component)).toMatchSnapshot();
  });
});
