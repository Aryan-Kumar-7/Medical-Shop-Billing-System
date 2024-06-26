import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menu, setMenu] = useState("");
  // const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="navlogo">
        <img src={logo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link> {menu === "home" ? <hr /> : <></>}</li>
        {/* <li onClick={() =>{setMenu("Login")}}>Login {menu === "Login"?<hr />:<></>}</li> */}
        <li onClick={() => { setMenu("doctors") }}><Link style={{ textDecoration: 'none' }} to='/doctors'>Doctors</Link> {menu === "doctors" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("medicine") }}><Link style={{ textDecoration: 'none' }} to='/medicine'>Medicine</Link> {menu === "medicine" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("services") }}><Link style={{ textDecoration: 'none' }} to='/services'>Services</Link> {menu === "services" ? <hr /> : <></>}</li>
      </ul>
      <div>
        <button className='helpline'>Helpline</button>
      </div>
      <div className="nav-login-cart">
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default NavBar
