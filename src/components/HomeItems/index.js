import React from "react";
import "./style.css";

function HomeItems() {
    return (
    <div>
        <div className = "row">
            <div className="card-body">
                <div id="image">
                    <img src="Assets/Images/maxx.JPG" alt="Maxx Sanner" className="img-thumbnail rounded-circle" title="Maxx Sanner"></img>
                </div>
            </div>
        </div>
        <h1 id="greeting">Hello! I'm <span id="underline"><strong>Maxx Sanner</strong></span>!</h1>
        <h5 id="about">Full Stack Web Developer and Systems Application Engineer</h5>
        <div id="social">
            <a href="https://github.com/Maxx105" target="_blank"><img src="Assets/Images/github.png" alt="github" className="social-image"></img></a>{' '}
            <a href="https://www.linkedin.com/in/maxx-sanner-49247b169" target="_blank"><img src="Assets/Images/linkedin.png" alt="LinkedIn" className="social-image"></img></a>
        </div>
    </div>
    );
}

export default HomeItems;

