import React, { useState } from 'react';
import './Navbar.css'; 
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menu, setMenu] = useState("Home");
  return (
    <div className='navbar'>
      <div className="navlogo">
        <img src={logo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li onClick={() =>{setMenu("Home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link> {menu === "Home"?<hr />:<></>}</li>
        {/* <li onClick={() =>{setMenu("Login")}}>Login {menu === "Login"?<hr />:<></>}</li> */}
        <li onClick={() =>{setMenu("Doctors")}}><Link style={{textDecoration: 'none'}} to='/doctors'>Doctors</Link> {menu === "Doctors"?<hr />:<></>}</li>
        <li onClick={() =>{setMenu("Medicine")}}><Link style={{textDecoration: 'none'}} to='/medicine'>Medicine</Link> {menu === "Medicine"?<hr />:<></>}</li>
        <li onClick={() =>{setMenu("Services")}}><Link style={{textDecoration: 'none'}} to='/services'>Services</Link> {menu === "Services"?<hr />:<></>}</li>
      </ul>
      <div>
        <button className='helpline'>Helpline</button>
      </div>
    </div>
  )
}

export default NavBar
