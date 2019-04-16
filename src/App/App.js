import React, { Component } from "react";
import { Main } from "../_pages/Main";

import { AppContainer } from "./App.style";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Main />
      </AppContainer>
    );
  }
}

export { App };
