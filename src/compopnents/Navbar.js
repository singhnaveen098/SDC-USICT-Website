import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = () => {
  let location = useLocation();
  return (
    <div>
      <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-gradient-to-r from-gray-500 to-gray-900">
        <div className="container-fluid">
          <Link className="navbar-brand flex flex-row items-center font-extrabold" to="/"><img className='w-9 mx-2' src={logo} alt="SDC_Logo" /> SDC-USICT</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link font-bold ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link font-bold ${location.pathname === "/teams" ? "active" : ""}`} to="/teams">Teams & Projects</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link font-bold ${location.pathname === "/ffs" ? "active" : ""}`} to="/ffs">FFS</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link font-bold ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</Link>
              </li>
            </ul>
            <a className="nav-link text-gray-300 font-bold hover:text-white" href="http://www.ipu.ac.in/usict/">USIC&T</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar