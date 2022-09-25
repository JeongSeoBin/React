import PersonStore from "./PersonStore";
import TodoStore from "./TodoStore";

export default class RootStore {
  // constructor() {
  //     this.todoStore = new TodoStore();
  //     this.personStore = new PersonStore();
  // }

  // 서로의 store에 접근하기 위해 rootStore를 인자로 넘겨준다
  constructor() {
    this.todoStore = new TodoStore(this);
    this.personStore = new PersonStore(this);
  }
}
