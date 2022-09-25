import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "코딩",
      done: true,
    },
    {
      id: 2,
      text: "잠자기",
      done: false,
    },
  ];

  it("render todos properly", () => {
    render(<TodoList todos={sampleTodos} />);
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });

  it("calls onToggle and onRemove", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();

    render(
      <TodoList onToggle={onToggle} onRemove={onRemove} todos={sampleTodos} />
    );

    fireEvent.click(screen.getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    fireEvent.click(screen.getAllByText("삭제")[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
