import data from "../data.json"
import Card from "./Card"

export default function Work(){
    
    return(
        <div className="work">
            <div className="cards">
                {
                    data.map(element =>{
                        return(
                        <div className="card">
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