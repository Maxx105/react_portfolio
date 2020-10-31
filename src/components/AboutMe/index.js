import React from "react";
import "./style.css";

function AboutMe() {
    return (
    <div className="row">
        <div className="col-md-9">
            <div className="card">
                <div className="card-body">
                  <h1 className="card-title" title="About Me">About Me</h1>
                  <hr></hr>
                  <img src="Assets/images/maxx.JPG" alt="Maxx Sanner" className="img-thumbnail" title="Maxx Sanner"></img>

                  <p className="card-text">
                    My name is Maxx Sanner and I am a Systems Application Engineer at <a href="https://www.QSC.com" target="_blank">QSC</a>, a manufacturer of professional audio, video, and control equipment and software. I received a Bachelor of Science in Physics along with a Bachelor of Arts in Music, with an emphasis in voice, from California State University, Fullerton in 2018. 
                    As part of my current job, I assist integrators around the world using our software to program audio, video, and control systems for professional venues such as sports stadiums, museums, houses of worship, conference rooms, hospitals, music halls, amusement parks, government facilities, etc. Through this job, I have grown a profound love for programming. I have assisted integrators with writing scripts for things such as QWERTY keyboards, timeout splashscreens, and password protection for our user control interface platform.
                    I am currently enrolled in the Full Stack Web Development Boot Camp at UC Irvine and hope to grow this portfolio in the coming months. Check out the portfolio page for some of my most recent class projects! 
                  </p>
                  <hr></hr>
                  <p style={{textAlign: "center"}}>Click <a href="Assets/resume.pdf" target="_blank" title="resume">here</a> to view my current resume!</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutMe;