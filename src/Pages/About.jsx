
import ems8 from "../assets/ems.8.avif" 
function About(){
    return(<>
    <div className="h-screen w-screen bg-slate-300  flex gap-4 pt-8   ">
        <div className="left h-[70%] w-[40%]  mt-28 ml-10 mr-10">
            <img src={ems8} className="h-full w-full mix-blend-multiply shadow-2xl   "/>
        </div>
        <div className="right  h-[50%] w-[50%]  mt-28">
            <p className=" ml-4 text-xl text-black">Most companies tell their employees how they should work. Based on the nature of their tasks, project cycles, and how much international collaborating they do, companies often allow everything from occasional remote work to 100% remote work. The focus is on managing employee tasks and performances, both domestically and overseas.

With the Covid-19 pandemic now receding into the past, many companies are transitioning back to office work. But not LINE, which continues to maintain its much-praised Hybrid Work system. This is based on the belief that a hybrid environment allows each team and employee at LINE to work at their best efficiency and productivity.</p>
            <button className="border-2 border-gray-300 bg-blue-900 mt-4 ml-4 p-2 text-xl rounded text-white shadow-inner active:scale-95 ">Read More</button>
        </div>
    </div>
    </>)
}
export default About;