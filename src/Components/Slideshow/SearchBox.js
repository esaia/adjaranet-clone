import React from "react";

function SearchBox({ filteredArray }) {
  const searchArray = filteredArray.slice(0, 10);

  return (
    <div className='searh-box'>
      {searchArray.map((item, index) => {
        return (
          <div key={index} className='item-div'>
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
              alt=''
              className='searchBoxImg'
            />
            <div className='overflow'></div>
            <h2 className='searchBoxTitle'>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default SearchBox;
