import "./footer.css"
import twitterLogo from "../images/twitter.png"
import githubLogo from "../images/github.png";
import gmailLogo from "../images/gmail.png";
import linkedinLogo from "../images/linkedin.png";

export default function Footer(){
    return(
        <div className="footer" id = "contact">
            <div className="footer-title">
                <h1>Contact</h1>
            </div>
            <div className="contacts">
            <div className="mail">
                <img src={gmailLogo} alt = "gmail logo"></img>
                <p><a href ={"mailto:chandramauliguptach@.com"} >Mail</a></p>
            </div>
            <div className="linkedin">
                <img src={linkedinLogo} alt= "linkedin logo"></img>
                <p><a href ="https://www.linkedin.com/in/chandramauli-gupta-7a97251b8/" target={"_blank"} rel = {"noreferrer"} >Linkedin</a></p>
            </div>
            <div className="github">
                <img src={githubLogo} alt="github logo"></img>
                <p><a href ={"https://github.com/fromendtostart"} target={"_blank"} rel = {"noreferrer"} >Github</a></p>
            </div>
            <div className="twitter">
                <img src={twitterLogo} alt="twitter logo"></img>
                <p><a href ={"https://twitter.com/NervesOfSilicon"} target={"_blank"} rel = {"noreferrer"} >Twitter</a></p>
            </div>
            </div>
        </div>
    )
}