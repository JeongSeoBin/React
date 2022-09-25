import axios from 'axios';

// 액션 타입
const GET_USERS_START = "ducks-pattern/users/GET_USERS_START";
const GET_USERS_SUCCESS = "ducks-pattern/users/GET_USERS_SUCCESS";
const GET_USERS_FAIL = 'ducks-pattern/users/GET_USERS_FAIL';
// redux-promise-middelware
const GET_USERS = 'ducks-pattern/users/GET_USERS';
const GET_USERS_PENDING = 'ducks-pattern/users/GET_USERS_PENDING'
const GET_USERS_FULFILLED = 'ducks-pattern/users/GET_USERS_FULFILLED'
const GET_USERS_REJECTED = 'ducks-pattern/users/GET_USERS_REJECTED'

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
    if(action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
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

    if(action.type === GET_USERS_FULFILLED) {
        console.log('GET_USERS_FULFILLED')
        return {
            ...state,
            loading: false,
            data: action.payload
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

    if(action.type === GET_USERS_REJECTED) {
        console.log('GET_USERS_REJECTED')
        return {
            ...state,
            loading: false,
            error: action.payload
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
            console.log('history', history)
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

// redux-promise-middelware
export function getUsersPromise() {
    console.log('getUsersPromise 실행')
    return {
        type: GET_USERS,
        // 미들웨어를 통과할때 변조한 타입과 promise를 처리결과를 보내준다
        // reducer에서 변조된 action type에 따라 promise결과를 이용하여 상태변경하는 로직을 작성해야한다 
        payload: async () => {
            const response = await axios.get("https://api.github.com/users")
            console.log('response', response)
            return response.data
        }
    }
}