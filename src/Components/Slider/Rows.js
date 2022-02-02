import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import requests from "../../Requests";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./Rows.css";
import MovideDesc from "./MovideDesc";
import { Defaultimages } from "./Defaultimages";
import { DefaultData } from "../../DefaultData";

function Rows({ title, fetchURL }) {
  const [movies, setMovies] = useState(DefaultData);
  const listref = useRef();
  const [translateX, settranslateX] = useState(0);
  const [ishovering, setIshovering] = useState(-1);

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
      settranslateX(translateX + 875);
      const x = translateX + 875;
      listref.current.style.transform = `translateX(${x}px)`;
    }
    if (direction === "right" && translateX != -2625) {
      settranslateX(translateX - 875);
      const x = translateX - 875;
      listref.current.style.transform = `translateX(${x}px)`;
    }
  };

  return (
    <div className='main-row'>
      <div className='slider-row'>
        <div className='top-section'>
          <h1 className='title'>{title}</h1>
          <div>
            <FaAngleLeft
              className='rowIcon'
              onClick={() => handleclick("left")}
              style={{
                color: `${
                  translateX === 0 ? "rgb(223, 223, 223)" : "rgb(148, 148, 148)"
                }`,
              }}
            />
            <FaAngleRight
              className='rowIcon'
              onClick={() => handleclick("right")}
              style={{
                color: `${
                  translateX === -2625
                    ? "rgb(223, 223, 223)"
                    : "rgb(148, 148, 148)"
                }`,
              }}
            />
          </div>
        </div>
        <div className='bottop-section' ref={listref}>
          {movies.map((movie, index) => {
            return (
              <div
                className='row-item'
                key={index}
                onMouseEnter={() => setIshovering(index)}
                onMouseLeave={() => setIshovering(-1)}
              >
                <img
                  src={
                    movie.img ||
                    `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                  }
                  alt=''
                  className='row-img'
                />
                <h1>{movie.title}</h1>
                {ishovering === index && <MovideDesc movie={movie} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rows;
