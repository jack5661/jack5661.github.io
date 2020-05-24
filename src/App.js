import React from 'react';
import logo from './logo.svg';

import NavBar from "./NavBar/NavBar.js";
import About from "./About/About.js";
import Projects from "./Projects/Projects";
import Courses from "./Courses/Courses";
import Contact from "./Contact/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <About/>,
    };
  }

  render() {
    return (
      <div>
        <NavBar showAbout = {() => this.setState({page: <About/>})} 
                showProjects = {() => this.setState({page: <Projects/>})}
                showCourses = {() => this.setState({page: <Courses/>})}
                showContact = {() => this.setState({page: <Contact/>})}
        />
        {this.state.page}
      </div>
    );
  }
}

export default App;
