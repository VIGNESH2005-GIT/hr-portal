import React,{useState} from "react";


function EmployeeForm(){


const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [department,setDepartment] = useState("");


function addEmployee(){


const newEmployee = {

name,
email,
department

};


localStorage.setItem(
"newEmployee",
JSON.stringify(newEmployee)
);


alert("Employee Added");


}



return(

<div>


<h2>
Add New Employee
</h2>


<input

placeholder="Employee Name"

onChange={(e)=>setName(e.target.value)}

/>


<input

placeholder="Employee Email"

onChange={(e)=>setEmail(e.target.value)}

/>


<input

placeholder="Department"

onChange={(e)=>setDepartment(e.target.value)}

/>



<button onClick={addEmployee}>

Add Employee

</button>



</div>


)


}


export default EmployeeForm;