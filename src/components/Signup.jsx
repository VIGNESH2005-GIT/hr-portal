import React, {useState} from "react";

function Signup(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("Employee");


function handleSignup(){

const user = {
name,
email,
password,
role
};


localStorage.setItem("user",JSON.stringify(user));

alert("Signup Successful");

}


return(

<div>

<h2>Signup</h2>


<input 
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>


<input 
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input 
placeholder="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>


<select onChange={(e)=>setRole(e.target.value)}>

<option>
Employee
</option>

<option>
HR
</option>

</select>


<button onClick={handleSignup}>
Signup
</button>


</div>

)

}

export default Signup;