import "./App.css";
import Home from "./views/Home";
import Employees from "./views/Employees";
import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { reducer, initialState } from "./state/reducer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

export const AppContext = React.createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useReducer(reducer, initialState);

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/employee-list">
              <Employees />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
