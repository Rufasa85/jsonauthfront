import React,{useState,useEffect} from 'react';
import  {useParams} from "react-router-dom"
import API from '../../utils/API';
import "./style.css"
import Fish from "../../components/Fish"


export default function TankDetail() {
    const  [tankObj, setTankObj] = useState({
        name:"",
        color:"",
        width:0,
        Fishes:[]
    })
    const {id} = useParams();

    useEffect(()=>{
        API.getSingleTankWithFish(id).then(res=>{
            setTankObj(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <h1>Tanks name: {tankObj.name}</h1>
            <div className="TankDetail">
            {tankObj.Fishes.map(fish=><Fish key={fish.id} name={fish.name} color={fish.color} width={fish.width}/>)}
            </div>
            <div className="seaFloor"></div>
        </div>
    )
}
