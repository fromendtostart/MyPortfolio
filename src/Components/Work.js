import data from "../data.json"
import Card from "./Card"
import "./work.css"

export default function Work(){
    
    return(
        <div className="work">
            <div className="cards">
                {
                    data.map(element =>{
                        return(
                        <div className="cards">
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