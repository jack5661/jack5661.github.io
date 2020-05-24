import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    render() {
        return (
            <div className = "Box">
                <h1 className = "Title">Contact</h1>
                <div className = "Contact">
                    <h2>Email: jack5661@hotmail.ca</h2>
                    <div style = {{display: "flex", margin: "0 auto"}}>
                        <a href = "https://github.com/jack5661"><div className = "GitHubLink"></div></a>
                        <h2>GitHub Link: <a href = "https://github.com/jack5661">https://github.com/jack5661</a></h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
