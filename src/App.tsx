import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import borealisMaterialUiTheme from 'poc-material-ui-theme';

import logo from './logo.svg';
import './App.css';

// Used createTheme instead of createMuiTheme because of deprecation issue with the latter
const muiTheme = createTheme(borealisMaterialUiTheme);

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
