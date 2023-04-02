import React from 'react'
import { Link } from 'react-router-dom';
import "../Footer.css"


function Footer() {
    return (
        <footer >
        <div className="footer-bottom">
        <p>copyright &copy;2023 <a href="#">Bon Appétit</a></p>
        </div>
        <div className="footer-menu">
          <ul className="f-menu">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          </ul>
        </div>

        </footer>
    )
}

export default Footer
