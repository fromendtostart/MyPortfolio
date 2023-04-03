import "./card.css"

export default function Card({id, title, imageurl, description, link}){
    return(
            <div className="card">
                <div className="project-image">
                    <img src = {imageurl} alt = "project" key={id}/>
                </div>
                <div className="description">
                    <div className="title">{title}</div>
                    <div className="descriptiontext">{description}</div>
                    <div className="link">
                        <a href={link}>Github</a>
                    </div>
                </div>
            </div>
    )
}