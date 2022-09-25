import React from "react";
import renderWithRedux from "../renderWithRedux";
import CounterContainer from "./CounterContainer";
import { fireEvent, screen } from "@testing-library/react";

describe("<CounterContainer />", () => {
  it("shows the default number 0", () => {
    renderWithRedux(<CounterContainer />);
    screen.getByText("0");
  });

  it("should increase when +1 is clicked", () => {
    renderWithRedux(<CounterContainer />);
    fireEvent.click(screen.getByText("+1"));
    screen.getByText("1");
  });

  it("should decrease when -1 is called", () => {
    renderWithRedux(<CounterContainer />);
    const number = screen.getByText("0");
    fireEvent.click(screen.getByText("-1"));
    expect(number).toHaveTextContent("-1");
  });
});

// https://learn-react-test.vlpt.us/#/08-redux-test?id=%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8-%ec%83%88%eb%a1%9c-%eb%a7%8c%eb%93%a4%ea%b8%b0
