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
import mongodblogo from "../images/mongodb.png";
import awslogo from "../images/aws.png";
import tailwindlogo from "../images/tailwind.png";


export default function Skills(){
    return(
        <div className="skills" id="skills">
            <h1>Languages, frameworks and tools</h1>
            <div className="devskills" id="devskills">
                <div className="skill">
                    <img src = {reactlogo} alt = "react logo"></img>
                    React
                </div>
                <div className="skill">
                    <img src = {nodelogo} alt = "node logo"></img>
                    Node
                </div>
                <div className="skill">
                    <img src = {awslogo} alt = "aws logo"></img>
                    AWS
                </div>
                <div className="skill">
                    <img src = {mongodblogo} alt = "mongodb logo"></img>
                    MongoDB
                </div>
                <div className="skill">
                    <img src = {javascriptlogo} alt = "JS logo"></img>
                    Javascript
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
                    <img src = {dockerlogo} alt = "docker logo"></img>
                    Docker
                </div>
                <div className="skill">
                    <img src = {kuberneteslogo} alt = "kubernetes logo"></img>
                    Kubernetes
                </div>
                <div className="skill">
                    <img src = {gitlogo} alt = "git logo"></img>
                    Git
                </div>
                <div className="skill">
                    <img src = {cpplogo} alt = "c++ logo"></img>
                    C++
                </div>
                <div className="skill">
                    <img src = {clogo} alt = "c logo"></img>
                    C
                </div>
                <div className="skill">
                    <img src = {htmllogo} alt = "html logo"></img>
                    HTML
                </div>
                <div className="skill">
                    <img src = {tailwindlogo} alt = "tailwind logo"></img>
                    Tailwind
                </div>
            </div>
            <h1 id = "problemsolving">Problem solving skills</h1>
            <div className="problem-solving" >
                <div className="pscard" id="codeforces">
                    Codeforces
                    <span style={{color:"darkturquoise"}}><strong>Pupil</strong> (1427)</span>
                    <img src = {codeforcesImage} alt = "code"></img>
                    <button className="profile-button"><a href = "https://codeforces.com/profile/starttoend" target={"_blank"} rel = {"noreferrer"}>Profile</a></button> 
                </div>
                <div className="pscard" id="codechef">
                    Codechef
                    <img src={starimage} alt = "star"></img>
                    <div className="codechef-desc">
                        4 star <br/>
                        4713 rank (India) <br/><br/>
                    <button className="profile-button"><a href="https://www.codechef.com/users/starttoend" target={"_blank"} rel = {"noreferrer"}>Profile</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}