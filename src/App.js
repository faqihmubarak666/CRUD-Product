import React, { Component } from "react";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContainerGoods from "./pages/ContainerGoods";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<SignIn />} />
            <Route path="/list" element={<ContainerGoods />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
