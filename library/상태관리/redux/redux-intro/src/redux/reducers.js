import { ADD_TODO } from "./actions";

// state
// ['코딩', '밥먹기']
const initialState = [];

export function todoApp(prevState = initialState, action) {
  // 초기값 설정
  // if(prevState === undefined) {
  //     return []
  // }

  if (action.type === ADD_TODO) {
    return [...prevState, action.todo];
  }

  // immutable한 성질을 어김
  // 아무런 변경이 없음
  return prevState;
}
