import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import menu from "./menu.json";
import { Movie_submenu, Series_submenu } from "./Submenu";

function Header() {
  const [ishovering, setIshovering] = useState(-1);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "header active" : "header"}>
      {/* left */}
      <Link to='/'>
        <img
          src='https://api.adjaranet.com/img/adjaranet-logo.svg'
          alt='logo'
          className='logo'
        />
      </Link>
      {/* bottom */}
      <div className='menu'>
        {menu.map((item, index) => {
          const { id, title, icon, path } = item;
          return (
            <nav key={id} className='nav'>
              <ul
                className='menu-item'
                onMouseEnter={(e) => setIshovering(index + 1)}
                onMouseLeave={() => setIshovering(-1)}
              >
                <li className='menu-list'>
                  <NavLink
                    activeClassName='active-navlinks'
                    className={navbar ? "navlink scrolled" : "navlink"}
                    exact
                    to={path || "./"}
                  >
                    {/* Icon */}
                    <i className={icon} style={{ fontSize: "20px" }}></i>

                    {/* Title */}
                    <p>{title}</p>
                  </NavLink>
                </li>

                {ishovering === 2 && id === 2 && <Movie_submenu />}
                {ishovering === 3 && id === 3 && <Series_submenu />}
              </ul>
            </nav>
          );
        })}
      </div>

      {/* Right */}
      <div className='right'>
        <i
          className='far fa-lightbulb'
          style={{ fontSize: "20px", color: "white" }}
        ></i>
        <img
          src='https://cards.gainkit.com/images/oauth/facebook_login.png'
          alt='facebook'
          className='continue-with-fb'
        />
      </div>
    </div>
  );
}

export default Header;
