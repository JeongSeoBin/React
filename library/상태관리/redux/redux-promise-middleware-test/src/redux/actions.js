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

const GET_USERS = "GET_USERS";
// 미들웨어를 통과하면서 변조된 타입
export const GET_USERS_PENDING = "GET_USERS_PENDING"; // promise객체가 생성된 직후
export const GET_USERS_FULFILLED = "GET_USERS_FULFILLED"; // 정상적으로 완료
export const GET_USERS_REJECTED = "GET_USERS_REJECTED"; // 에러 발생시

export function getUsersPromise() {
  // { type: 변조된 타입, payload: promise처리결과}
  return {
    type: GET_USERS,
    payload: async () => {
      const response = await axios.get("https://api.github.com/users");
      return response.data;
    },
  };
}
