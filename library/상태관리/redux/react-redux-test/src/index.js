import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReduxContext from "./contexts/ReduxContext.js";
import store from "./redux/store.js";
import { Provider } from "react-redux";

/* react-redux 안쓰고 redux와 react 연결하기  */
// ReactDOM.render(

//     <React.StrictMode>
//       <ReduxContext.Provider value={store}>
//         <App/>
//       </ReduxContext.Provider>
//     </React.StrictMode>
//   ,document.getElementById('root')
// );

/* reatc-redux를 이용하여 redux와 react 연결하기 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
