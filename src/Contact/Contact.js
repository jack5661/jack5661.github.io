import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    render() {
        return (
            <div className = "Box">
                <h1 style = {{paddingBottom: "25px"}}>Contact</h1>
                <div className = "Contact">
                    <div style = {{display: "flex", margin: "0 auto"}}>
                        <h2>GitHub Link: <a target = "_blank" href = "https://github.com/jack5661">https://github.com/jack5661</a></h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
