import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MobileHeader from "./Components/Header/MobileHeader";
import Homepage from "./Components/Pages/Homepage";
import Movie from "./Components/Pages/Movie";
import PageNotFound from "./Components/Pages/PageNotFound";

import ProgressBar from "@badrap/bar-of-progress";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const progress = new ProgressBar({
    size: 2,
    color: "#1683c6",
    style: "progressbar",
    delay: 100,
  });

  useEffect(() => {
    progress.start();
  });

  setTimeout(() => {
    progress.finish();
  }, 1000);

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
      <Switch>
        <Route exact path={"/"}>
          <Homepage />
        </Route>

        <Route path={"/movie/:id"}>
          <Movie />
        </Route>

        <Route path={"/404"}>
          <PageNotFound />
        </Route>

        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
