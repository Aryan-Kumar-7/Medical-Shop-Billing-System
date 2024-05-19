import React from 'react'
import './CSS/Appointment.css'

const Appointment = () => {
    return (
        <>
            <div className="fo-con">
                <h2>Fill the Form And Book Your Appointment</h2>
                <form action="" className="book">
                    <div className="input-fields">
                        <input type="text" placeholder='Patient Name' />
                    </div>
                    <div className="input-fields">
                        <input type="text" placeholder='Patient Disease' />
                    </div>
                    <div className="input-fields">
                        <input type="text" placeholder='Previous Medication' />
                    </div>
                    <div className="input-fields">
                        <input type="date" placeholder='Date'  />
                    </div>
                    <div className="input-fields">
                        <input type="text" placeholder='Contact No.' />
                    </div>
                </form>
                <button className='subB'>Submit</button>
            </div>
        </>
    )
}

export default Appointment
