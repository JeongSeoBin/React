import { inject, observer } from "mobx-react";
import React, { useContext } from "react";
import Button from "./components/Button";
import PersonContext from "./contexts/PersonContext";
import autobind from "autobind-decorator";
import { action, computed, runInAction } from "mobx";
import PersonContainer from "./containers/PersonContainer";
import TodoContainer from "./containers/TodoContainer";
import TodoFormContainer from "./containers/TodoFormContainer";

/*
  app컴포넌트를 observer로 설정
  PersonStore observable을 관찰 -> context로 관리되고 있는 observable을 consumer
*/

/* observe - observer(<컴포넌트>) 방식 & 함수형 컴포넌트에서 context consumer*/
// function App() {
//   // context로 관리되고 있는 observable을 consumer/관찰
//   const personStore = useContext(PersonContext);

//   // 관찰하고 있는 obsevable 변경
//   function click() {
//     personStore.plus();
//   }

//   return (
//     <div>
//       <Button />
//       <p>{personStore.age}</p>
//       <button onClick={click}>click</button>
//     </div>
//   );
// }

// export default observer(App);

/* observe - @observer 방식 & 클래스 컴포넌트에서 context consumer */
// @observer
// class App extends React.Component {
//   static contextType = PersonContext;

//   @autobind
//   click() {
//     const personStore = this.context;
//     personStore.plus();
//   }

//   render() {
//     const personStore = this.context;

//     return (
//       <div>
//         <Button />
//         <p>{personStore.age}</p>
//         <button onClick={this.click}>click</button>
//       </div>
//     );
//   }
// }

// export default App;

/* observer - computed를 이용해 매번 랜더링되지 않게 함 - store에서 @computed를 이용하는 방식 */
// @observer
// class App extends React.Component {
//   static contextType = PersonContext;

//   @autobind
//   click() {
//     const personStore = this.context;
//     personStore.plus();
//   }

//   render() {
//     console.log("render");
//     const personStore = this.context;

//     return (
//       <div>
//         <Button />
//         {/* observable항목을 바로 랜더링하기 때문에 observable이 변경될때마다 observe가 매번 재랜더링된다 */}
//         {/* <p>{personStore.age10}</p> */}
//         {/* computed항목을 랜더하게 되면 observable항목이 변경될땐 재랜더링되지 않고 cpmputed항목이 변경될때만 재랜더링된다 */}
//         <p>{personStore.age10_computed}</p>
//         <button onClick={this.click}>click</button>
//       </div>
//     );
//   }
// }

// export default App;

/* observer - computed를 이용해 매번 랜더링되지 않게 함 - observe에서 computed()를 이용하는 방식 */
// function App() {
//   const personStore = useContext(PersonContext);
//   const age10_computed = computed(() => {
//     return Math.floor(personStore.age / 10) * 10;
//   }).get();

//   function click() {
//     personStore.plus();
//   }

//   return (
//     <div>
//       <Button />
//       <p>{age10_computed}</p>
//       <button onClick={click}>click</button>
//     </div>
//   );
// }

// export default observer(App);

/* action */
// function App() {
//   const personStore = useContext(PersonContext);

//   console.log('render',personStore.name, personStore.age)

//   // function click() {
//   //   setTimeout(() => {
//   //     // age가 변경될때, name이 변경될때 2번 연속으로 리랜더링이 일어난다
//   //     // 이런식으로 2번 리랜더링이 일어아지 않도록 해야한다
//   //     // - action, runInAction, @action을 이용하는 방법이 있다
//   //     personStore.age = 40;
//   //     personStore.name = 'seobin';
//   //   }, 500)
//   // }

//   function click() {
//     // action을 이용하는 방법
//     // setTimeout(action(()=> {
//     //   personStore.age = 10;
//     //   personStore.name = 'seobin';
//     // }), 500)

//     // runInAction()을 이용하는 방법
//     // setTimeout(() => {
//     //   runInAction(() => {
//     //     personStore.age = 10;
//     //     personStore.name = 'seobin';
//     //   })
//     // }, 500)

//     // @action을 사용하는 방법
//     setTimeout(() => {
//       personStore.testAction();
//     }, 500)
//   }

//   return (
//     <div>
//       <Button />
//       <p>{personStore.age} {personStore.name}</p>
//       <button onClick={click}>click</button>
//     </div>
//   );
// }

// export default observer(App);

/* provider와 inject - 함수형 컴포넌트 */
// function App({personStore}) {

//   return (
//     <div>
//       <p>{personStore.age} {personStore.name}</p>
//     </div>
//   );
// }

// export default inject('personStore')(observer(App));

/* provider와 inject - 클래스 컴포넌트 */
// @inject('personStore')
// @observer
// class App extends React.Component {

//   render() {
//     console.log("render");
//     const {personStore} = this.props;

//     return (
//       <div>
//         <p>{personStore.age} {personStore.name}</p>
//       </div>
//     );
//   }
// }

// export default App;

// @inject
// @observer
// class AppContainer extends React.Component {

//   render() {
//     const {personStore} = this.props;

//     return <App age={personStore.age} name={personStore.name}/>
//   }
// }

// export default AppContainer;

/* 여러 store를 사용하는 경우 */
function App() {
  return (
    <div>
      <PersonContainer />
      <TodoContainer />
      <TodoFormContainer />
    </div>
  );
}

export default App;
