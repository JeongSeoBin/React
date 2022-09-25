import axios from "axios";

export const GET_USERS_START = "GET_USERS_START"; // 깃헙 api 호출 시작
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"; // 깃헙 api 호출 성공
export const GET_USERS_FAIL = "GET_USERS_FAIL"; // 깃헙 api 호출 실패

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// thunk middleware 함수
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());

      const response = await axios.get("https://api.github.com/users");

      dispatch(getUsersSuccess(response.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}
