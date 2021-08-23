import React from "react"
import MyComponent from "../Component"
import "./style.css"


export default function CardList(props) {



    return (
        <div id="wrapper">
            {props.info.map((val, idx) => {
                return <MyComponent callBack={props.callBack} key={idx} data={val} />
            })}
        </div>
    )
}