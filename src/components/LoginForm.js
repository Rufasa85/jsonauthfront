import React from 'react'

export default function LoginForm(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <form onSubmit={props.handleFormSubmit}>
                <input name="email" placeholder="email" value={props.email} onChange = {props.handleInputChange}/>
                <input type ="password" name="password" placeholder="password" value= {props.password} onChange = {props.handleInputChange}/>
                {props.name||props.name===""? <input name="name" placeholder="name" value={props.name} onChange = {props.handleInputChange}/>:null}
                <button>{props.title}</button>
            </form>
        </>
    )
}
