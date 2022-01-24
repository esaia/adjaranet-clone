import React from "react";
import menu from "./menu.json";
import "./Header.css";
function Submenu() {
  return (
    <div>
      <h1>yoo</h1>
    </div>
  );
}

export function Movie_submenu() {
  const submenu_movies = menu.filter((item) => item.title === "ფილმები");

  return (
    <div className='submenu'>
      <div className='speacer'>
        <div className='triangle'></div>
      </div>
      <div className='submenu-movie'>
        <a>{submenu_movies[0].submenu.title1}</a>
        <span className='sepirator'>|</span>
        <a>{submenu_movies[0].submenu.title2}</a>
        <span className='sepirator'>|</span>
        <a>{submenu_movies[0].submenu.title3}</a>
        <span className='sepirator'>|</span>
        <a>{submenu_movies[0].submenu.title4}</a>
        <span className='sepirator'>|</span>
        <a>{submenu_movies[0].submenu.title5}</a>
        <span className='sepirator'>|</span>
      </div>
    </div>
  );
}

export function Series_submenu() {
  const submenu_series = menu.filter((item) => item.title === "სერიალები");

  return (
    <div className='submenu-series'>
      <div className='speacer'>
        <div className='triangle'></div>
      </div>
      <div className='submenu-movie'>
        <a>{submenu_series[0].submenu.title6}</a>
        <span className='sepirator'>|</span>
        <a>{submenu_series[0].submenu.title7}</a>
        <span className='sepirator'>|</span>
      </div>
    </div>
  );
}

export default Submenu;
