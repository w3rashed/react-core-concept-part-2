import { useState } from "react"

export default function Team(){
    const [team, setTeam ] = useState(11);
    const teamStyle= {
        border:'3px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'20px'
    }
    const handleAdd = ()=>{
        if(team <20){
            const newTeam = team + 1;
            setTeam(newTeam)
        }
    }
    const handleRemove = ()=>{
        if(team >11){
            const newTeam = team - 1;
            setTeam(newTeam)
        }
    }
    return(
        <div style={teamStyle}>
            <h2>Playrs: {team}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}