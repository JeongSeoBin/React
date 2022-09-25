import axios from 'axios';
import {put, call, delay, takeEvery} from "redux-saga/effects";
import {push} from "connected-react-router"

// 액션 타입
const GET_USERS_START = "ducks-pattern/users/GET_USERS_START";
const GET_USERS_SUCCESS = "ducks-pattern/users/GET_USERS_SUCCESS";
const GET_USERS_FAIL = 'ducks-pattern/users/GET_USERS_FAIL';

// 액션 생성 함수
export function getUsersStart() {
    return {
        type: GET_USERS_START
    }
}

export function getUsersSuccess(data) {
    return {
        type: GET_USERS_SUCCESS,
        data
    }
}

export function getUsersFail(error) {
    return {
        type: GET_USERS_FAIL,
        error
    }
}

// 초기값
const initialState = {
    loading: false,
    data: [],
    error: null
} 

// 리듀서
export default function reducer(state=initialState, action) {
    if(action.type === GET_USERS_START) {
        console.log('GET_USERS_START')
        return {
            ...state,
            loading: true,
            error: null
        }
    }

    if(action.type === GET_USERS_SUCCESS) {
        console.log('GET_USERS_SUCCESS ')
        return {
            ...state,
            loading: false,
            data: action.data
        }
    }

    if(action.type === GET_USERS_FAIL) {
        console.log('GET_USERS_FAIL')
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
       
    return state
}

const GET_USERS_SAGA_START = "GET_USERS_SAGA_START ";

// redux-saga
function* getUsersSaga(action) {
    try {
        // put effect: plain action을 디스패치하는 기능을 가지고 있다
        yield put(getUsersStart())

        // delay effect: 지정한 시간만큼 delay하는 기능을 가지고 있다
        yield delay(2000);

        // call effect: promise형태의 함수를 실행하는 기능을 가지고 있다
        // call(함수이름, 함수의 매개변수)
        const response = yield call(axios.get, "https://api.github.com/users")

        yield put(getUsersSuccess(response.data))

        // connected-react-router에서 제공하는 push() 액션 생성함수를 디스패치
        yield put(push("/"));

    } catch (error) {
        yield put(getUsersFail(error))
    }
}

// 액션 생성함수
export function getUsersSagaStart() {
    return {
        type: GET_USERS_SAGA_START
    }
}

export function* usersSaga() {
    // takeEvery effect: 작성한 사가 미들웨어 함수를 등록하는 기능을 가지고 있다
    // takeEvery(액션타입, 사가함수): 어떤 액션 타입에 의해 어떤 사가함수가 실행될 것인지
    yield takeEvery(GET_USERS_SAGA_START, getUsersSaga)
}