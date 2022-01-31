import React, { useState, useEffect } from "react";
import Rows from "../Slider/Rows";
import Slideshow from "../Slideshow/Slideshow";
import requests from "../../Requests";
function Homepage() {
  return (
    <div>
      <Slideshow />
      <Rows title='NETFLIX ORIGINALS' fetchURL={requests.fethTrending} />
      <Rows title='Top rated' fetchURL={requests.upcaming} />
      <Rows title='Comedy' fetchURL={requests.popular} />
    </div>
  );
}

export default Homepage;
