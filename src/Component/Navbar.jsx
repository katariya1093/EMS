import { Link } from "react-router-dom";
import logo from "../assets/ems.logo.5.jpeg"
function Navbar(props){
  
    return(<>
    <nav className='navbar h-20 bg-slate-400 flex justify-between items-center p-6 fixed top-0 w-full z-10 overflow-hidden  '>
      <img src={logo} className="h-32 mix-blend-multiply py-2    "/>
      <ul className='flex  gap-10 underline font-sans text-xl font-medium items-center cursor-pointer  '>
       
        <Link to="/About" className="active:scale-95" >About Us </Link>
        <Link to="/Contact" className="active:scale-95">Contact </Link>
        <Link to="/Login"className="active:scale-95" >Login </Link>
       <Link to="/" className="active:scale-95">Home</Link>
        </ul>
        
        <div className="active:scale-95">
        <Link to="/Employeelist" className=" ml-2 bg-blue-900 p-3 rounded-md text-white font-normal active:scale-95">Employee List</Link>
        </div>
        
       
    </nav>
    </>)
}
export default Navbar;