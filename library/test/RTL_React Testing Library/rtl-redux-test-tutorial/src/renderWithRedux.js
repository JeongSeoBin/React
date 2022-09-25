import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

function renderWithRedux(ui, initialState) {
  const store = createStore(rootReducer, initialState);
  const view = render(<Provider store={store}>{ui}</Provider>);

  return {
    ...view,
    store,
  };
}

export default renderWithRedux;
