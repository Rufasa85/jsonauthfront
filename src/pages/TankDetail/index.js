import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import API from '../../utils/API';
import "./style.css"
import Fish from "../../components/Fish"
import AddFish from '../../components/AddFish';


export default function TankDetail(props) {
    const { id } = useParams();

    const [tankObj, setTankObj] = useState({
       name:"",
        canEdit: false,
        Fishes: []
    })
    const [newFish, setNewFish] = useState({
        name: "",
        color: "#bada55",
        width: 0,
        tank: id
    })

    useEffect(() => {
        API.getSingleTankWithFish(id, props.user.token).then(res => {
            console.log(res.data)
            setTankObj({
                name: res.data.tank.name,
                Fishes: res.data.tank.Fishes,
                canEdit: res.data.canEdit
            })
        }).catch(err => {
            console.log(err);
        })
    }, [props.user.token])

    const handleFishInput = event => {
        const { name, value } = event.target;
        setNewFish({
            ...newFish,
            [name]: value
        })
    }

    const handleFishFormSubmit = event => {
        event.preventDefault();

        API.addFish(newFish, props.user.token).then(res => {
            setNewFish({
                name: "",
                color: "#bada55",
                width: 0,
                tank: id
            })
            API.getSingleTankWithFish(id, props.user.token).then(res => {
                console.log(res.data)
                setTankObj({
                    name: res.data.tank.name,
                    color: res.data.tank.color,
                    width: res.data.tank.width,
                    Fishes: res.data.tank.Fishes,
                    canEdit: res.data.canEdit
                })
            }).catch(err => {
                console.log(err);
            })
        })
    }

    return (
        <div>
            <h1>Tanks name: {tankObj.name}</h1>
            <div className="TankDetail">
                {tankObj.Fishes.map(fish => <Fish key={fish.id} name={fish.name} color={fish.color} width={fish.width} />)}
            </div>
            <div className="seaFloor"></div>
            {tankObj.canEdit?<AddFish handleSubmit={handleFishFormSubmit} handleInput={handleFishInput} name={newFish.name} color={newFish.color} width={newFish.width} />:null}
        </div>
    )
}
