import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/bon-appetit.svg'
import hero from '../assets/images/login-hero.jpg'


function Login({ onLogin }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData, [e.target.name] : e.target.value
    })
  }

  function resetForm() {
    setFormData({
      username: "",
      password: "",
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          onLogin(user.data)
          resetForm()
          localStorage.setItem("isAuthenticated", "true");
          navigate("/home")
        })
      }
    })
  }
  return (
    <div className='auth--container'>
        <div className='auth--wrapper'>
            <div className='auth--form-container'>
                <img className='auth--logo' src={logo}  alt='bon appetite logo'/>
                <div className='auth--form-wrapper'>
                    <h1 className='auth--title'>Welcome back, chef</h1>
                    <p className='auth--text'>Let's get started with cooking</p>
                    <form onSubmit={handleSubmit} autoComplete='off' >
                    <div className='auth--form-field'>
                        <label>Login Id</label>
                        <input onChange={handleChange} name='username' value={formData.username} type='text' placeholder='Enter email or username'/>
                    </div>
                    <div className='auth--form-field'>
                        <label>Password</label>
                        <input onChange={handleChange} name='password' value={formData.password} type='text' placeholder='Enter password'/>
                    </div>
                    <button type='submit' className='auth--submit'>Login account</button>
                    </form>
                    <span className='auth-forgot-pass'>Forgot your password ? <a href='#reset'>Reset password</a></span>
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