import LoginButton from "../components/LoginButton";

export default function Login(props) {
  // route에서 지정한 컴포넌트의 props에서는 history객체를 얻을 수 있다
  // console.log(props);

  //   function login() {
  //     setTimeout(() => {
  //       //페이지를 이동
  //       props.history.push("/");
  //     }, 1000);
  //   }

  return (
    <div>
      <h2>로그인 페이지입니다</h2>
      {/* Route에서 지정한 컴포넌트에서 페이지 이동처리 할 경우, 넘겨받은 props의 history객체의 함수를 활용 */}
      {/* <button onClick={login}>로그인 하기</button> */}

      {/* 자식 컴포넌트에서 페이지 이동 처리를 할 경우 */}
      {/* 1. 한 단계 아래 자식 컴포넌트일 경우, 넘겨 받은 props를 그대로 자식 컴포넌트에게 넘긴다 */}
      {/* <LoginButton {...props} /> */}

      {/* 2. 여러 단계 아래 자식 컴포넌트일 경우, HOC 또는 HOOK */}
      <LoginButton {...props} />
    </div>
  );
}
