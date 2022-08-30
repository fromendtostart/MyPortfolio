import projects from "../data"
import Card from "./Card"

export default function Work(){
    
    return(
        <div className="work">
            <div className="title">
                Projects
            </div>
             <div className="card-area">
                 <Card />

             </div>
        </div>
    )
}