import React from "react";
import "./style.css";

function HomeItems() {
    return (
    <div>
        <div className = "row">
            <div className="card-body">
                <div id="image">
                    <img src="Assets/images/maxx.JPG" alt="Maxx Sanner" className="img-thumbnail rounded-circle" title="Maxx Sanner"></img>
                </div>
            </div>
        </div>
        <h1 id="greeting">Hello! I'm <strong>Maxx Sanner</strong>!</h1>
        <p></p>
    </div>
    );
}

export default HomeItems;