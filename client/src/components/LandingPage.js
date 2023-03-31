import React from 'react';
import { Link } from 'react-router-dom';

import "../App.css"

function LandingPage() {

    return (
    <div className='Landing'>
        <h2>No idea what to cook for dinner? 
        </h2>
        <h3>Don’t worry, we got your back!</h3>
        <p className='paragraph' >
            Stop eating the same dishes every day.<br></br>
            Download our app and get daily fresh and healthy recipes for free.
        </p>
        <Link to="/login"><button className='btn-1'>Login</button></Link>
        <Link to="/sinup"><button className='btn-2'>Sign up</button></Link>
        <img className='img' src='your-image-source'/>
    </div>
    )
}

export default LandingPage

