import React from "react";


function LeaveManagement(){


const leave = JSON.parse(
localStorage.getItem("leaveRequest")
);



return(

<div>


<h2>
Leave Requests
</h2>


{
leave ?

<div>

<p>
Reason: {leave.reason}
</p>

<p>
Date: {leave.date}
</p>

<p>
Status: {leave.status}
</p>

</div>


:

<p>
No Requests
</p>

}



</div>

)

}


export default LeaveManagement;