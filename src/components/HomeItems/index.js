import React from "react";
import maxx from "../../assets/maxx.JPG"
import github from "../../assets/github_white.png"
import linkedin from "../../assets/linkedin_white.png"
import "./style.css";

function HomeItems() {
    return (
    <div>
        <div className="home-container">
            <div className = "row">
                <div className="card-body">
                    <div id="image">
                        <img src={maxx} alt="Maxx Sanner" className="img-thumbnail rounded-circle" title="Maxx Sanner"></img>
                    </div>
                </div>
            </div>
            <h1 id="greeting">Hello! I'm <span id="underline"><strong>Maxx Sanner</strong></span>!</h1>
            <h5 id="role">Full Stack Web Developer | Systems Application Engineer</h5>
            <div id="social">
                <a href="https://github.com/Maxx105" target="_blank" rel="noreferrer"><img src={github} alt="github" className="social-image"></img></a>{' '}
                <a href="https://www.linkedin.com/in/maxx-sanner-49247b169" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" className="social-image"></img></a>
            </div>
        </div>
    </div>
    );
}

export default HomeItems;

