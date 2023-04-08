import data from "../data.json"
import Card from "./Card"
import "./projects.css"

export default function Projects(){
    
    return(
        <div className="projects">
            <div className="cards">
                {
                    data.map(element =>{
                        return(
                        <div className="cards" id="projects">
                            <Card 
                            id = {element.id}
                            title = {element.title}
                            imageurl = {element.imageurl}
                            description = {element.description}
                            link = {element.link} />
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}