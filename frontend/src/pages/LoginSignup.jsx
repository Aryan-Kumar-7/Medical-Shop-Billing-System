import React from 'react'
import s3 from '../Components/Assets/s3.png'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-fields">
                        <input type="text" placeholder='Username' name='Username' />
                    </div>
                    <div className="input-fields">
                        <input type="Password" placeholder='Password' name='Password' />
                    </div>
                    <p>Create an account? <span>Click Here</span></p>
                    <button>Sign In</button>
                </form>
            </div>

            <div className="signupimg-container">
                <div className="signupimg">
                    <div className="signupimg-right">
                        <h1>Hello User!</h1>
                        <p>Enter your personal details and starts your journey with us</p>
                        <img src={s3} alt="" />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
