// const URL_PREFIX = "http://localhost:8080"
const URL_PREFIX = "https://nov2020fishback.herokuapp.com"

const axios = require("axios")

const API = {
    login:userData=>{
        return axios.post(`${URL_PREFIX}/login`,userData)
    },
    signup:userData=>{
        return axios.post(`${URL_PREFIX}/signup`,userData)
    },
    getSecretClub: token=>{
        return axios.get(`${URL_PREFIX}/secretclub`,{
            headers:{
                authorization: `Bearer: ${token}`
            }
        })
    },
    getTanksWithFish: ()=>{
        return axios.get(`${URL_PREFIX}/api/tanks/fishes`)
    },
    getSingleTankWithFish: (id,token)=>{
        return axios.get(`${URL_PREFIX}/api/tanks/${id}/fishes`,{
            headers:{
                authorization: `Bearer: ${token}`
            }
        })
    },
    getPublicProfile:(id,token)=>{
        return axios.get(`${URL_PREFIX}/user/${id}/tanks/fishes`,{
            headers:{
                authorization: `Bearer: ${token}`
            }
        })
    },
    addFish : (fish,token)=>{
        return axios.post(`${URL_PREFIX}/api/fishes`,fish,{
            headers:{
                authorization: `Bearer: ${token}`
            }
        })
    },
    delFish:(id,token)=>{
        return axios.delete(`${URL_PREFIX}/api/fishes/${id}`,{
            headers:{
                authorization:`Bearer: ${token}`
                
            }
        })
    },
    addTank :(tank,token)=>{
        return axios.post(`${URL_PREFIX}/api/tanks`,tank,{
            headers:{
                authorization: `Bearer: ${token}`
            }
        })
    },
    delTank:(id,token)=>{
        return axios.delete(`${URL_PREFIX}/api/tanks/${id}`,{
            headers:{
                authorization:`Bearer: ${token}`
                
            }
        })
    },
}

export default API