import React from "react";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import LeaveManagement from "../components/LeaveManagement";


function HRDashboard(){


return(

<div className="dashboard">


<h1>
HR Dashboard
</h1>


<div className="card">

<EmployeeForm/>

</div>



<div className="card">

<EmployeeList/>

</div>



<div className="card">

<LeaveManagement/>

</div>


</div>


)

}


export default HRDashboard;