import React from "react";
import {Link} from "react-router-dom";


function Navbar(){

return(

<div className="navbar">

<h2>
HR Portal
</h2>


<div>

<Link to="/">
Login
</Link>


<Link to="/signup">
Signup
</Link>

</div>


</div>

)

}


export default Navbar;