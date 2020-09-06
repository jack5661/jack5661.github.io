import React from "react";
import "./About.css";

import "../index.css";

class About extends React.Component {
    render() {
        return (
            <div>
                <div className = "Welcome">
                    <h1>Hello!</h1>
                    <h1>My Name is Jacky Le</h1>
                </div>
                <div className = "Box" style = {{marginTop: "75px", textAlign: "center",}}>
                    <p className = "Personal_Description">
                        I am a third year student studying at the University of British Columbia! I am currently majoring 
                        in Computer Engineering.  
                    </p>
                    <div>
                        <h2>Familiar with the Following Languages:</h2>
                        <div className = "Pictures">
                            <img alt = "C logo" src = {require("./CLogo.png")}/>
                            <img alt = "C++ Logo" style = {{width: "160px", height: "180px", paddingTop: "22px"}}src = {require("./C++Logo.png")} />
                            <img alt = "Java Logo" src = {require("./JavaLogo.svg")} />
                            <img alt = "Python Logo" src = {require("./PythonLogo.png")} />
                            <img alt = "Git Logo" src = {require("./GitLogo.png")} />
                            <img alt = "HTML Logo" src = {require("./HTMLLogo.png")} />
                            <img alt = "CSS Logo" src = {require("./CSSLogo.png")} />
                            <img alt = "Javascript Logo" src = {require("./JSLogo.png")} />
                            <img alt = "React Logo" style = {{maxWidth: "300px"}} src = {require("./ReactLogo.png")} />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
