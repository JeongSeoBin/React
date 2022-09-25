import { shallow } from "enzyme";

/* simulating event test */
describe("<GattorButton />", () => {
  describe("onClick()", () => {
    test("successfully calls the onClick handler", () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(
        <GattorButton onClick={mockOnClick} label="Eat Food" />
      );
      const component = wrapper.dive();
      component.find("button").simulate("click");
      expect(mockOnClick.mock.calls.length).toEqual(1);
    });
  });
});
