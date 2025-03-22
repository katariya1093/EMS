import { useState } from "react";

function Contact(){
    function handelsubmit(e){
e.preventDefault();
if(!Name || !Email){
    alert("Please all fields are mandatory!");
}else{
    alert("Thank you connect with us we will soon get response to you");
    localStorage.setItem("name",Name);
localStorage.setItem("email",Email)

}
    }
    
    const[Name,setname]=useState("")
    const[Email,setemail]=useState("")
    return(<>
    <div className="h-screen w-screen bg-slate-500 flex justify-center items-center ">
        <form   className="container h-[270px] w-[320px]  text-center  bg-slate-300 shadow-2xl">
            <h1 className="text-3xl text-white mt-5 mb-5 bg-blue-900 w-[90%] ml-4 ">Contact Us</h1>
            <div>
                <input type="text" placeholder="Enter your name.." className="h-10 w-60 pl-2 " onChange={(e)=>setname(e.target.value)}  />
                <br></br>
                <br></br>
                <input type="email" placeholder="Enter your email.." className="h-10 w-60 pl-2 " onChange={(e)=>setemail(e.target.value)} />
            </div>
            <button className=" active:scale-95 text-xl text-white bg-blue-900 p-2  mt-5 " onClick={handelsubmit} >Submit</button>
        </form>
    </div>
    </>)
}
export default Contact;