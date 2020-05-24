import React from "react";
import "./NavBar.css";

import "../index.css";

class NavBar extends React.Component {
    render() {
        return (
            <div className = "NavBar">
                <ul className = "Bar">
                    <a href = "#top"><li onClick = {this.props.showAbout}>Home</li></a>
                    <a href = "#top"><li onClick = {this.props.showProjects}>Technical Projects</li></a>
                    <a href = "#top"><li onClick = {this.props.showCourses}>Relevant Courses</li></a>
                    <a href = "#top"><li onClick = {this.props.showContact}>Contact</li></a>
                </ul>
            </div>
        );
    }
}

export default NavBar;