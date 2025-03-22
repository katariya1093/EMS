function Cards(props) {
  console.log(props.data)
  return (
    <>
      <div className="h-[250px] w-[200px] border-2 border-gray-100 p-3 mt-10 hover:scale-105 transition-all ease-in ">
        <div className="imgdiv  h-[100px] w-full border-2 overflow-hidden object-center  ">
         {props.data.map((elem,index)=>{
return(<div key={index} >
<img  src={elem.image} className=""/>
</div>
)
         })} 
          
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        <button className=" p-1 rounded mt-2 bg-blue-900 active:scale-95 text-white">Read more</button>
      </div>
    </>
  );
}
export default Cards;
