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


export default function Skills(){
    return(
        <div className="skills">
            <div className="devskills">
                <div className="skill">
                    <img src = {reactlogo} alt = "react logo"></img>
                    {/* React */}
                </div>
                <div className="skill">
                <img src = {gitlogo} alt = "git logo"></img>
                </div>
                <div className="skill">
                <img src = {nodelogo} alt = "node logo"></img>
                </div>
                <div className="skill">
                <img src = {cpplogo} alt = "c++ logo"></img>
                </div>
                <div className="skill">
                <img src = {javascriptlogo} alt = "JS logo"></img>
                </div>
                <div className="skill">
                <img src = {dockerlogo} alt = "docker logo"></img>
                </div>
                <div className="skill">
                <img src = {kuberneteslogo} alt = "kubernetes logo"></img>
                </div>
                <div className="skill">
                <img src = {typescriptlogo} alt = "typescript logo"></img>
                </div>
                <div className="skill">
                <img src = {css3logo} alt = "css3 logo"></img>
                </div>
                <div className="skill">
                <img src = {pythonlogo} alt = "python logo"></img>
                </div>
                <div className="skill">
                <img src = {clogo} alt = "c logo"></img>
                </div>
                <div className="skill">
                <img src = {htmllogo} alt = "html logo"></img>
                </div>
            </div>
            <div className="problem-solving">
                <div className="pscard" id="codeforces">
                        codeforces
                </div>
                <div className="pscard" id="codechef">
                    <img src={starimage} alt = "star"></img>
                </div>
            </div>
        </div>
    )
}