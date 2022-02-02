import React, { useEffect, useState } from "react";
import "./Slideshow.css";
import { FaAngleLeft, FaAngleRight, FaRegPlayCircle } from "react-icons/fa";
import Slider from "react-slick";
import axios from "../../axios";
import requests from "../../Requests";
import Search from "./Search";
import { Link } from "react-router-dom";
import { DefaultData } from "../../DefaultData";

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

function Slideshow() {
  const [movies, setMovie] = useState(DefaultData);
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

  const newdata = movies.slice(0, 8);
  return (
    <div className='main-wrap'>
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
                <Link to={"/movie/" + item.id}>
                  <div className='play-icon-div'>
                    <FaRegPlayCircle className='play-icon' />
                  </div>
                </Link>
                <h2 className='slider-title'>{item.title || item.name}</h2>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className='axpt4g'>
        <Search />
      </div>
    </div>
  );
}

export default Slideshow;
