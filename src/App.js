import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import MobileHeader from "./Components/Header/MobileHeader";
import Homepage from "./Components/Pages/Homepage";
import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    console.log("i rerendered");
    setWindowWidth(window.innerWidth);
  };
  return (
    <Router>
      {windowWidth > 800 ? <Header /> : <MobileHeader />}
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
