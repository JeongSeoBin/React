import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { autorun, makeObservable, observable } from "mobx";
import PersonContext from "./contexts/PersonContext";
import PersonStore from "./stores/PersonStore";
import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";

//////////////////////////////////////////////////////////////////////////////
/* observable 만들고 autorun()을 통해 observable변경에 따른 observer 재실행을 확인한다 */

/* observable - observable(<value>) 방식 */
// const isLogin = observable(true);
// const person = observable({
//   name: "mark",
//   age: 10,
// });

/* observable - @observable 방식 */
// class PersonStore {
//   @observable
//   name = "Anana";

//   @observable
//   age = 39;

//   // 클래스가 변경되었을때 반응하기 위해
//   constructor() {
//     makeObservable(this);
//   }

//   plus() {
//     this.age++;
//   }
// }

/* observer */
// autorun: observer 역할을 test할 수 있는 함수
// 최초 설정될때 observable의 초기값으로 설정
// autorun(() => {
//   console.log(isLogin.get());
//   console.log(person); // proxy 객체 출력
//   console.log(person.name);

//   console.log(personStore.age);
// });

/* observable 변경 */
// observalble이 변경되었으므로 observer가 실행
// isLogin.set(false);
// person.age = 40;
// personStore.age = 34;

// setInterval(() => {
//   personStore.age++;
// }, 1000);

// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//////////////////////////////////////////////////////////////////////////

/* 전역으로 관리하는 observable(store) - 직접 context 처리 */
// const personStore = new PersonStore();

// ReactDOM.render(
//   <React.StrictMode>
//     <PersonContext.Provider value={personStore}>
//       <App />
//     </PersonContext.Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

/* 전역으로 관리하는 observable(store) - provide와 inject */
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider personStore={personStore}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//////////////////////////////////////////////////////////////////////
/* action */

// ReactDOM.render(
//   <React.StrictMode>
//     <PersonContext.Provider value={personStore}>
//       <App />
//     </PersonContext.Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//////////////////////////////////////////////////////////////////////
/* 여러 store 이용하기 */
const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
