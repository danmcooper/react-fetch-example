import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Authors from "./components/authors";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Authors />
      </React.Fragment>
    );
  }
}

export default App;
