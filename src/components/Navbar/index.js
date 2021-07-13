import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/" id="name">
                Maxx Sanner
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            <span className="text-color">about</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">
                        <span className="text-color">portfolio</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                        <span className="text-color">contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

