import "./about.css"
import "./Button"
import Button from "./Button"

export default function About(){
    return(
        <div className="about">
            <div className="intro-section">
                <div className = "intro-text">Hi! I'm Chandramauli. Let me take you through tour!</div>
                <div className = "nav-buttons">
                    <a href={"#projects"}><Button name = "Projects" /></a>
                    <a href={"#skills"}><Button name = "Skills" /></a>
                    <a href={"#problemsolving"}><Button name = "Problem Solving" /></a>
                    <a href={"#work"}><Button name = "Work" /></a>
                    <a href={"#contact"}><Button name = "Contact" /></a>
                </div>
            </div>
        </div>
    )
}