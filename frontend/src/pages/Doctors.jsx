import React from 'react'
import "./CSS/Doctors.css"
import d1 from '../Components/Assets/d1.png'
import d2 from '../Components/Assets/d2.png'
import d3 from '../Components/Assets/d3.png'
import d4 from '../Components/Assets/d4.png'
import Appointment from './Appointment'
import { Link } from 'react-router-dom'


const Doctors = () => {
    return (
        <div>
            <section className="top">
                <div className="doctor">
                    <h1 className="heading">TOP SPECIALTIES</h1>
                    <hr />
                </div>
                <div className="box-container">
                    <div className="box">
                        <img src={d1} alt="" />
                        <h1 className="title">Dermatology</h1>
                        <p>Specialists for skin and hair tretments</p>
                        <p>Pimples, Acne, Hairfall, Dandruff</p>

                        <a href="" className="btn">Read More...</a>
                    </div>

                    <div className="box">
                        <img src={d2} alt="" />
                        <h1 className="title">General Physician</h1>
                        <p>Managing acute medical conditions.</p>
                        <p>Typhoid, Abdominal, Migraine, Infections</p>

                        <a href="" className="btn">Read More...</a>
                    </div>

                    <div className="box">
                        <img src={d3} alt="" />
                        <h1 className="title">Paediatrics</h1>
                        <p>Specialists to care and treat children.</p>
                        <p>Constipation, Autism, Nutrition</p>

                        <a href="" className="btn">Read More...</a>
                    </div>

                    <div className="box">
                        <img src={d4} alt="" />
                        <h1 className="title">Recommended Doctors</h1>
                        <p>Top rated medicure doctors</p>
                        <p>Includes all specialties</p>

                        <a href="" className="btn">Read More...</a>
                    </div>
                </div>
            </section>
            <hr />

            <Link to="/appointment"><button className='bookbtn'>Book An Appointment</button></Link>

        </div>
    )
}

export default Doctors
