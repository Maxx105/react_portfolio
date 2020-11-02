import React from "react";
import "./style.css";

function ContactInfo() {
  return (
    <div className="col-md-5">
        <div className="card bg-light shadow">
            <div className="card-body">
                <h3 className="contact_details">Email</h3>
                <a href="mailto:maxxsanner105@gmail.com">maxxsanner105@gmail.com</a>
                <hr></hr>
                <h3 className="contact_details">Phone</h3>
                <p>(661) 917-5530</p>
                <hr></hr>
                <a href="https://github.com/Maxx105" target="_blank" rel="noreferrer"><img src="./Assets/Images/github.png" alt="github" class="social-icons"></img></a>{' '}
                <a href="https://www.linkedin.com/in/maxx-sanner-49247b169" target="_blank" rel="noreferrer"><img src="./Assets/Images/linkedin.png" alt="LinkedIn" class="social-icons"></img></a>
            </div>
        </div>  
    </div>
  );
}

export default ContactInfo;