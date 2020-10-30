import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal header" title="Maxx Sanner">Maxx Sanner</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link className="p-2 text-dark" to="/">
                    About
                </Link>
                <Link className="p-2 text-dark" to="/portfolio">
                    Portfolio
                </Link>
                <Link className="p-2 text-dark" to="/contact">
                    Contact
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;