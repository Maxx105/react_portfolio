import React from "react";
import "./style.css";

function HomeItems() {
    return (
    <div>
        <div className="home-container">
            <div className = "row">
                <div className="card-body">
                    <div id="image">
                        <img src="./Assets/Images/maxx.JPG" alt="Maxx Sanner" className="img-thumbnail rounded-circle" title="Maxx Sanner"></img>
                    </div>
                </div>
            </div>
            <h1 id="greeting">Hello! I'm <span id="underline"><strong>Maxx Sanner</strong></span>!</h1>
            <h5 id="role">Full Stack Web Developer | Systems Application Engineer</h5>
            <div id="social">
                <a href="https://github.com/Maxx105" target="_blank" rel="noreferrer"><img src="./Assets/Images/github_white.png" alt="github" className="social-image"></img></a>{' '}
                <a href="https://www.linkedin.com/in/maxx-sanner-49247b169" target="_blank" rel="noreferrer"><img src="./Assets/Images/linkedin_white.png" alt="LinkedIn" className="social-image"></img></a>
            </div>
        </div>
    </div>
    );
}

export default HomeItems;

