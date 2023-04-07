import "./about.css"
import "./Button"
import Button from "./Button"

export default function About(){
    return(
        <div className="about">
            <div className="intro-section">
                <div className = "intro-text">Hi! I'm Chandramauli. Let me take you through tour.</div>
                <div className = "nav-buttons">
                    <a href={"#projects"}><Button name = "Projects" /></a>
                    <a href={"#devskills"}><Button name = "Skills" /></a>
                    <Button name = "Problem Solving" />
                    <Button name = "Work" />
                    <Button name = "Contact" />
                </div>
            </div>
        </div>
    )
}