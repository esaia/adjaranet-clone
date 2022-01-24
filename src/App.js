import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Pages/Homepage";
import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path={"/"}>
        <Homepage />
      </Route>

      <Route path={"/page1"}>
        <Page1 />
      </Route>

      <Route path={"/page2"}>
        <Page2 />
      </Route>
    </Router>
  );
}

export default App;
