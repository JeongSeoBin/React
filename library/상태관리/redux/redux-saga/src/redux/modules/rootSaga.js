import { all } from "@redux-saga/core/effects";
import {usersSaga} from "./users";

export default function* rootSaga() {
    // all effect: 등록까지 마친 사가함수를 모으는 기능
    yield all([usersSaga()])
}