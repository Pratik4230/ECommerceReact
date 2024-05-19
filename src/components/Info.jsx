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
    <div className="flex flex-col  m-5 p-5  items-center border">
        <div className="m-2"><img className="h-80" src={image} alt="Image" /></div>
        <p className="m-2" >{title}</p>
        <p className="m-2 w-1/2" >{description}</p>
        <p className="m-2" > Category : {category}</p>
       
        <span className="m-2" > Price : {price}</span>
         <span>Rating : {rating?.rate}</span>


<p className="m-2 mt-9 border  w-1/2">Accordian :  trying to make Accordian</p>

<div className="m-2 mt-3 border  w-1/2">
    <p className="bg-red-200 flex justify-between w-[100%]">
<span  > Description </span> <span onClick={()=> {setShowData(!showData)}} className="cursor-pointer">+</span>
</p>

<div>
{showData &&  <p>{description}</p>  }
</div>

</div>
         
         <div>
            <section> 
                <span>Category</span>
                <span>+</span>
            </section>

            <section>
                {showData && <p>{category}</p>}
            </section>
         </div>
        <p className="m-2" > Category : {category}</p>
    </div>
    </>
)

}

export default Info