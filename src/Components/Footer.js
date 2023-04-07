import "./footer.css"
import twitterLogo from "../images/twitter.png"
import githubLogo from "../images/github.png";
import gmailLogo from "../images/gmail.png";
import linkedinLogo from "../images/linkedin.png"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-title">
                <h2>Contact</h2>
            </div>
            <div className="contacts">
            <div className="mail">
                <img src={gmailLogo} alt = "gmail logo"></img>
            </div>
            <div className="linkedin">
                <img src={linkedinLogo} alt= "linkedin logo"></img>
            </div>
            <div className="github">
                <img src={githubLogo} alt="github logo"></img>
            </div>
            <div className="twitter">
                <img src={twitterLogo} alt="twitter logo"></img>
            </div>
            </div>
        </div>
    )
}