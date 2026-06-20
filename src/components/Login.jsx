import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();


function handleLogin(){


const savedUser = JSON.parse(localStorage.getItem("user"));


if(savedUser){

if(
savedUser.email === email &&
savedUser.password === password
){


if(savedUser.role==="HR"){

navigate("/hr-dashboard");

}
else{

navigate("/employee-dashboard");

}


}
else{

alert("Wrong Email or Password");

}


}

else{

alert("No user found. Signup first");

}


}



return(

<div>


<h2>Login</h2>


<input

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>



<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button onClick={handleLogin}>

Login

</button>


</div>


)


}


export default Login;