import React, { Component } from "react";
import { MainPage } from "../MainPage";
import UnderConstruction from "./UnderConstruction";

import { AppContainer } from "./App.style";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <UnderConstruction />
        <MainPage />
      </AppContainer>
    );
  }
}

export { App };
