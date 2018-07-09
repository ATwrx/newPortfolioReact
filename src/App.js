import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MenuBar } from "./components/";
import { SwitchContainer } from "./containers/";

const App = () => (
  <Router>
    <div>
      <MenuBar />
      <SwitchContainer />
    </div>
  </Router>
);

export default App;
