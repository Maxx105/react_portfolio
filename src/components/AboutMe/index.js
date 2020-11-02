import React from "react";
import "./style.css";

function AboutMe() {
  const skills = ['JavaScript', 'Lua', 'CSS', 'HTML', 'Bootstrap', 'React', 'JQuery', 'MySQL', 'MongoDB', 'Express', 'Handlebars', 'OOP', 'Node.js', 'Ajax', 'ES6', 'Git']
  return (
  <div className="row">
      <div className="col-md-9 col-sm-12">
          <div className="card bg-light">
              <div className="card-body">
                <h1 className="card-title" title="About Me"><span id="about">About</span> <span id='me'><strong>Me</strong></span></h1>
                <hr></hr>
                <div id="about-me-image">
                  <img src="Assets/images/maxx.JPG" alt="Maxx Sanner" className="img-thumbnail shadow" title="Maxx Sanner"></img>
                </div>
                <div id="about-me">
                  <h3>current work</h3>
                  <p>I am currently a Systems Application Engineer at <a href="https://www.QSC.com" target="_blank" rel="noreferrer">QSC</a>, a manufacturer of professional audio, video, and control equipment and software.</p>
                  <h3>school</h3>
                  <p>I graduated Summa Cum Laude from California State University, Fullerton in 2018 with a Bachelor of Science in Physics along with a Bachelor of Arts in Music. I also just recently completed a Full Stack Web Development Boot Camp at UC Irvine.</p>
                  <h3>skills</h3>
                  <div id="skills">
                    {skills.map(skill => (
                      <p key={skill}><span class="skill">{skill}</span></p>
                    ))}
                  </div>
                </div>
                <div style={{clear: 'both'}}>
                  <hr></hr>
                  <p style={{textAlign: "center"}}>Click <a href="Assets/resume.pdf" target="_blank" title="resume">here</a> to view my current resume!</p>
                </div>
              </div>
          </div>
      </div>
  </div>
  );
}

export default AboutMe;