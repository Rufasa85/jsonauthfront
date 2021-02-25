import React, {useState,useEffect} from 'react'
import "./style.css"
import API from '../../utils/API';
import TankThumbnail from '../../components/TankThumbnail';

export default function Home() {
    const [tanks, setTanks] = useState([]);
    useEffect(()=>{
        API.getTanksWithFish().then(({data})=>{
            setTanks(data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div className="Home">
            <h1>Home page!</h1>
            <div className="tanksWrapper">
                {tanks.map(tank=><TankThumbnail key={tank.id} fish={tank.Fishes} name={tank.name}/>)}
            </div>
        </div>
    )
}
