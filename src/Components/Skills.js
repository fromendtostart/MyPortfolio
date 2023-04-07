import "./skills.css"
import reactlogo from "../images/react.png"
import typescriptlogo from "../images/typescript.png"
import pythonlogo from "../images/python.png"
import htmllogo from "../images/html.png"
import css3logo from "../images/css3.png"
import dockerlogo from "../images/docker.png"
import javascriptlogo from "../images/javascript.png"
import kuberneteslogo from "../images/kubernetes.png"
import nodelogo from "../images/node.png"
import cpplogo from "../images/cpp.png"
import clogo from "../images/c.png"
import gitlogo from "../images/git.png"
import starimage from "../images/A_star.png";
import codeforcesImage from "../images/PScode.png";


export default function Skills(){
    return(
        <div className="skills">
            <div className="devskills">
                <div className="skill">
                    <img src = {reactlogo} alt = "react logo"></img>
                    React
                </div>
                <div className="skill">
                    <img src = {gitlogo} alt = "git logo"></img>
                    Git
                </div>
                <div className="skill">
                    <img src = {nodelogo} alt = "node logo"></img>
                    Node
                </div>
                <div className="skill">
                    <img src = {cpplogo} alt = "c++ logo"></img>
                    C++
                </div>
                <div className="skill">
                    <img src = {javascriptlogo} alt = "JS logo"></img>
                    Javascript
                </div>
                <div className="skill">
                    <img src = {dockerlogo} alt = "docker logo"></img>
                    Docker
                </div>
                <div className="skill">
                    <img src = {kuberneteslogo} alt = "kubernetes logo"></img>
                    Kubernetes
                </div>
                <div className="skill">
                    <img src = {typescriptlogo} alt = "typescript logo"></img>
                    Typescript
                </div>
                <div className="skill">
                    <img src = {css3logo} alt = "css3 logo"></img>
                    CSS
                </div>
                <div className="skill">
                    <img src = {pythonlogo} alt = "python logo"></img>
                    Python
                </div>
                <div className="skill">
                    <img src = {clogo} alt = "c logo"></img>
                    C
                </div>
                <div className="skill">
                    <img src = {htmllogo} alt = "html logo"></img>
                    HTML
                </div>
            </div>
            <div className="problem-solving">
                <div className="pscard" id="codeforces">
                    Codeforces
                    <span style={{color:"green"}}><strong>Pupil</strong> (1308)</span>
                    <img src = {codeforcesImage} alt = "code"></img>
                    <button className="profile-button">Profile</button> 
                </div>
                <div className="pscard" id="codechef">
                    <img src={starimage} alt = "star"></img>
                    <div className="codechef-desc">
                        4 star <br/>
                        4 rank globally <br/>
                        <button className="profile-button">Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}