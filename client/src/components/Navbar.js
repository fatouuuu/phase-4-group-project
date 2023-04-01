import React from 'react'
import { Link } from 'react-router-dom';
import "../Navbar.css"



function Navbar() {
    return (
        <nav>
        <Link to="/">
          <h2>Bon Appétit</h2>
        </Link>
        <ul>
        <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>
        <Link to="/register"><button>Register</button></Link>
          </li>
        </ul>
      </nav>
    
    )
}

export default Navbar
