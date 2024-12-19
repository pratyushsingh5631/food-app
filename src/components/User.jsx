import { useState } from "react";
const User =(props)=>{
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(1)

    return(
        
        <div className="user-card">
            <h2>Name:{props.Name}</h2>
            <h5>Location:{props.Location}</h5>
            <h5>Contact:{props.Contact}</h5>
            <h5>Count:<button onClick={()=>setCount(count+1)}>{count}</button></h5>
            <h5>Count2:<button onClick={()=>setCount2(count2+1)}>{count2 }</button></h5>
        </div>
    )
 }
 export default User;