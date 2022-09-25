import { withRouter } from "react-router-dom";

// 자식 컴포넌트에서 페이지 이동 처리를 할 경우 - 한 단계 아래 자식 컴포넌트일 경우
// export default function LoginButton(props) {
//   console.log(props);

//   function login() {
//     setTimeout(() => {
//       props.history.push("/");
//     }, 1000);
//   }

//   return <button onClick={login}>로그인</button>;
// }

// 자식 컴포넌트에서 페이지 이동 처리를 할 경우 - 여러 단계 아래 자식 컴포넌트일 경우
export default withRouter(function LoginButton(props) {
  console.log(props);

  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }

  return <button onClick={login}>로그인</button>;
});
