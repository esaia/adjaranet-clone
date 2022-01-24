import React, { useEffect, useState } from "react";
import "./Slideshow.css";
import {
  FaAngleLeft,
  FaAngleRight,
  FaRegPlayCircle,
  FaSearch,
} from "react-icons/fa";
import Slider from "react-slick";
import axios from "../../axios";
import requests from "../../Requests";
import SearchBox from "./SearchBox";

// arrows
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaAngleRight className='icon' />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaAngleLeft className='icon' />
    </div>
  );
};

function Slideshow(props) {
  const [movies, setMovie] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [inputisfocused, setInputisfocused] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fethTrending);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // id = 524434
  const search_function = () => {
    const new_movies = movies.filter((movie) => {
      return movie.title && movie.title.toLowerCase().includes(inputvalue);
    });
    setFilteredArray(new_movies);

    setInputisfocused(true);
  };

  const newdata = movies.slice(0, 5);
  return (
    <div>
      <div
        className={`${inputisfocused && "black-overflow active"}`}
        onClick={() => setInputisfocused(false)}
      ></div>

      <Slider
        {...settings}
        className='slider'
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {newdata.map((item, index) => {
          return (
            <div key={index}>
              <div className='main-slide'>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                  alt=''
                  className='slider-image'
                />
                <div className='overflow-color'></div>

                <div className='play-icon-div'>
                  <FaRegPlayCircle className='play-icon' />
                </div>
                <h2 className='slider-title'>{item.title}</h2>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className='search-div'>
        <input
          type='text'
          placeholder='ძიება...'
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setInputisfocused(true)}
          // onBlur={() => setInputisfocused(false)}
          onKeyUp={search_function}
          className='search-input'
        />

        <FaSearch className='search-icon' />

        {inputisfocused && <SearchBox filteredArray={filteredArray} />}
      </div>
    </div>
  );
}

export default Slideshow;
