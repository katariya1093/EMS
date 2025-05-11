import { useState } from "react"
import { Link } from "react-router-dom";
function Singin(){
    const data={
        name:"",
        email:"",
        password:"",
    }
     const[input,setinput]=useState(data)
const handelinput =(e)=>{
setinput({...input,[e.target.name]:e.target.value})
}
console.log(input)
const[msg,setmsg]=useState(false)
 const handelSubmit =(e)=>{
    e.preventDefault()
    if(!input.name ||  !input.email || !input.password){
alert("All information are maintaroy")
 }
 else{
    setmsg(true)
    localStorage.setItem("name",input.name)
    localStorage.setItem("email",input.email)
    localStorage.setItem("password",input.password)
   window.open("/Employeelist")
 }
}
    return(<>
    <div className="flex justify-center items-center  h-screen w-screen bg-slate-500">
    <form className=" container h-[400px] w-[420px] bg-slate-300 p-6" onSubmit={handelSubmit}>
       <div className="text-center text-xl">{msg?  input.name+ ': Sing up successfully' : null}  </div> 

        <div className="headingdiv flex justify-center items-center mt-4 bg-blue-900">
           <h1 className="text-3xl  font-bold p-2  text-center text-white ">Login</h1>
        </div>
        <div className="inputdiv flex      flex-col mt-5 gap-2">
            <input type="text" placeholder="Enter Your Name"  className=" p-2 text-xl  " name="name" value={input.name}  onChange={handelinput}/>
            <input type="Email" placeholder="Enter Your Email" className=" p-2 text-xl  " name="email" value={input.email} onChange={handelinput} />
            <input type="Password"  placeholder="Enter Your Password" className=" p-2 text-xl  " name="password" value={input.password}  onChange={handelinput}  />
        </div>
        <div className="paradiv mt-4  flex ">
            <h1 className=" flex">Create Account :  <Link to="/RegistrationForm" className="text-sky-600 hover:underline active:scale-90 cursor-pointer hover:italic " data={input.name}>Registeration</Link></h1>
        </div>
        <div className="submitbtn flex justify-center items-center mt-4">
        <button className="bg-blue-900 text-white px-4 py-2 font-medium text-xl active:scale-90  ">
                Login
            </button>
        </div>
        
        
        </form>
        </div>
        </>)
}
export default Singin;