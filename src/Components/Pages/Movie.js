import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "../../axios";
import "./Movie.css";

import Search from "../Slideshow/Search";
import YouTube from "react-youtube";
import Rows from "../Slider/Rows";
import requests from "../../Requests";
function Movie(props) {
  const [movies, setMovie] = useState([]);
  const [video, setVideo] = useState([]);

  const id = parseInt(props.match.params.id);
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

  console.log(movies.production_countries);
  console.log(movies);
  return (
    <div>
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
              (video.results && video.results[video.results.length - 2]?.key) ||
              (video.results && video.results[video.results.length - 1]?.key)
            }
          />
        </div>
        <div className='bottom-v1'>
          <h2>{movies?.title}</h2>
          <div className='imdb-container'>
            <h3 className='imdb-box'>IMDB</h3>
            <p>{movies.vote_average}</p>
            <h3 className='triler-box'>Trailer</h3>
          </div>
        </div>
      </div>
      {/* details */}
      <div className='details-section'>
        <div className='left-det'>
          <img
            src={`https://image.tmdb.org/t/p/original/${movies?.poster_path}`}
            alt='poster-image'
          />
          <button>! Report a problem</button>
        </div>
        <div className='right-det'>
          <div className='box'>
            <div className='movie-details-div'>
              <h4>Relased Date:</h4>
              <p>{movies.release_date}</p>
            </div>
            <div className='movie-details-div'>
              <h4>Country:</h4>
              {movies.production_countries &&
                movies.production_countries.map((item, index) => {
                  return <p key={index}>{item?.name}</p>;
                })}
            </div>
            <div className='movie-details-div'>
              <h4>Genre:</h4>
              {movies.genres &&
                movies?.genres.map((genre, index) => {
                  return <p key={index}>{genre?.name},</p>;
                })}
            </div>
            <div className='movie-details-div'>
              <h4>Duration:</h4>
              <p>1 hour 3 minute</p>
            </div>
            <hr className='line' />
            <h4 className='description-title'>Description: </h4>
            <p className='description'>{movies.overview}</p>
          </div>
        </div>
      </div>

      <Rows
        title='Similar'
        fetchURL={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=26cedb780e2fe93c9340b36dac2c268c&language=en-US&page=1`}
      />
    </div>
  );
}

export default withRouter(Movie);
