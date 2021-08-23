import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeRouter, ExercisesRouter } from "./routers";
import "./App.css"
function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <Switch>
          <Route
            path="/exercises"
            name="exercises"
            render={(props) => <ExercisesRouter {...props} />}
          />
          <Route
            path="/"
            name="homePage"
            render={(props) => <HomeRouter {...props} />}
          />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
}

export default App;
