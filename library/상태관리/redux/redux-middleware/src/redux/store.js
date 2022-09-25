import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducer";

function middleware1(store) {
  /* 
    next: 다음 미들웨어를 지칭 
    action => {
        console.log('middleware2', 2); // 2
        const returnValue = next(action);
        console.log('middleware2', 3); // 3
        return returnValue
    }
  */
  return (next) => {
    return (action) => {
      console.log("middleware1", 2); // 1: middleware1 실행
      const returnValue = next(action); // 다음 미들웨어 실행
      console.log("middleware1", 3); // 4
      return returnValue;
    };
  };
}

function middleware2(store) {
  // next: 다음 미들웨어를 지칭, 없을 시 dispatch(action)
  return (next) => {
    return (action) => {
      console.log("middleware2", 2); // 2
      const returnValue = next(action); // 액션 발생
      console.log("middleware2", 3); // 3
      return returnValue; // middleware1으로 리턴
    };
  };
}

const store = createStore(reducer, applyMiddleware(middleware1, middleware2));

export default store;
