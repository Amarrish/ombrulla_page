import React from 'react';
import logo from '../Assets/logo.png';
import './Navbar.css';

const Navbar = () => {


  return (
    <nav className="navbar">
   
   <div className="logos flex p-1 items-center">
    <img src={logo} alt="No_image..." />
   </div>
   


    <ul classNameName="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" className="hamburger">&#9776;</label>
      <div className="menu">
      <li className=' listimg'><img src={logo} alt="" /></li>
        <li className='listitems active'>Home</li>
        <li className="services listitems">
          <a href="/">Services <i class="fa-solid fa-caret-down"></i></a>
          <ul className="dropdown">
            <p>AI Visual Inspection</p>
            <p>AI Infrastructure Inspection</p>
            <p>AI People Tracking</p>
            <p>AI Data Analytics</p>
          </ul>
        </li>
        <li className="services listitems">
          <a href="/">Product <i class="fa-solid fa-caret-down"></i></a>
          <ul className="dropdown">
            <p><a href="/">Asset Performance Management </a></p>
          </ul>
        </li>
        <li className='listitems'><a href="/">About</a></li>
        <li className='listitems'><a href="/">Blog</a></li>
        <li className='listitems'><a href="/">Contact</a></li>
      </div>
    </ul>
  </nav>
  );
}

export default Navbar;


