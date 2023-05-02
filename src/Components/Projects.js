import data from "../data.json"
import Card from "./Card"
import "./projects.css"

export default function Projects(){
    
    return(
        <div className="projects">
            <h1>Projects</h1>
            <div className="cards">
                {
                    data.map(element =>{
                        return(
                        <div className="cards" id="projects" key={element.id}>
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