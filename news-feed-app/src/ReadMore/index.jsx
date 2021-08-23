import React from "react"
import "./style.css"


export default function FullData(props) {

    function change() {
        props.setFlag(true);
    }


    console.log(props.fullInformation.name)

    return (
        <div>
            <button id="main-article-button" onClick={change}>back</button>

            <p id="heading" className="full-data-info">{props.fullInformation.name}</p>
            <p className="full-data-info">{props.fullInformation.FullInfo}</p>
        </div>

    )
}