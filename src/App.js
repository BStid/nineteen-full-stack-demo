import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import routes from "./routes";
import store from "./redux/store";
import { Provider } from "react-redux";
import NavBar from "./Components/NavBar/NavBar";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <div>{routes}</div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
