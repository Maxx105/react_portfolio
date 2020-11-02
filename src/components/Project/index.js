import React from "react";
import "./style.css";

function Project(props) {
    const { projects } = props

    //This logic creates row arrays, each consisting of two items so they can be mapped 2 items to a row. This also ensures that if there are an odd number of projects, one item can be added to a row without error.
    let row = [];
    let column = []
    projects.forEach((project, i) => {
        row = [];
        if (i % 2 === 0) {
            row.push(projects[i], projects[i+1])
            column.push(row);
        }
        if (column[column.length - 1][1] === undefined) {
           column.splice(column.length-1, 1, [row[0]])
        } else return
    })

    return (
        <div>  
            {column.map((project, index) => (
                <div className="row" key={index}>
                    {project.map(item => (
                        <div className="col-12-xs col-md-6" key={item.name}>
                            <div className="card shadow">
                                <img src={item.imageURL} className="card-img-top" alt={item.name} title={item.name}></img>
                                <div className="card-body">
                                    <p className="card-text portfolio_card_text"><a href={item.appLink} target="_blank" title="Password Generator" rel="noreferrer" class="project-text">{item.name}</a></p>
                                    <hr></hr>
                                    <p className="card-text portfolio_card_text portfolio_card_repo_text"><a href={item.githubLink} target="_blank" title="Github Repo" rel="noreferrer" class="project-text">Github Repo</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            
            
                    {/* <div className="col-12-xs col-md-6">
                        {projects.slice(secondColumn).map(project => (
                            <div className="card shadow" key={project.name}>
                                <img src={project.imageURL} className="card-img-top img-fluid img-height" alt={project.name} title={project.name}></img>
                                <div className="card-body">
                                    <p className="card-text portfolio_card_text"><a href={project.appLink} target="_blank" title="Password Generator" rel="noreferrer" class="project-text">{project.name}</a></p>
                                    <hr></hr>
                                    <p className="card-text portfolio_card_text portfolio_card_repo_text"><a href={project.githubLink} target="_blank" title="Github Repo" rel="noreferrer" class="project-text">Github Repo</a></p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                
            
        </div>
    );
}

export default Project;

