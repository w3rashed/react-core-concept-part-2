import { useEffect, useState } from "react"
import User from "./user";

export default function Users(){
    const [users, setUsers] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    },[])
    const usersStyle ={
        border:'3px solid green',
        margin:'15px',
        padding:'15px',
        borderRadius:'20px'
    }
    return(
        <div style={usersStyle}>
            <h3>Users: {users.length}</h3>
            
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}