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
import UnderstandingForm from "../Understanding/Understanding";
import SupportForm from "../Support/Support";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback</h1>
          <h4>Tell us how you're doing!</h4>
        </header>

        <Route path="/Feelings">
          <FeelingsForm />
        </Route>
        <Route path="/Understanding">
          <UnderstandingForm />
        </Route>
        <Route path="/Support">
          <SupportForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
