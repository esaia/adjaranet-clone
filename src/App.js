import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import MobileHeader from "./Components/Header/MobileHeader";
import Homepage from "./Components/Pages/Homepage";
import Movie from "./Components/Pages/Movie";
import PageNotFound from "./Components/Pages/PageNotFound";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <Router forceRefresh>
      {windowWidth > 800 ? <Header /> : <MobileHeader />}
      <Route exact path={"/"}>
        <Homepage />
      </Route>

      <Route path={"/movie/:id"}>
        <Movie />
      </Route>

      <Route path={"/404"}>
        <PageNotFound />
      </Route>
    </Router>
  );
}

export default App;
