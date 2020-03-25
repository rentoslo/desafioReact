import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
        </Route>
      </Switch>
    </Router>
  )
}