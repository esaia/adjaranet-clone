import React, { useEffect, useState, useRef } from "react";
import "./Sprow.css";
import axios from "../../axios";
import requests from "../../Requests";
import { DefaultData } from "../../DefaultData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Sprow({ title, fetchURL }) {
  const [movies, setMovies] = useState(DefaultData);
  const [translateX, settranslateX] = useState(0);
  const listref = useRef();
  console.log(translateX);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return requests;
    }

    fetchData();
  }, [fetchURL]);

  const handleclick = (direction) => {
    if (direction === "left" && translateX != 0) {
      settranslateX(translateX + 900);
      const x = translateX + 900;
      listref.current.style.transform = `translateX(${x}px)`;
    }
    if (direction === "right" && translateX != -900) {
      settranslateX(translateX - 900);
      const x = translateX - 900;
      listref.current.style.transform = `translateX(${x}px)`;
    }
  };

  const small_movie_array = movies.slice(1, 17);
  return (
    <div className='sprow-section'>
      <div className='whole-div'>
        <div className='sprow-top'>
          <h1 className='sprow-main-title'>{title}</h1>
          <div>
            <FaAngleLeft
              className='rowIcon'
              onClick={() => handleclick("left")}
              style={{
                color: `${
                  translateX === 0 ? "rgb(139, 139, 139)" : "rgb(80, 80, 78)"
                }`,
              }}
            />
            <FaAngleRight
              className='rowIcon'
              onClick={() => handleclick("right")}
              style={{
                color: `${
                  translateX === -900 ? "rgb(139, 139, 139)" : "rgb(80, 80, 78)"
                }`,
              }}
            />
          </div>
        </div>
        <div className='sprow-col' ref={listref}>
          <div className='boxb'>
            <img
              src={
                movies[0].img ||
                `https://image.tmdb.org/t/p/original/${movies[0]?.backdrop_path}`
              }
              alt=''
              className='sprow-img'
            />
            <h1 className='sprow-title'>{movies[0].title}</h1>
          </div>
          {small_movie_array.map((movie, index) => {
            return (
              <div className='box1' key={index}>
                <img
                  src={
                    movie.img ||
                    `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                  }
                  alt=''
                  className='sprow-img'
                />
                <h1 className='sprow-title'>{movie.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sprow;
