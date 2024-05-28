import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { E_URL } from "../../utils/contstants";

const Info = ()=> {
    const [info , setInfo ] = useState([])
    const [showData ,setShowData] = useState(false);
    let {id} = useParams();
   

    const getInfo = async () => {
  
        const Response = await  fetch(E_URL+id)
        const jsonInfo = await Response.json()
        
        setInfo(jsonInfo)
            }

    useEffect(()=> {
        getInfo()
    },[])
    // console.log("info" , info)

    const {category,description,image,price,title} = info;
    const {rating} = info;
    
return (
    <>
    <div className="flex flex-col  m-1 p-5  items-center bg-slate-300 ">
        <div className="m-2 "><img className="h-80  rounded-xl" src={image} alt="Image" /></div>
        <p className="m-2 text-lg font-bold " >{title}</p>

        <div className="m-2 mt-3 flex flex-col place-items-center sm:w-1/2">
    <p onClick={()=> {setShowData(!showData)}} className="bg-blue-400 p-2 tracking-wider text-white  font-medium cursor-pointer flex  justify-center sm:w-[25%] rounded-lg hover:bg-gray-50 hover:text-black">
<span className="" > Description </span> 
</p>

<div>
{showData &&  <p className="p-3 font-serif">{description}</p>  }
</div>

</div>

       
        <p className="m-1 font-semibold" > Category : {category}</p>
       
        <span className="m-1 font-mono" > Price : {price}</span>
         <span className=" text-lg">Rating : {rating?.rate}</span>


  
        </div>
           
        </>
)

}

export default Info