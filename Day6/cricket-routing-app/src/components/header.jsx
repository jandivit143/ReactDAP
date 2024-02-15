import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="https://www.zensar.com" className="navbar-brand">
                    Zensar Technologies
                </a>
                <button className="navbar-toggle" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a href="/home" className="nav-link">Home</a> */}
                            <Link to='/home' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a href="/cricketer" className="nav-link">Cricketers</a> */}
                            <Link to='/cricketer/allCricketers' className="nav-link">Cricketers</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a href="/schedule" className="nav-link">Schedule</a> */}
                            <Link to='/schedule' className="nav-link">Schedule</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {/* <a href="/home" className="nav-link">Home</a> */}
                            <Link to='/about' className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a href="/home" className="nav-link">Home</a> */}
                            <Link to='/contact' className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default Header;