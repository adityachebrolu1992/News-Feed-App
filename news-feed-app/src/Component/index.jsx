import React from "react";
import "./style.css";



export default function MyComponent(props) {

    function FillInfo() {
        // console.log("full info",props.data.FullData,"name",props.data.name)
        props.callBack(props.data.name, props.data.FullData);
    }

    return (
        <div id="card-container">
            <h1 className="inside-card">{props.data.name}</h1>
            <p className="inside-card">{props.data.abstract}</p>
            <button onClick={FillInfo} >Read More</button>
        </div>

    )
}