import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";

// 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// 사가 미들웨어를 리덕스 미들웨어로 등록
const store = createStore(reducer, applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
    )
);

// 사가 미들웨어 실행
sagaMiddleware.run(rootSaga);

export default store;