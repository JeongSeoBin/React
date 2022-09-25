import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm/>", () => {
  it("has input and a button", () => {
    render(<TodoForm />);
    screen.getByPlaceholderText("할 일을 입력하세요");
    screen.getByText("등록");
  });

  it("changes input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, {
      target: {
        value: "코딩 배우기",
      },
    });
    expect(input.getAttribute("value")).toBe("코딩 배우기");
  });

  it("calls onInsert and clear input", () => {
    const onInsert = jest.fn();
    render(<TodoForm onInsert={onInsert} />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const button = screen.getByText("등록");

    fireEvent.change(input, {
      target: {
        value: "개발",
      },
    });

    fireEvent.click(button);

    expect(onInsert).toBeCalledWith("개발");
    expect(input.getAttribute("value")).toBe("");
  });
});
