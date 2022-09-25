import { action, computed, makeObservable, observable } from "mobx";

class PersonStore {
  @observable
  name = "Anana";

  @observable
  age = 39;

  // age가 변경될때마다 리랜더링
  get age10() {
    return Math.floor(this.age / 10) * 10;
  }

  // age의 십의 자리가 변경될때만 computed가 변경되어 리랜더링
  @computed
  get age10_computed() {
    return Math.floor(this.age / 10) * 10;
  }

  // age변경할때, name변경할때 각각 리랜더링을 하지않고
  // action이 일어날때 1번 리랜더링한다
  @action
  testAction() {
    this.age = 10;
    this.name = "seobin";
  }

  // constructor() {
  //   makeObservable(this);
  // }

  // 다른 store의 데이터에 접근하기 위해 rootstore를 전달받는다
  constructor(rootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  plus() {
    console.log("this", this);
    this.age++;
    // rootStore를 통해 다른 store를 변경한다
    this.rootStore.todoStore.todos = [];
  }
}

export default PersonStore;
