import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import "./Projects.css";

class Projects extends React.Component {
    render() {
        return (
            <div className = "Box">
                <h1>Technical Projects</h1>
                <p className = "Project-Help">Click on the images to see the project</p>
                <div style = {{padding: "15px"}}>
                    <Tabs  defaultActiveKey = "WebDev Projects" id = "Tech-Projects">
                        <Tab eventKey = "WebDev Projects" title = "WebDev Projects">
                            {
                                createWebDevProjects()
                            }
                        </Tab>
                        <Tab eventKey = "Python Projects" title = "Python Projects">
                            {
                                createPythonProjects()
                            }
                        </Tab>
                        <Tab eventKey = "C/C++ Projects" title = "C/C++ Projects">
                            {
                                createCProjects()
                            }
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

function createWebDevProjects() {
    return (
        <div>
            {
                createProject(
                    "Etch-A-Sketch",
                    require("./etch-a-sketch.jpg"),
                    "An Etch-A-Sketch replica done in javascript. The board can be colored in with white or random colors and a greyscale.",
                    ["Javascript", "HTML", "CSS"],
                    "https://jack5661.github.io/etch-a-sketch/")
            }
            {
                createProject(
                    "Calculator",
                    require("./calc.jpg"),
                    "Basic calculator created with vanilla javascript. Uses the Shunting Yard algorithm to convert between infix notation" +
                    " to postfix notation.",
                    ["Javascript", "HTML", "CSS"],
                    "https://jack5661.github.io/js-calculator/"
                )
            }
            {
                createProject(
                    "Library",
                    require("./Library.jpg"),
                    "A library website that can store information about your current readling list. Can hold information about" +
                    "the book's title, author, number of pages, and if you have finished reading the book.",
                    ["Javascript", "HTML", "CSS"],
                    "https://jack5661.github.io/library/"
                )
            }
            {
                createProject(
                    "Tic-Tac-Toe",
                    require("./tic-tac-toe.jpg"),
                    "Standard tic-tac-toe game. Can keep track of score and can be played by one or two people on the same computer. The " +
                    "computer player does not use a specific algorithm, it picks spots on the board randomly.",
                    ["Javascript", "HTML", "CSS"],
                    "https://jack5661.github.io/tic-tac-toe/"
                )
            }
            {
                createProject(
                    "Restaurant Page",
                    require("./restaurant.jpg"),
                    "A basic Restaurant Page with tabs for Home, Menu, and Contact. This project focused on creating HTML elements " +
                    "mainly in Javascript as opposed to writing them into the HTML file. This project was also my first creation " +
                    "with webpack.",
                    ["Webpack" , "Javascript" , "HTML" , "CSS"],
                    "https://jack5661.github.io/restaurant-page/"
                )
            }
            {
                createProject(
                    "Project To-do List",
                    require("./todo.jpg"),
                    "Basic to-do list where one can keep track of their projects and project tasks. Uses localStorage so the created " +
                    "projects will be remembered across sessions. There is also a priority systmem with the tasks where high priority tasks " +
                    "are colored red and medium and low tasks are colored yellow and blue",
                    ["Webpack", "localStorage", "Javascript", "HTML", "CSS"],
                    "https://jack5661.github.io/todo-list/"
                )
            }
            {
                createProject(
                    "React Restaurant Page",
                    require("./react-restaurant.jpg"),
                    "Simple remake of the restaurant page created with vanilla Javascript. First time experimenting with React.",
                    ["React", "Javascript"],
                    "https://jack5661.github.io/react-restaurant/"
                )
            }
            {
                createProject(
                    "Weather App",
                    require("./weather.jpg"),
                    "Enter in a city into the search bar to find the current weather. " +
                    "First time using external API's to create a website and first use of asynchronous functions in Javascript. " + 
                    "Uses \"openweathermap\" and \"unsplash.com\" to " +
                    "search for the weather and find a suitable background image of the city to be searched.",
                    ["openweathermap API", "unsplash.com", "React", "Javascript"],
                    "https://jack5661.github.io/weather-app/"
                )
            }
        </div>
    );
}

function createPythonProjects() {
    return (
        <div>
            {
                createProject("Timer-Python",
                                require("./Timer-Python.jpg"),
                                "Basic Pomodoro Timer for productivity. Features a thought box that can be used to " + 
                                "write down distractions or random thoughts during a work session to be dealt with later.", 
                                ["tkinter", "datetime", "time", "simpleaudio", "os"],
                                "https://github.com/jack5661/Timer-Python"
                )
            }
        </div>
    )
}

function createCProjects() {
    return (
        <div>
            {
                createProject("SDL_ChasetheSpiders", 
                            require("./ChasetheSpiders.jpg"), 
                            "Player chases spiders and eats them for points. Can track current points, points from " + 
                            "previous sessions, and has a pause button. The spiders enemies currently move in random directions " + 
                            "and spawn in random positions in the map. Currently still working on this game",
                            ["SDL2", "C++", "Microsoft Visual Studio"],
                            "https://github.com/jack5661/SDL_ChasetheSpiders"
                            )
            }
        </div>
    );
}

function createProject(title, pic, desc, tech, link) {
    const listitems = tech.map(item => <li>{item}</li>);
    return (
        <div className = "Project">
            <h2 className = "Project_Title">{title}</h2>
            <div>
                <a  rel="noopener noreferrer" target = "_blank" href = {link}><img src = {pic} className = "Project_Pic" /></a>
                <div className = "Text">
                    <p className = "Description">{desc}</p>
                    <ul className = "Technologies">
                    {listitems}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
