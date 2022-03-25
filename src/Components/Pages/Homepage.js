import Rows from "../Slider/Rows";
import Slideshow from "../Slideshow/Slideshow";
import requests from "../../Requests";
import Sprow from "../Sprow/Sprow";
import { useEffect, useState } from "react";
import { DefaultData } from "../../DefaultData";
import axios from "../../axios";
import { Sentry } from "react-activity";
import "react-activity/dist/library.css";

function Homepage() {
  const [movies, setMovies] = useState(DefaultData);
  // movie
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.popular);
      setMovies(request.data.results);
      return requests;
    }

    fetchData();
  }, [requests.popular]);

  return (
    <div>
      {movies.length < 15 ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sentry />
        </div>
      ) : (
        <>
          <Slideshow />
          <Rows title='NETFLIX ORIGINALS' fetchURL={requests.fethTrending} />
          <Rows title='UPCOMING' fetchURL={requests.upcaming} />
          <Rows title='POPULAR' fetchURL={requests.popular} />
          <Sprow
            title='NEW MOVIES'
            fetchURL={requests.popular}
            fetchURL2={requests.fethTrending}
            movies={movies}
          />
        </>
      )}
    </div>
  );
}

export default Homepage;
