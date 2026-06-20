import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./components/Login";
import Signup from "./components/Signup";

import HRDashboard from "./pages/HRDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import "./App.css";


function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Login/>}/>

<Route path="/signup" element={<Signup/>}/>

<Route 
path="/hr-dashboard" 
element={<HRDashboard/>}
/>


<Route 
path="/employee-dashboard" 
element={<EmployeeDashboard/>}
/>


</Routes>

</BrowserRouter>

)

}


export default App;