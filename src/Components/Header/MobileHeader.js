import React, { useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import menu from "./menu.json";

function MobileHeader() {
  const leftmenuref = useRef();
  const [showoverflow, setShowoverflow] = useState(false);

  const handleClick = (position) => {
    if (position === "hide") {
      leftmenuref.current.style.transform = "translateX(-300px)";
      setShowoverflow(false);
    } else if (position === "show") {
      leftmenuref.current.style.transform = "translateX(0px)";
      setShowoverflow(true);
    }
  };
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
      <AiOutlineSearch className='icon-mob' />

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
