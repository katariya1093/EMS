import Navbar from "./Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

//import Video from "../assets/video.mp4";

import ems1 from "../assets/ems.1.avif" 
import ems2 from "../assets/ems.2.avif" 
import ems3 from "../assets/ems.3.png" 
import ems4 from "../assets/ems.4.jpeg" 
import ems5 from "../assets/ems.5.jpeg" 
import ems6 from "../assets/ems.6.jpeg" 
import ems1_1 from "../assets/ems.1.1.avif"
import ems1_2 from "../assets/ems.1.2.avif"
import ems1_3 from "../assets/ems.1.3.avif"
import ems1_4 from "../assets/ems.1.4.avif"
import ems1_5 from "../assets/ems.1.5.avif"
import e1 from "../assets/E1.jpeg"
import e2 from "../assets/E2.jpeg"
import e3 from "../assets/E3.jpeg"


function Work(){
 
  const images=[
    {image:ems1},
    {image:ems1_2},
    {image:ems1_3},
    {image:ems1_4},
    {image:ems1_5},
  ]
    return(<>
    <Navbar/>
   
  <div className="page1 flex gap-3  p-2 bg-slate-200 w-screen h-screen ">
    <div className="Left h-[500px] w-[50%]  mt-10  ">
       <div className="paradiv mt-20 w-[90%] flex mb-3    ">
       <p className="ml-10 text-xl text-gray-500 "> <spn className="text-2xl font-medium text-blue-900 "> Looking</spn> for some inspiration to boost your workforce?

      Look no further! In this article, we have compiled the top 50 employment inspirational quotes to motivate your team and ignite their productivity.

Whether you’re a manager in need of some motivational tools or an employee seeking a boost in your career, these quotes will surely inspire and uplift you.

From renowned leaders to influential personalities, these quotes cover a wide range of topics, including leadership, teamwork, perseverance, and success. Each quote is carefully curated to provide.

  </p>
      
        </div >
        <div className="links mt-6">
        <Link to="/RegistrationForm" className=" rounded p-2 text-xl font-normal text-white bg-blue-900 ml-10   active:scale-90 shadow-2xl">Registeration</Link>
        <Link to="/Singin" className="rounded p-2 pl-3 pr-3 text-xl font-normal text-white bg-blue-900 ml-10 active:scale-90">Login</Link>
        </div>
        
        <p className="ml-10 mt-8 w-[90%] text-blue-900">Employment inspirational quotes have the power to transform mindsets, create a positive work culture, and foster employee engagement.

          By incorporating these quotes into your daily routine.

        </p>
    </div>
    <div className="Right h-[390px] w-[50%] mt-28    ">
    <img src={ems2} className="h-[390px] w-full object-fill text-center mix-blend-multiply  mt-1 "  />
    
    </div>
  </div>
  <div className="page2 flex justify-evenly flex-wrap h-screen w-screen bg-slate-200   ">
    {images.map((e,index)=>{
      return(<div key={index} className="h-[250px] w-[200px] border-2 rounded-xl shadow-xl border-gray-300 p-3 mt-10 hover:scale-105 transition-all ease-in ">
        <div className="imgdiv  h-[100px] w-full border-2 overflow-hidden object-center  ">
        <img src={e.image} className=" h-[100px] w-full rounded-xl" alt="" />
          
        </div>
        <p>“Teamwork is the ability to work together toward a common vision. </p>
        <button className=" p-1 rounded mt-2 bg-blue-900 active:scale-95 text-white">Read more</button>
      </div> )
    })}
    <div className="patti h-[200px]  bg-slate-300 w-[95%] text-center flex justify-between p-5  ">
     <img src={ems5} className="h-[150px] w-[150px] hover:scale-105 transition-all ease-in-out  rounded-xl mix-blend-multiply shadow-2xl " />
     <p className="w-[40%] mt-7 text-center"> <span className="text-3xl text-blue-900">Employee</span> Get ready to unlock the power of wisdom and inspiration with our carefully selected collection of employment inspirational quotes. Let’s ignite the fire within your team and take your organization to new heights!</p>
     <img src={ems4}  className="h-[150px] w-[150px] hover:scale-105 transition-all ease-in-out rounded-xl object-center mix-blend-multiply shadow-2xl " />
      
    </div>

  </div>
  <div className="page3 h-screen w-screen bg-slate-300 p-8  relative ">
    <marquee behavior="alternate"  Scrollamount="15" className="h-10 w-full bg-slate-500 text-white pt-2 ">Employee mangemet system</marquee>
    <div className=" main flex justify-between ">
      <div className=" left ka div flex ">
      <div className="left h-[230px] w-[280px]  ml-5 mt-10 rounded-3xl shadow-2xl  overflow-hidden   ">
        <img src={ems3} className="h-[230px] w-[280px] mix-blend-multiply " alt="" />
        <div className="h-[230px] w-[280px] bg-red-500 z-10"></div>
         </div>
      <p className="mt-12 w-[40%] text-start ml-6"> < span  className="text-2xl bold text-blue-900">Motivation</span> is the driving force that propels individuals to achieve their goals and perform at their best. In the workplace, motivation plays a crucial role in shaping employee engagement, productivity, and overall organizational success. </p>
      </div>
    
    <div className="right ka div absolute bottom-1 ">
    <div  className="right  h-[230px] w-[280px]  ml-5 absolute bottom-1 right-7 rounded-3xl overflow-hidden shadow-2xl">
    <img src={ems6} className="h-[230px] w-[280px] mix-blend-multiply  " alt="" />
    </div>
    <p className="mt-12 w-[40%] text-start ml-[430px] mb-28"> <span className="text-2xl bold text-blue-900">Additionally</span> ,motivated teams are more collaborative, innovative, and resilient in the face of challenges. By fostering a motivating work environment, employers can cultivate a positive and energetic workforce that is poised for growth and success.</p>
    </div>
    
    </div>
   
  </div>
  <div className="page4 h-screen w-screen bg-slate-300 relative">
<div className="content h-[220px] w-[70%]  absolute top-10 left-44 flex   ">
<img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" className="h-20 w-20" alt="" />
<p className="w-[75%] ml-12 mt-10 text-left">Moreover, inspirational quotes can serve as a valuable tool for managers and leaders to inspire and empower their teams. By strategically incorporating these quotes into team meetings, training sessions, or even daily communications, leaders can create a positive and motivating work environment that fosters collaboration, innovation, and personal growth.This, in turn, can lead to improved team dynamics, enhanced problem-solving abilities.</p>
<img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" className="h-20 w-20 bottom-4 right-4 absolute " alt="" />
</div>
<div className="boxes h-[350px] w-full bg-slate-300 absolute bottom-0 p-2 flex gap-32 justify-center pt-20  ">
<div className="box1 h-[200px] w-[200px] bg-gray-500 mt-6 rounded-xl  overflow-hidden  relative  ">
  <img src={e1} className="h-[200px] w-[200px] opacity-80" alt="" />
</div>
<div className="box1 h-[200px] w-[200px] bg-gray-500 mt-6 rounded-xl  overflow-hidden  relative  ">
<img src={e2} className="h-[200px] w-[200px] opacity-80" alt="" />
</div>
<div className="box1 h-[200px] w-[200px] bg-gray-500 mt-6 rounded-xl  overflow-hidden  relative  ">
<img src={e3} className="h-[200px] w-[200px] opacity-80" alt="" />
</div>

</div>
  </div>

  <div className="uper-footer h-8 w-screen text-gray-300 cursor-pointer bg-slate-500 justify-center items-center flex ">
Back To Top
  </div>
  <div className="footer h-60 w-screen bg-slate-700 text-slate-50 relative mt- p-2   ">
    <div className="flex justify-between">
    <div className="icon text-3xl flex flex-col gap-3 ml-8 mt-5  ">
  <a><FaFacebookSquare /></a>
    <a> <FaInstagramSquare/></a>
    <a> <FaXTwitter/></a>
    <a> <MdEmail/></a>
  </div>
  <div className="mt-6">
    <p className="font-bold underline mb-1">Services</p>
  <p>More learning for mangement </p>
    <p>Communicate with employee</p>
    <p>Build up Skills</p>
    <p>24\7 Support</p>
  </div>
  <div className="mt-6 ">
    <p className="font-bold underline">Get To Know Us</p>
    <li>About</li>
    <li>Contact</li>
    <li>Services</li>
    <li>Resources</li>
  </div>
  <div className="mt-6 mr-10  ">
    <p className="font-bold underline">Make Money With Us</p>
  <p className="text-[13px] leading-5" > 
        <p>Sell on Marketing</p>
        <p>Sell under Marketing Accelerator</p>
        <p>Protect and Build Your Brand</p>
        <p>Marketing Global Selling</p>
        <p>Become an Affiliate</p>
        <p>Fulfilment by Marketing</p>
        </p >
  </div>
    </div>
    <div className="text-center text-xs mr mt-6">
<p>Copyright © 2012-2025 Employeemangement®</p>
    </div >
    </div>
    </>)
}
export default Work;
