import React from 'react'
import Fish from '../Fish';

export default function AddFish(props) {
    return (
        <div>
        <form onSubmit = {props.handleSubmit}>
            <label>Name</label> 
            <input name="name" onChange={props.handleInput} value={props.name}/>
            <label>Width</label>
            <input name="width" type="number" onChange={props.handleInput} value={props.width}/>
            <label>color</label>
            <input name="color" type="color" onChange={props.handleInput} value={props.color}/>
            <button>Add my fish!</button>
        </form>
        <Fish  name={props.name} width={props.width} color={props.color}/>
        </div>
    )
}
