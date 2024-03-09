import { useEffect, useState } from 'react'
import './friends.css'
import Frined from './friend'
export default function Friends(){
    const [friends,setFirends] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setFirends(data))
    },[])

    return(
        <div className='friendsDiv'>
            <h3>Friedns: {friends.length}</h3>
            {
              friends.map(frined =><Frined firend={frined}></Frined>) 
            }
        </div>
    )
}