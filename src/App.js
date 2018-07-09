import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { MenuBar } from "./components/";
import { SwitchContainer } from "./containers/";

const AppWrapper = styled.div`
  display: grid;
`;
const App = () => (
  <Router>
    <div>
      <MenuBar />
      <SwitchContainer />
    </div>
  </Router>
);

export default App;
