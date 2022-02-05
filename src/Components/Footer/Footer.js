import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className='footer-section'>
      <div className='footer-column'>
        <div className='footer-menu-div'>
          <div className='footer-menu'>
            <h2 className='active-footer'>Main</h2>
            <h2>Contact</h2>
            <h2>Consumer agreement</h2>
            <h2>Privacy Policy</h2>
          </div>

          <h2>© 2013-2021 adjaranet.com</h2>
        </div>

        <div className='footer-bottom'>
          <img src='https://i.ibb.co/j6Vmshj/image.png' alt='' />
          <img src='https://i.ibb.co/JRmW0K1/image.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
