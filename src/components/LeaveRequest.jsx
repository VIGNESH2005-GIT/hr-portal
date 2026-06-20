import React,{useState} from "react";


function LeaveRequest(){


const [reason,setReason] = useState("");
const [date,setDate] = useState("");


function submitLeave(){


const leave = {

reason,
date,
status:"Pending"

};


localStorage.setItem(
"leaveRequest",
JSON.stringify(leave)
);


alert("Leave Request Submitted");


}



return(

<div>


<h2>
Apply Leave
</h2>


<input

placeholder="Reason"

onChange={(e)=>setReason(e.target.value)}

/>



<input

type="date"

onChange={(e)=>setDate(e.target.value)}

/>



<button onClick={submitLeave}>

Submit Leave

</button>


</div>

)


}


export default LeaveRequest;