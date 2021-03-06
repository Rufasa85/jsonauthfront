import React, { useState, useEffect } from "react";
import API from "./utils/API";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import TankDetail from "./pages/TankDetail";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";

function App() {
  const [userState, setUserState] = useState({
    id: "",
    email: "",
    name:"",
    token:"",
    isLoggedIn: false
  })

  const [loginState,setLoginState] = useState({
    email:"",
    password:""
  })
  const [signupState,setSignupState] = useState({
    email:"",
    password:"",
    name:""
  })

  useEffect(()=>{
    const token = localStorage.getItem("token")
    API.getSecretClub(token).then(res=>{
      console.log("success");
      setUserState({
        email:res.data.email,
        id:res.data.id,
        token:token,
        name:res.data.name,
        isLoggedIn:true
      })
    }).catch(err=>{
      localStorage.removeItem('token');
      console.log("not authed")
    })
  },[])

  const handleLoginInput = event=>{
    const {name,value} = event.target;
    setLoginState({
      ...loginState,
      [name]:value
    })
  }
  const handleSignupInput = event=>{
    const {name,value} = event.target;
    setSignupState({
      ...signupState,
      [name]:value
    })
  }

  const handleLoginSubmit = event=>{
    event.preventDefault();
    API.login(loginState).then(res=>{
      console.log(res.data);
      console.log("success!")
      localStorage.setItem("token",res.data.token)
      setUserState({
        id:res.data.user.id,
        email:res.data.user.email,
        name:res.data.user.name,
        token:res.data.token,
        isLoggedIn:true
      })
      setLoginState({
        email:"",
        password:""
      })
    }).catch(err=>{
      console.log(err);
      localStorage.removeItem("token");
      console.log('ERRORRR')
    })
  }

  const handleSignupSubmit = event=>{
    event.preventDefault();
    API.signup(signupState).then(res=>{
      console.log(res.data);
      console.log("success!")
      localStorage.setItem("token",res.data.token)
      setUserState({
        id:res.data.user.id,
        email:res.data.user.email,
        token:res.data.token,
        name:res.data.user.name,
        isLoggedIn:true
      })
      setSignupState({
        email:"",
        password:"",
        name:''
      })
    }).catch(err=>{
      console.log(err);
      localStorage.removeItem("token");
      console.log('ERRORRR')
    })
  }

  const clickHandle = event=>{
    API.getSecretClub(userState.token).then(res=>{
      console.log(res.data)
      console.log("club access")
    }).catch(err=>{
      console.log("auth failed")
      console.log(err);
    })
  }
  const logMeOut = ()=>{
    localStorage.removeItem("token");
    setUserState({
      id:"",
      email:"",
      name:"",
      token:"",
      isLoggedIn:false
    })
  }

  return (
    <Router>
    
    <NavBar user={userState} clickHandle={clickHandle} logMeOut = {logMeOut} loginState = {loginState} signupState={signupState}  handleLoginInput={handleLoginInput} handleSignupInput={handleSignupInput} handleSignupSubmit={handleSignupSubmit} handleLoginSubmit={handleLoginSubmit}/>
    <Switch>
        <Route exact path="/">
         <Home user={userState}/>
        </Route>
        <Route exact path="/tank/:id">
         <TankDetail user={userState}/>
        </Route>
        <Route exact path="/profile/:id">
          <Profile user={userState}/>
        </Route>
    </Switch>

    </Router>
  );
}

export default App;
