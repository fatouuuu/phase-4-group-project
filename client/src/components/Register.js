import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/bon-appetit.svg'
import hero from '../assets/images/register-hero.jpg'

function Register() {
  return (
    <div className='auth--container'>
        <div className='auth--wrapper'>
            <div className='auth--form-container'>
                <img className='auth--logo' src={logo}  alt='bon appetite logo'/>
                <div className='auth--form-wrapper'>
                    <h1 className='auth--title'>Create an account</h1>
                    <p className='auth--text'>Let's get started with cooking</p>
                    <div className='auth--form-field'>
                        <label>Username</label>
                        <input type='text' placeholder='Enter fullname'/>
                    </div>
                    <div className='auth--form-field'>
                        <label>Email</label>
                        <input type='text' placeholder='E.g johndoe@email.com'/>
                    </div>
                    <div className='auth--form-field'>
                        <label>Password</label>
                        <input type='text' placeholder='Enter strong password'/>
                    </div>
                    <div className='auth--form-field'>
                        <label>Confirm password</label>
                        <input type='text' placeholder='Confirm your password'/>
                    </div>
                    <button type='submit' className='auth--submit'>Create account</button>
                </div>
            </div>
            <div className='auth--hero-container'>
                <img className='auth--hero' src={hero} alt='by Monika Grabkowska on unsplash' />
                <em className='photo--tag'>Photo by <a href="https://unsplash.com/@moniqa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monika Grabkowska</a> on <a href="https://unsplash.com/s/photos/recipe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></em>
                <Link className='auth--redirect'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register