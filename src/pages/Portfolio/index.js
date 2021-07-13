import React from "react";
import Project from "../../components/Project"
import passwordGenerator from "../../assets/generate_password.JPG";
import codingQuiz from "../../assets/codequiz.JPG";
import workDayPlanner from "../../assets/workdayscheduler.JPG";
import weatherDashboard from "../../assets/weather_dashboard.JPG";
import burgerLogger from "../../assets/burger_logger.JPG";
import foodio from "../../assets/foodio.JPG";
import employeeDirectory from "../../assets/employee_directory.JPG";
import googleBooks from "../../assets/google_books.JPG";
import oneMansTrash from "../../assets/one_mans_trash.JPG";

function Portfolio(props) {
//   const imagePath = "./Assets/Images/"
  const projects = [
    {
        name: 'Password Generator',
        imageURL: passwordGenerator,
        appLink: "https://maxx105.github.io/password_generator/",
        githubLink: "https://github.com/Maxx105/password_generator"
    },
    {
        name: 'Coding Quiz',
        imageURL: codingQuiz,
        appLink: "https://maxx105.github.io/coding_quiz/",
        githubLink: "https://github.com/Maxx105/coding_quiz"
    },
    {
        name: 'Work Day Scheduler',
        imageURL: workDayPlanner,
        appLink: "https://maxx105.github.io/work_day_planner/",
        githubLink: "https://github.com/Maxx105/work_day_planner"
    },
    {
        name: 'Weather Dashboard',
        imageURL: weatherDashboard,
        appLink: "https://maxx105.github.io/weather_dashboard/",
        githubLink: "https://github.com/Maxx105/weather_dashboard"
    },
    {
        name: 'Burger Logger',
        imageURL: burgerLogger,
        appLink: "https://maxx-burger-logger.herokuapp.com/",
        githubLink: "https://github.com/Maxx105/burger_logger"
    },
    {
        name: 'Food.io',
        imageURL: foodio,
        appLink: "https://food-inventory-123.herokuapp.com/",
        githubLink: "https://github.com/Maxx105/food-inventory"
    },
    {
        name: 'Employee Directory',
        imageURL: employeeDirectory,
        appLink: "https://maxx105.github.io/employee_directory/",
        githubLink: "https://github.com/Maxx105/employee_directory"
    },
    {
        name: 'Google Books Search',
        imageURL: googleBooks,
        appLink: "https://mern-books-maxx.herokuapp.com/",
        githubLink: "https://github.com/Maxx105/google_books_search"
    },
    {
        name: "One Man's Trash",
        imageURL: oneMansTrash,
        appLink: "https://one-mans-trash.herokuapp.com/",
        githubLink: "https://github.com/Maxx105/one_mans_trash"
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