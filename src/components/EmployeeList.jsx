import React from "react";
import employees from "../data/employees.json";


function EmployeeList(){


return(

<div>


<h2>
Employee Details
</h2>


{

employees.map((employee)=>(


<div className="employee-card" key={employee.id}>


<h3>
{employee.name}
</h3>


<p>
Email: {employee.email}
</p>


<p>
Department: {employee.department}
</p>


</div>


))

}



</div>

)

}


export default EmployeeList;