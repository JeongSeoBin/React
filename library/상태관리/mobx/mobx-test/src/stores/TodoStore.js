import { observable, action, makeObservable } from "mobx";

export default class TodoStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  todos = [];

  @action
  add(text) {
    this.todos.push({ text, done: false });
  }
}
