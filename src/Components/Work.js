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
                            <Card title = {element.title}
                            image-url = {element.imageurl}
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