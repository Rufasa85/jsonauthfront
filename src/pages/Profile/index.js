import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import API from '../../utils/API';
import TankThumbnail from '../../components/TankThumbnail';
import "./style.css"
import FishCard from '../../components/FishCard';

export default function Profile(props) {
    const [myStuff,setMyStuff] = useState({
        name:"",
        Fishes:[],
        Tanks:[],
        isMyPage:false
    })
    const {id} = useParams();

    useEffect(()=>{
        API.getPublicProfile(id,props.user.token).then(res=>{
            setMyStuff(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[id,props.user.token])

    const deleteFish = fishId=>{
        API.delFish(fishId,props.user.token).then(res=>{
            console.log(res.data)
            API.getPublicProfile(id,props.user.token).then(res=>{
                setMyStuff(res.data)
            }).catch(err=>{
                console.log(err)
            })
        })
    }
    const deleteTank = tankId=>{
        API.delTank(tankId,props.user.token).then(res=>{
            console.log(res.data)
            API.getPublicProfile(id,props.user.token).then(res=>{
                setMyStuff(res.data)
            }).catch(err=>{
                console.log(err)
            })
       
        })
    }

    return (
        <div className="Profile">
            <h1>{myStuff.name}'s stuff:</h1>
            <h2>Tanks:</h2>
            <div className="tanks">
            {myStuff.Tanks.map(tank=><TankThumbnail  delete={()=>deleteTank(tank.id)} isMyTank={myStuff.isMyPage}key={tank.id} id={tank.id} name={tank.name} fish={tank.Fishes}/>)}
            </div>
            <h2>Fishes:</h2>
            <div className="cards">
            {myStuff.Fishes.map(fish=><FishCard key={fish.id} color={fish.color} delete = {()=>deleteFish(fish.id)}isMyFish={myStuff.isMyPage}width={fish.width} name={fish.name}/>)}
            </div>
        </div>
    )
}
