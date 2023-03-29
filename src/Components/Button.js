import "./buttons.css"

export default function Button(props){
    return(
        <div className="buttons">
            <button className="button">
                {props.name}
            </button>
        </div>
    )
}