import React from 'react'
import LoginForm from "../LoginForm"
import "./style.css"
import {Link} from "react-router-dom";

export default function NavBar(props) {
    return (
        <div className="NavBar">
      {props.user.isLoggedIn ? <span>Welcome to the club {props.user.email}</span>:null}
      {props.user.isLoggedIn ? <button onClick={props.clickHandle}>get club info</button>:null}
      {props.user.isLoggedIn ? <Link to={`/profile/${props.user.id}`}><button >MyPage</button></Link>:null}
      {props.user.isLoggedIn ? <button onClick={props.logMeOut}>Logout</button>:null}
      {!props.user.isLoggedIn? <LoginForm  title={"Login"} handleFormSubmit = {props.handleLoginSubmit} handleInputChange = {props.handleLoginInput} email = {props.loginState.email} password = {props.loginState.password} />:null}
      {!props.user.isLoggedIn? <LoginForm  name={props.signupState.name} title={"Signup"} handleFormSubmit = {props.handleSignupSubmit} handleInputChange = {props.handleSignupInput} email = {props.signupState.email} password = {props.signupState.password} />:null}
      <Link to="/"><button>Home Page</button></Link>
    </div>

    )
}
