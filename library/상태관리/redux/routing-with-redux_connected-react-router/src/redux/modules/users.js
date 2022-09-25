import axios from 'axios';

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

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

// redux-thunk
export function getUsersThunk() {
    return async (dispatch, getState, {history}) => {
        try {
            dispatch(getUsersStart())

            await sleep(2000)
            const response = await axios.get("https://api.github.com/users")

            dispatch(getUsersSuccess(response.data))
            history.push("/")

        } catch (error) {
            dispatch(getUsersFail(error));
        }
    }
}