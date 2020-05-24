import React from "react";
import "./Courses.css";

class Courses extends React.Component {
    render() {
        return (
            <div className = "Box">
                <h1>Relevant Courses</h1>
                {
                    createCourse(
                        "APSC 160 Introduction to Computation in Engineering Design",
                        "Analysis and simulation, laboratory data acquisition and processing, measurement interfaces," +
                        " engineering tools, computer systems organization, programming languages. "
                    )
                }
                {
                    createCourse(
                        "CPEN 211 Introduction to Microcomputers",
                        "Boolean algebra; combinational and sequential circuits; organization and operation of microcomputers," + 
                        "memory addressing modes, representation of information, instruction sets, machine and assembly language programming, " + 
                        "systems programs, I/O structures, I/O interfacing and I/O programming, introduction to digital system design using microcomputers.",
                    )
                }
                {
                    createCourse(
                        "CPEN 221 Principles of Software Construction",
                        "Design, implementation, reasoning about software systems: abstraction and specification of software, " + 
                        "testing, verification, abstract data types, object-oriented design, type hierarchies, concurrent software " + 
                        "design."
                    )
                }
                {
                    createCourse(
                        "CPSC 221 Basic Algorithms and Data Structures",
                        "Design and analysis of basic algorithms and data structures; algorithm analysis methods, " + 
                        "searching and sorting algorithms, basic data structures, graphs and concurrency."
                    )
                }
                {
                    createCourse(
                        "CPSC 261 Basics of Computer Systems",
                        "Software architecture, operating systems, and I/O architectures. Relationships between application software, " + 
                        "operating systems, and computing hardware; critical sections, deadlock avoidance, and performance; " + 
                        "principles and operation of disks and networks."
                    )
                }
                {
                    createCourse(
                        "CPEN 291 Computer Engineering Design Studio I",
                        "Design projects involving hardware (electronic devices and circuits, microcomputers) and software."
                    )
                }
            </div>
        )
    }
}

function createCourse(title, desc) {
    return (
        <div className = "Course">
            <h2 className = "Course-Title">{title}</h2>
            <div className = "Course-Divider"></div>
            <p className = "Course-Desc">{desc}</p>
        </div>
    );
}

export default Courses;
