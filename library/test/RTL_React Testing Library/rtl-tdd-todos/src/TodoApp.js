import React, { useCallback, useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const nextId = useRef(3);
  const [todos, setTodos] = useState([
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
  ]);

  const onInsert = useCallback(
    (text) => {
      setTodos([...todos, { id: nextId.current, text, done: false }]);
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
