import React, { useState } from 'react'
import s3 from '../Components/Assets/s3.png'
import s1 from '../Components/Assets/s1.png'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {

    const [ls, setLs] = useState("login");

    return (
        <div className='container'>
            {ls === "login" ? <div className="login-container">
                <div className="login">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-fields">
                            <input type="text" placeholder='Username' name='Username' />
                        </div>
                        <div className="input-fields">
                            <input type="Password" placeholder='Password' name='Password' />
                        </div>
                        <p>Create an account? <span onClick={()=>{setLs("signin")}}>Click Here</span></p>
                        <button>Continue</button>
                    </form>
                </div>

                <div className="signupimg-container">
                    <div className="signupimg">
                        <div className="signupimg-right">
                            <h1>Hello User!</h1>
                            <p>Enter your personal details and starts your journey with us</p>
                            <img src={s3} alt="" />
                            <button onClick={()=>{setLs("signin")}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div> : <div className="signin-container">
                <div className="signin">
                    <form action="">
                        <h1>Sign Up</h1>
                        <div className="input-fields">
                            <input type="text" placeholder='Username' name='Username' />
                        </div>
                        <div className="input-fields">
                            <input type="email" placeholder='Email Address' name='Email Address' />
                        </div>
                        <div className="input-fields">
                            <input type="Password" placeholder='Password' name='Password' />
                        </div>
                        <p>Already have an account? <span onClick={()=>{setLs("signin")}}>Click Here</span></p>
                        <button>Continue</button>
                    </form>
                </div>

                <div className="signupimg-container">
                    <div className="signupimg">
                        <div className="signupimg-right">
                            <h1>Welcome Back</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <img src={s1} alt="" />
                            <button onClick={()=>{setLs("login")}}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>}

            
        </div>


    )
}

export default LoginSignup
