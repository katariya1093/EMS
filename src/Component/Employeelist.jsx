import { useContext, useState } from "react";
import { listContext } from "../App";

function Employeelist() {
  const { employeelist, setemployeelist } = useContext(listContext);
  const [formvalue, setformvalue] = useState({
    Employeename: "",
    EmployeeID: "",
    Desigination: "",
    Email: "",
    Education: "",
    Address: "",
    Salary: "",
    joiningDate: "",
    performance: "normal",
  });
  function handelchange(e) {
    const { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
  }
  function handelsubmit(e) {
    e.preventDefault();
    setemployeelist([...employeelist, formvalue]);
    setformvalue({
      Employeename: "",
      EmployeeID: "",
      Desigination: "",
      Email: "",
      Education: "",
      Address: "",
      Salary: "",
      joiningDate: "",
      performance: "",
    });
    // console.log(formvalue);
  }
  //console.log(employeelist);

  function handeldelete(ind){
    const afterdelte=employeelist?.filter((_,index)=>index!==ind);
    setemployeelist(afterdelte)

  }
  return (
    <>
      <div className="bg-slate-300 h-screen w-screen relative">
        <div className="h-min w-full absolute top-28 ">
          <h1 className="text-center text-blue-900 font-sans font-bold text-2xl mt-5 underline">
            Add Employees
          </h1>
          <form className="flex gap-6 flex-wrap p-4 mt-3">
            <div>
              <label className="text-xl font-medium">Employee Name</label>
              <br></br>
              <input
                type="text"
                name="Employeename"
                value={formvalue?.Employeename}
                placeholder="Employee name"
                className=" p-2 text-[1.2rem]  "
                onChange={handelchange}
              />
            </div>
            <div>
              <label className="text-xl font-medium">Employee ID</label>
              <br></br>
              <input
                type="text"
                name="EmployeeID"
                value={formvalue?.EmployeeID}
                placeholder="Employee ID"
                className=" p-2 text-[1.2rem]"
                onChange={handelchange}
              />
            </div>
            <div>
              <label className="text-xl font-medium"> Desigination</label>
              <br></br>
              <input
                type="text"
                name="Desigination"
                value={formvalue?.Desigination}
                placeholder="Employee Desigination"
                className=" p-2 text-[1.2rem]"
                onChange={handelchange}
              />
            </div>
            <div>
              <label className="text-xl font-medium"> Email</label>
              <br></br>
              <input
                type="text"
                name="Email"
                value={formvalue?.Email}
                placeholder="Employee Email"
                className=" p-2 text-[1.2rem]"
                onChange={handelchange}
              />
            </div>
            <div>
              <label className="text-xl font-medium">Education </label>
              <br></br>
              <input
                type="text"
                name="Education"
                value={formvalue?.Education}
                placeholder="Employee Education"
                className=" p-2 text-[1.2rem]"
                onChange={handelchange}
              />
            </div>
            <div>
              <label className="text-xl font-medium">Address</label>
              <br></br>
              <input
                type="text"
                name="Address"
                value={formvalue?.Address}
                placeholder="Employee Address"
                className=" p-2 text-[1.2rem]"
                onChange={handelchange}
              />
            </div>
            <div>
              <label className="text-xl font-medium">Salary</label>
              <br></br>
              <input
                type="text"
                name="Salary"
                value={formvalue?.Salary}
                placeholder="Employee Salary"
                className=" p-2 text-[1.2rem]"
                onChange={handelchange}
              />
            </div>
            <div>
              <label htmlFor="" className="text-xl font-medium">
                Joining Date
              </label>
              <br></br>
              <input
                type="date"
                name="joiningDate"
                value={formvalue?.joiningDate}
                className="w-full p-2 "
                onChange={handelchange}
              />
            </div>
            <div>
              <label className="text-xl font-medium">Performance</label>
              <br></br>
              <select
                name="performance"
                value={formvalue?.performance}
                className="p-2 text-[1.2rem] w-[10rem]"
                onChange={handelchange}
              >
                <option value="normal">Normal</option>
                <option value="average">Average</option>
                <option value="excelent">Excelent</option>
              </select>
            </div>
            <br></br>
            <button
              onClick={handelsubmit}
              type="submit"
              className="active:scale-95  px-3 text-white bg-blue-900  py-2 text-xl font-semibold w-[6rem]"
            >
              Add
            </button>
          </form>
          <div className="mt-2 bg-slate-300 h-min p-3 ">
            {employeelist.map((elem,index)=>{
                return(
<div className="maintask flex gap-10" key={index}>
              <div>
                <label
                  htmlFor=""
                  className="text-[1rem] font-semibold underline"
                >
                  E.No
                </label>
                <br></br>
                <p type="text" className="w-10 h-10  ">
                 {index+1}.
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[1rem] font-semibold underline "
                >
                  Employee Name
                </label>
                <br></br>
                <p type="text" className=" h-10 w-full text-sky-500  ">
                  {elem.Employeename}
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[1rem] font-semibold underline"
                >
                  Employee ID
                </label>
                <br></br>
                <p type="text" className="h-10 text-sky-500  ">
                  {elem.EmployeeID}
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[1rem] font-semibold underline"
                >
                  Email
                </label>
                <br></br>
                <p type="text" className="h-10 text-sky-500 truncate  ">
                  {elem.Email}
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[1rem] font-semibold underline"
                >
                  Desigination
                </label>
                <br></br>
                <p type="text" className="h-10 w-full text-sky-500  ">
                  {elem.Desigination}
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[1rem] font-semibold underline"
                >
                  Salary
                </label>
                <br></br>
                <p type="text" className="h-10 text-sky-500  ">
                  {elem.Salary}
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[1rem] font-semibold underline"
                >
                  JoiningDate
                </label>
                <br></br>
                <p type="text" className="h-10 text-sky-500  ">
                  {elem.joiningDate}
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[1rem] font-semibold underline"
                >
                  Performance
                </label>
                <br></br>
                <p type="text" className="h-10 text-sky-500  ">
                  {elem.performance}
                </p>
              </div>
              <button className="h-8 w-[5%] border-2 mt-3 bg-red-700 text-white active:scale-95" onClick={() => handeldelete(index)}>Delete</button>
            </div>
                )
            })}
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Employeelist;
