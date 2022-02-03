import React, { useState, useEffect } from "react";
import Rows from "../Slider/Rows";
import Slideshow from "../Slideshow/Slideshow";
import requests from "../../Requests";
import Sprow from "../Sprow/Sprow";
function Homepage() {
  return (
    <div>
      <Slideshow />
      <Rows title='NETFLIX ORIGINALS' fetchURL={requests.fethTrending} />
      <Rows title='UPCOMING' fetchURL={requests.upcaming} />
      <Rows title='POPULAR' fetchURL={requests.popular} />
      <Sprow title='NEW MOVIES' fetchURL={requests.popular} />
    </div>
  );
}

export default Homepage;
