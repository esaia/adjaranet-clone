import React, { useEffect, useState } from "react";
import requests from "../../Requests";
import axios from "../../axios";
import { FaSearch } from "react-icons/fa";
import SearchBox from "./SearchBox";

function Search() {
  const [movies, setMovie] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [inputisfocused, setInputisfocused] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);

  const search_function = () => {
    const new_movies = movies.filter((movie) => {
      return movie.title && movie.title.toLowerCase().includes(inputvalue);
    });
    setFilteredArray(new_movies);
    setInputisfocused(true);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fethTrending);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className='search-div'>
      <input
        type='text'
        placeholder='ძიება...'
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setInputisfocused(true)}
        onKeyUp={search_function}
        className='search-input'
      />

      <FaSearch className='search-icon' />
      <div
        className={`${inputisfocused && "black-overflow"}`}
        onClick={() => setInputisfocused(false)}
      ></div>
      {inputisfocused && <SearchBox filteredArray={filteredArray} />}
    </div>
  );
}

export default Search;
