import React from "react";
import { RecoilRoot, atom, selector } from "recoil";
import TodoList from "./components/TodoList";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

// 필터링된 todo list를 구현하기 위한 필터 기준
// Show All, Show Completed, Show UnCompleted
export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

// 파생 상태: 필터링된 todoList
export const filteredTodoListState = selector({
  key: "filteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

// 파생상태: todo list 통계
export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todolist = get(todoListState);
    const totalNum = todolist.length; // 항목의 총 개수
    const totalCompletedNum = todolist.filter((item) => item.isComplete).length; // 완료된 항목의 총 개수
    const totalUncompletedNum = todolist.filter(
      (item) => !item.isComplete
    ).length; // 완료되지 않은 항목의 총 개수
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum; // 완료된 항목의 백분율

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

export default function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
