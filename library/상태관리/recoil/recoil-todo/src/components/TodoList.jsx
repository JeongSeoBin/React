import { useRecoilValue } from "recoil";
import { filteredTodoListState, todoListState } from "../app";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilter from "./TodoListFilter";
import TodoListStats from "./TodoListStats";

export default function TodoList() {
  // atom의 항목을 일기 위해 useRecoilValue() 사용
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoItemCreator />
      <TodoListFilter />
      <TodoListStats />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
