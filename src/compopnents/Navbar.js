import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = () => {
  let location = useLocation();
  return (
    <div>
      <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-gradient-to-r from-gray-800 to-gray-500 py-3">
        <div className="container-fluid">
          <Link className="mr-2 flex flex-row items-center font-bold text-2xl text-white hover:text-transparent" to="/"><img className='w-9 mx-2' src={logo} alt="SDC_Logo" /> SDC-USICT</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link font-bold ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link font-bold ${location.pathname === "/ffs" ? "active" : ""}`} to="/ffs">FFS</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-300 font-bold hover:text-white" href="http://www.ipu.ac.in/usict/">USIC&T</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar