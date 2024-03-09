import './friends.css'
export default function Frined({firend}){
    const {name, email} = firend;
    // console.log(firend)
    return (
        <div className='friendsDiv'>
            <h4>Nmae: {name}</h4>
            <h4>Email: {email}</h4>
        </div>
    )
}