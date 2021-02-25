import React from 'react'
import "./style.css"

export default function FishCard(props) {
    return (
        <div className="FishCard" style={{background:props.color}}>
            <h3>{props.name}</h3>
            <h5>width:{props.width}</h5>
            {props.isMyFish?<button onClick={props.delete}>DeleteMe!</button>:null}
        </div>
    )
}
