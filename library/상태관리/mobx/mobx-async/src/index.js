import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RootStore from "./stores/RootStore";

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
