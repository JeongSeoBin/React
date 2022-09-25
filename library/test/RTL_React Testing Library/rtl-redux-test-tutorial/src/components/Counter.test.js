import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter/>", () => {
  const setup = (props = {}) => {
    const initialProps = { number: 0 };
    const view = render(<Counter {...initialProps} {...props} />);
    const number = screen
      .getByText(props.number || initialProps.number)
      .toString();
    const plusButton = screen.getByText("+1");
    const minusButton = screen.getByText("-1");

    return {
      ...view,
      number,
      plusButton,
      minusButton,
    };
  };

  it("should have number and two buttons", () => {
    const { number, plusButton, minusButton } = setup();
    expect(number).toBeTruthy();
    expect(plusButton).toBeTruthy();
    expect(minusButton).toBeTruthy();
  });

  it("should render number props", () => {
    setup({ number: 7 });
    screen.getByText("7");
    // expect(number).toHaveTextContent("7");
  });

  it("should call onIncrese and onDecrease", () => {
    const onIncrease = jest.fn();
    const onDecrease = jest.fn();
    const { plusButton, minusButton } = setup({
      onIncrease,
      onDecrease,
    });

    fireEvent.click(plusButton);
    expect(onIncrease).toBeCalled();

    fireEvent.click(minusButton);
    expect(onDecrease).toBeCalled();
  });
});
