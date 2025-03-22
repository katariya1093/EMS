import { useState } from "react";

import { Link } from "react-router-dom";

function RegitrationForm() {
  const data = {
    name: "",
    email: "",
    password: "",
    Stream: "",
    Company: "",
  };
  const [input, setinput] = useState(data);

  const handelinput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input);
  //const[msg,setmsg]=useState(false)
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.password) {
      alert("All information are maintaroy");
    } else {
      alert(input.name + "  Registration sucessfully");
     setinput({...[""]})
     localStorage.setItem("name",input.name)
  localStorage.setItem("email",input.email)
  localStorage.setItem("password",input.password)
  localStorage.setItem("Stream",input.Stream)
  localStorage.setItem("College",input.Company)
    }
   
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen w-screen bg-slate-500">

    
      <form
        className=" container h-[500px] w-[420px] bg-slate-300 p-6 mt-20"
        onSubmit={handelSubmit}
      >
        <div className="headingdiv flex justify-center items-center  bg-blue-900">
          <h1 className="text-2xl  font-bold p-2  text-center text-white ">
            Registration 
          </h1>
        </div>
        <div className="inputdiv flex flex-col mt-5 gap-2">
          <input
            type="text"
            placeholder="Enter Your Name"
            className=" p-2 text-xl  "
            name="name"
            value={input.name}
            onChange={handelinput}
          />
          <input
            type="Email"
            placeholder="Enter Your Email"
            className=" p-2 text-xl  "
            name="email"
            value={input.email}
            onChange={handelinput}
          />
          <input
            type="Password"
            placeholder="Enter Your Password"
            className=" p-2 text-xl  "
            name="password"
            value={input.password}
            onChange={handelinput}
          />
          <label className="font-semibold text-gray-700 underline">Skills</label>
          <select
            className=" p-2 text-xl"
            name="Stream"
            value={input.Stream}
            onChange={handelinput}
          >
            
            <option ></option>
            <option >Frontend Developer</option>
            <option >UI&UX disgen</option>
            <option >Full Stack developer</option>
            <option >Java FullStack</option>
          </select>
          <label className="font-semibold text-gray-700 underline">Company</label>
          <select
            className=" p-2 text-xl  "
            name="College"
            value={input.College}
            onChange={handelinput}
            
          >
            <option></option>
            <option>IBM</option>
            <option>Tech Mahindera</option>
            <option>Amazon</option>
            <option>Flipkart</option>
          </select>
        </div>
        <div className="paradiv mt-4  flex ">
          <h1 className=" flex">
            Already have account?:{" "}
            <Link
              to="/Singin"
              className="text-sky-600 hover:underline active:scale-90 cursor-pointer hover:italic"
            >
              Login
            </Link>
          </h1>
        </div>
        <div className="submitbtn flex justify-center items-center mt-3">
          <button className="bg-blue-900 text-white px-4 py-2 font-medium text-xl active:scale-90  ">
            Submit
          </button>
        </div>
      </form>
      </div>
    </>
  );
}
export default RegitrationForm;
