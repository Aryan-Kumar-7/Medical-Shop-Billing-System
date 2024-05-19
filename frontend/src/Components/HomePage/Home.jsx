import React, { useState } from 'react'
import './Home.css'
import w1 from '../Assets/w1.png';
import { Link } from 'react-router-dom';

const Home = () => {

  const [menu, setMenu] = useState("login");

  return (
    <>
      <section className="main">
        <div className="left">
          <h2>We Here For Your Care</h2>
          <h1>We are the best Pharmacy</h1>
          <p>We are here for your care 24/7. Any help just call us.</p>
          <Link to='/login'><button className='btn1'>Make An Appointment</button></Link>
        </div>

        <div className="right">
          <img src={w1} alt="" />
        </div>
      </section>
    </>
  )
}

export default Home
