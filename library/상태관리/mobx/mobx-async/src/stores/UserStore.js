import {
  action,
  flow,
  makeAutoObservable,
  observable,
  runInAction,
} from "mobx";
import axios from "axios";

export default class UserStore {
  @observable
  state = {
    users: [],
    loading: false,
    error: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  @action
  pending() {
    this.state.loading = true;
    this.state.error = null;
  }

  @action
  success(users) {
    this.state.users = users;
    this.state.loading = false;
    this.state.error = null;
  }

  @action
  fail(error) {
    this.state.loading = false;
    this.state.error = error;
  }

  /* store에서 비동기 처리 함수 만들기 */
  async getUsers() {
    try {
      runInAction(() => {
        this.state.loading = true;
        this.state.error = null;
      });

      const response = await axios.get("https://api.github.com/users");

      runInAction(() => {
        this.state.users = response.data;
        this.state.loading = false;
        this.state.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.state.loading = false;
        this.state.error = error;
      });
    }
  }

  @flow
  *getUsersFlow() {
    try {
      this.state.loading = true;
      this.state.error = null;

      const response = yield axios.get("https://api.github.com/users");

      this.state.users = response.data;
      this.state.loading = false;
      this.state.error = null;
    } catch (error) {
      this.state.loading = false;
      this.state.error = error;
    }
  }
}
