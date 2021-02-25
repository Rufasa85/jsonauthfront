import React, {useState,useEffect} from 'react'
import "./style.css"
import API from '../../utils/API';
import TankThumbnail from '../../components/TankThumbnail';

export default function Home(props) {
    const [tanks, setTanks] = useState([]);
    const [newTank,setNewTank]= useState("");
    useEffect(()=>{
        API.getTanksWithFish().then(({data})=>{
            console.log(data);
            setTanks(data)
        }).catch(err=>{
            console.log(err);
        })
    },[])

    const addTank = event =>{
        event.preventDefault();
        API.addTank({name:newTank},props.user.token).then(res=>{
            API.getTanksWithFish().then(({data})=>{
                setTanks(data)
            }).catch(err=>{
                console.log(err);
            })
        }).catch(err=>{
            console.log(err);
        })

    }
    return (
        <div className="Home">
            <h1>Home page!</h1>

            {props.user.isLoggedIn?(<form onSubmit={addTank}>
                <input value={newTank} onChange={(event)=>setNewTank(event.target.value)}placeholder="new tank name"/>
                <button>add tank!</button>
            </form>):null}
            <div className="tanksWrapper">
                {tanks.map(tank=><TankThumbnail key={tank.id} fish={tank.Fishes} name={tank.name} id={tank.id}/>)}
            </div>
        </div>
    )
}
