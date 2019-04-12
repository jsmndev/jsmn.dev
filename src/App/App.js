import React, { Component } from "react";
import { MainPage } from "../MainPage";

import { AppContainer } from "./App.style";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <MainPage />
      </AppContainer>
    );
  }
}

export { App };
