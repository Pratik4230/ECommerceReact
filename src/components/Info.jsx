import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Info = ()=> {
    const [info , setInfo ] = useState([])

    // const [filterData, setFilterData] = useState([])

    let {id} = useParams();
   

    const getInfo = async () => {
  
        const Response = await  fetch("https://fakestoreapi.com/products/"+id)
        const jsonInfo = await Response.json()
        
        setInfo(jsonInfo)
            }

    useEffect(()=> {
        getInfo()
    },[])
    console.log("info" , info)
    const {category,description,image,price,title} = info;
    const {rating} = info;
   
    
return (
    <>
    <div className="flex flex-col  m-5 p-5  items-center border">
        <div className="m-2"><img className="h-80" src={image} alt="Image" /></div>
        <p className="m-2" >{title}</p>
        <p className="m-2 w-1/2" >{description}</p>
        <p className="m-2" >{category}</p>
       
        <span className="m-2" >{price}</span>
         <span>{rating?.rate}</span>
    </div>
    </>
)

}

export default Info