import React from "react";
import { Link } from "react-router-dom";
import "./Rows.css";

function MovideDesc({ movie }) {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };
  return (
    <div className='main-desc'>
      <h1>{movie.title || movie.name}</h1>
      <p>{truncate(movie.overview, 100)}</p>
      <Link to={"/movie/" + movie.id}>
        <button>View {movie.id}</button>
      </Link>

      <div className='desc-info'>
        <p>{movie.release_date}</p>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovideDesc;
