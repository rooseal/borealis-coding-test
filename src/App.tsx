import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import borealisMaterialUiTheme from "poc-material-ui-theme";

import CharacterView from "./CharacterView";

// Used createTheme instead of createMuiTheme because of deprecation issue with the latter
const muiTheme = createTheme(borealisMaterialUiTheme);

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CharacterView />
    </ThemeProvider>
  );
}

export default App;
