const URL_PREFIX = "http://localhost:8080"

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
    getSingleTankWithFish: id=>{
        return axios.get(`${URL_PREFIX}/api/tanks/${id}/fishes`)
    }
}

export default API