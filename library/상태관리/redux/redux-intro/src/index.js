import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { addTodo } from "./redux/actions";

// 스토어 구독
const unsubscribe = store.subscribe(() => {
  // store 상태 리턴
  console.log(store.getState());
});

// 액션을 발생시킨다
// store 상태 변경
store.dispatch(addTodo("coding"));
// console.log('store', store.getState()) // ['coding']

store.dispatch(addTodo("eating"));
store.dispatch(addTodo("reading"));

// 구독 취소
unsubscribe();
// 구독을 취소했기 때문에 스토어 상태가 변경되어도 subscribe 인자로 등록된 함수 실행 안함
store.dispatch(addTodo("listening"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
