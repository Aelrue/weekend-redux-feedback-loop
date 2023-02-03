import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

// components
import FeelingsForm from "../Feelings/Feelings";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route path="/Feelings">
          <FeelingsForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
