import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import requests from "../../Requests";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./Rows.css";

function Rows({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const listref = useRef();
  const [translateX, settranslateX] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return requests;
    }
    fetchData();
  }, [fetchURL]);

  const handleclick = (direction) => {
    if (direction === "left") {
      settranslateX(translateX + 175);
    }
    if (direction === "right") {
      settranslateX(translateX - 175);
    }
    listref.current.style.transform = `translateX(${translateX}px)`;
    console.log(translateX);
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
            />
            <FaAngleRight
              className='rowIcon'
              onClick={() => handleclick("right")}
            />
          </div>
        </div>
        <div className='bottop-section' ref={listref}>
          {movies.map((movie, index) => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt=''
                className='row-img '
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rows;
