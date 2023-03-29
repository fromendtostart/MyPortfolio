import "./about.css"
import "./Button"
import Button from "./Button"

export default function About(){
    return(
        <div className="about">
            <div className="intro-section">
                <div className = "intro-text">Hi! I'm Chandramauli. Let me take you through tour.</div>
                <div className = "nav-buttons">
                    <Button name = "Projects" />
                    <Button name = "Projects" />
                    <Button name = "Projects" />
                    <Button name = "Projects" />
                    <Button name = "Projects" />
                </div>
            </div>
        </div>
    )
}