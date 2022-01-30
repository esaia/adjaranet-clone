import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import requests from "../../Requests";
import axios from "../../axios";
import "./Movie.css";
import { FaSearch } from "react-icons/fa";
import SearchBox from "../Slideshow/SearchBox";
import Search from "../Slideshow/Search";
import YouTube from "react-youtube";
function Movie(props) {
  const [movies, setMovie] = useState([]);
  const [video, setVideo] = useState([]);

  const id = parseInt(props.match.params.id);
  console.log(video);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=26cedb780e2fe93c9340b36dac2c268c&language=en-US`
      );
      setVideo(request.data);
      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=26cedb780e2fe93c9340b36dac2c268c&language=en-US`
      );
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, []);

  if (!id) {
    return <Redirect to={{ pathname: "/404" }} />;
  }
  const opts = {
    width: "900",
    height: "500",
  };
  return (
    <div>
      <div className='speacer'></div>
      <div className='black-spacer'>
        <Search />
      </div>

      <div className='video-div'>
        <img
          src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
          alt='cover-image'
          className='cover-image'
        />

        <div className='yt-video'>
          <YouTube
            videoId={
              video.results && video.results[video.results.length - 1].key
            }
          />
        </div>
        <div className='bottom-v1'></div>
      </div>
      {/* details */}
      <img
        src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
        alt=''
        style={{ width: "200px" }}
      />
      <img
        src={`https://image.tmdb.org/t/p/original/${movies?.poster_path}`}
        alt=''
        style={{ width: "200px" }}
      />

      <h1>
        <b className='bold'>Movie Name:</b> {movies?.title}
      </h1>
      <h1>
        <b className='bold'>Budget:</b> {movies?.budget}
      </h1>
      <h1>
        <b className='bold'>genres:</b>
      </h1>
      {movies.genres &&
        movies?.genres.map((genre, index) => {
          return (
            <div key={index}>
              <h1>{genre?.name}</h1>
            </div>
          );
        })}

      <h1>
        <b className='bold'> Description: </b>
        {movies.overview}
      </h1>

      <h1>
        video: {video.results && video.results[video.results.length - 1].key}
      </h1>
    </div>
  );
}

export default withRouter(Movie);
