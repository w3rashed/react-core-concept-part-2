import { useState } from "react"

export default function Counts(){
    const [Count, setCount] = useState(0);

    const handeAdd=()=>{
        const newCount =Count +1;
        setCount(newCount)
    }
    const handeReduce=()=>{
        if (Count!=0){
            const newCount =Count -1;
            setCount(newCount)
        }
    }
    
    return (
        <div style={{border:'2px solid yellow',borderRadius:'20px'}}>
            <h3>Count: {Count}</h3>
            <button onClick={handeAdd}>Add</button>
            <button onClick={handeReduce}>Reduce</button>
        </div>
    )
}