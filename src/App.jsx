
import { BrowserRouter,Routes,Route } from "react-router-dom";
//import Output from "./Component/Output";
import Home from "./Component/Home";
import RegistrationForm from "./Component/RegistrationForm";
import Singin from "./Component/Singin";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Employeelist from "./Component/Employeelist";
import { createContext, useState } from "react";
const listContext=createContext();
function App() {
  const[employeelist,setemployeelist]=useState([]);
  return (
    <>
    <listContext.Provider value={{employeelist,setemployeelist}}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
    <Route path="/Singin" element={<Singin/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Login" element={<Singin/>}/>
    <Route path="/Employeelist"element={<Employeelist/>}/>
    </Routes>
    </BrowserRouter>
    </listContext.Provider>
    </>
  )
}
export {listContext}

export default App
