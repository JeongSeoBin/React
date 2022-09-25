import React, { Component } from "react";
import ControlledComponent from "./components/ControlledComponent";
import UnCotrolledComponent from "./components/UnControlledComponent";

class App extends Component {
  render() {
    return (
      <>
        <ControlledComponent />
        <UnCotrolledComponent />
      </>
    );
  }
}

export default App;
