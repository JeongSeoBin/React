import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
  start service worker
  런타임 중에 mock 정의를 실행하려면 애플리케이션 코드를 가져와야 한다
  그러나 mocking은 개발 지행적 기술이기 때문에 현재 환경에 따라 조건부로 service worker를 가져와 실행

  verify
  브라우저 콘솔에서 "[MSW] Mocking enabled." 확인하면 성공
*/

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/brower");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
