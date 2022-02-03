import React from "react";
import { Link } from "react-router-dom";
import "./Rows.css";

function MovideDesc({ movie, index }) {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };
  const leftarray = [3, 4, 8, 9, 13, 14, 18, 19];
  return (
    <div className={leftarray.includes(index) ? "main-desc left" : "main-desc"}>
      <h2>{movie.title || movie.name}</h2>
      <hr />
      <div className='details-box-hover'>
        <div className='detail-hover-dec'>
          <h4>Relased Date:</h4>
          <h6>{movie.release_date}</h6>
        </div>
        <div className='detail-hover-dec'>
          <h4>language:</h4>
          <h6>{movie.original_language}</h6>
        </div>
      </div>
      <h4
        style={{
          fontSize: "13px",
          marginTop: "5px",
          color: "rgb(41, 40, 40)",
          cursor: "text",
        }}
      >
        Description:
      </h4>
      <h4
        style={{
          fontSize: "13px",
          margin: "10px 0px",
          color: "rgb(92, 89, 86)",
          cursor: "text",
        }}
      >
        {truncate(movie.overview, 100)}
      </h4>

      <Link to={"/movie/" + movie.id}>
        <button className='hover-desc-button'>Whatch The Trailer</button>
      </Link>
    </div>
  );
}

export default MovideDesc;
