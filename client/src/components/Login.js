import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/bon-appetit.svg'
import hero from '../assets/images/login-hero.jpg'


function Login() {
  return (
    <div className='auth--container'>
        <div className='auth--wrapper'>
            <div className='auth--form-container'>
                <img className='auth--logo' src={logo}  alt='bon appetite logo'/>
                <div className='auth--form-wrapper'>
                    <h1 className='auth--title'>Welcome back, chef</h1>
                    <p className='auth--text'>Let's get started with cooking</p>
                    <div className='auth--form-field'>
                        <label>Login Id</label>
                        <input type='text' placeholder='Enter email or username'/>
                    </div>
                    <div className='auth--form-field'>
                        <label>Password</label>
                        <input type='text' placeholder='Enter password'/>
                    </div>
                    <button type='submit' className='auth--submit'>Login account</button>
                    <span className='auth-forgot-pass'>Forgot your password ? <a>Reset password</a></span>
                </div>
                
            </div>
            <div className='auth--hero-container'>
                <img className='auth--hero' src={hero} alt='by Monika Grabkowska on unsplash' />
                <em className='photo--tag'>Photo by <a href="https://unsplash.com/@kevinmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin McCutcheon</a> on <a href="https://unsplash.com/photos/APDMfLHZiRA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></em>
                <Link to='/register' className='auth--redirect'>Create account</Link>
            </div>
        </div>
    </div>
  )
}

export default Login