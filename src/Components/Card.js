import "./card.css"

export default function Card({id, title, imageurl, description, link}){
    return(
            <div className="card">
                <div className="project-image">
                    <img src = {imageurl} alt = "project" key={id}/>
                </div>
                <hr></hr>
                <div className="description">
                    <div className="title"><strong>{title}</strong></div>
                    <div className="descriptiontext">{description}</div>
                    <div className="link">
                        <button><a style={{color:"white"}} href={link} target={"_blank"} rel = {"noreferrer"}>Github</a></button>
                    </div>
                </div>
            </div>
    )
}