import React from "react";
import Project from "../../components/Project"

function Portfolio(props) {
  const imagePath = "./Assets/Images/"
  const projects = [
    {
        name: 'Password Generator',
        imageURL: `${imagePath}generate_password.JPG`,
        appLink: "https://maxx105.github.io/password_generator/",
        githubLink: "https://github.com/Maxx105/password_generator"
    },
    {
        name: 'Coding Quiz',
        imageURL: `${imagePath}codequiz.JPG`,
        appLink: "https://maxx105.github.io/coding_quiz/",
        githubLink: "https://github.com/Maxx105/coding_quiz"
    },
    {
        name: 'Work Day Scheduler',
        imageURL: `${imagePath}workdayscheduler.JPG`,
        appLink: "https://maxx105.github.io/work_day_planner/",
        githubLink: "https://github.com/Maxx105/work_day_planner"
    },
    {
        name: 'Weather Dashboard',
        imageURL: `${imagePath}weather_dashboard.JPG`,
        appLink: "https://maxx105.github.io/weather_dashboard/",
        githubLink: "https://github.com/Maxx105/weather_dashboard"
    },
    {
        name: 'Burger Logger',
        imageURL: `${imagePath}burger_logger.JPG`,
        appLink: "https://maxx-burger-logger.herokuapp.com/",
        githubLink: "https://github.com/Maxx105/burger_logger"
    },
    {
        name: 'Food.io',
        imageURL: `${imagePath}foodio.JPG`,
        appLink: "https://food-inventory-123.herokuapp.com/",
        githubLink: "https://github.com/Maxx105/food-inventory"
    },
    {
        name: 'Employee Directory',
        imageURL: `${imagePath}employee_directory.JPG`,
        appLink: "https://maxx105.github.io/employee_directory/",
        githubLink: "https://github.com/Maxx105/employee_directory"
    },
    {
        name: 'Google Books Search',
        imageURL: `${imagePath}google_books.JPG`,
        appLink: "https://mern-books-maxx.herokuapp.com/",
        githubLink: "https://github.com/Maxx105/google_books_search"
    }
];
  return (
    <div className="row">
        <div className="col-md-9">
            <div className="card bg-light">
                <div className="card-body">
                    <h1 className="card-title" title="Portfolio"><span id="portfolio">Portfol</span><strong><span id="io">io</span></strong></h1>
                    <hr></hr>
                    <Project projects={projects}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;