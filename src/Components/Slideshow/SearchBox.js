import React from "react";
import { Link } from "react-router-dom";

function SearchBox({ filteredArray }) {
  const searchArray = filteredArray.slice(0, 10);

  return (
    <div className='searh-box'>
      {searchArray.map((item, index) => {
        return (
          <div key={index} className='item-div'>
            <Link to={"/movie/" + item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt=''
                className='searchBoxImg'
              />

              <div className='overflow'></div>
              <h2 className='searchBoxTitle'>{item.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SearchBox;
