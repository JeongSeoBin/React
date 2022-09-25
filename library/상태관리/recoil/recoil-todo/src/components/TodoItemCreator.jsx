import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../app.js";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  // todoListState 내용을 업데이트하기 위해 useSetRecoilState() 사용
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
