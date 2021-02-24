const axios = require("axios")
const API = {
    login:userData=>{
        return axios.post(`http://localhost:8080/login`,userData)
    },
    signup:userData=>{
        return axios.post(`http://localhost:8080/signup`,userData)
    },
    getSecretClub: token=>{
        return axios.get(`http://localhost:8080/secretclub`,{
            headers:{
                authorization: `Bearer: ${token}`
            }
        })
    }
}

export default API