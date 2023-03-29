import "./card.css"

export default function Card({title, imageurl, description}){
    return(
        <div>
            <div className="card">
                <div className="project-image">IMG</div>
                <div className="description">
                    <div className="descriptiontext">{description}</div>
                    <div className="link">{title}</div>
                </div>
            </div>
            <hr/>
        </div>
    )
}