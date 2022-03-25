import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import requests from "../../Requests";
import Search from "../Slideshow/Search";
import menu from "./menu.json";
import axios from "../../axios";
function MobileHeader() {
  const leftmenuref = useRef();
  const [showoverflow, setShowoverflow] = useState(false);
  const [showsearchMB, setShowSearchMB] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");
  const [movies, setMovie] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  const handleClick = (position) => {
    if (position === "hide") {
      leftmenuref.current.style.transform = "translateX(-300px)";
      setShowoverflow(false);
    } else if (position === "show") {
      leftmenuref.current.style.transform = "translateX(0px)";
      setShowoverflow(true);
    }
  };

  // search movies
  const search_function = () => {
    const new_movies = movies.filter((movie) => {
      return movie.title && movie.title.toLowerCase().includes(searchvalue);
    });
    setFilteredArray(new_movies);
  };

  // fetch movies
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fethTrending);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className='mobile-header'>
      <AiOutlineMenu className='icon-mob' onClick={() => handleClick("show")} />
      <Link to='/'>
        <img
          src='https://api.adjaranet.com/img/adjaranet-logo.svg'
          alt='logo'
          className='logo-mob'
        />
      </Link>
      <AiOutlineSearch
        className='icon-mob'
        onClick={() => setShowSearchMB(!showsearchMB)}
      />

      {showsearchMB && (
        <div className='mobilesearchdiv'>
          <input
            type='text'
            className='searchinpuMB'
            placeholder='search movie'
            value={searchvalue}
            onChange={(e) => setSearchvalue(e.target.value)}
            onKeyUp={search_function}
          />
          <div className='searchitemMB'>
            {filteredArray.map((movie) => {
              return (
                <div className='searchmoviesMB' key={movie.id}>
                  <h1 className='lineMB'> </h1>
                  <Link to={"/movie/" + movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                      alt=''
                      className='searchBoxImgMB'
                    />

                    <h1 className='titlesearchMV'>{movie.title}</h1>
                  </Link>
                </div>
              );
            })}
          </div>

          {showsearchMB && (
            <div
              className='overflowMB'
              onClick={() => setShowSearchMB(false)}
            ></div>
          )}
        </div>
      )}

      {/* left menu */}

      <div className='left-menu' ref={leftmenuref}>
        <div className='top-section'>
          <AiOutlineClose
            className='close-icon'
            onClick={() => handleClick("hide")}
          />
          <Link to='./'>
            <img
              src='https://api.adjaranet.com/img/adjaranet-logo.svg'
              alt='logo'
              className='logo-mob'
            />
          </Link>
        </div>
        <div className='bottom-section-mob'>
          <div className='mob-menu-section'>
            {menu.map((item) => {
              return (
                <div key={item.id} className='nav-mob'>
                  <ul>
                    <li>
                      <NavLink
                        activeClassName='active'
                        className='navlink mob-navlink'
                        exact
                        to={item.path || "./"}
                      >
                        {/* Icon */}
                        <i
                          className={item.icon}
                          style={{ fontSize: "23px" }}
                        ></i>

                        {/* Title */}
                        <p>{item.title}</p>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showoverflow && (
        <div
          className='black-overflow-mob'
          onClick={() => handleClick("hide")}
        ></div>
      )}
    </div>
  );
}

export default MobileHeader;
