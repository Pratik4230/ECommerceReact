import React, { useEffect, useState } from 'react'
import Ecard from './Ecard'
import { Link, useParams } from 'react-router-dom'

const Home = () => {

const [data , setData] = useState([])

const [filterData, setFilterData] = useState([])



    useEffect(()=>{
      fetchData()
      
    },[])

   
const fetchData = async () => {
  
    const response = await  fetch("https://fakestoreapi.com/products")
    const eData = await response.json()
    // console.log(eData)
    setData(eData)
    setFilterData(eData)
}

const handleCategoty = (e) => {
  // console.log("clicked", e.target.innerHTML)
  const fil = data.filter((objct) => (
    objct.category == e.target.innerHTML

  ))
  // console.log(fil)
  setFilterData(fil)
}

  return (
    <>
    <div className='bg-red-100 '>
        <ul  className='bg-blue-600 flex justify-evenly  p-4  rounded-xl '>
            {/* <li onClick={setFilterData({data}) } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >All</li> */}
            <li onClick={handleCategoty } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >men's clothing</li>
            <li onClick={handleCategoty } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >jewelery</li>
            <li onClick={handleCategoty } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >women's clothing</li>
            <li onClick= {handleCategoty } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >electronics</li>
          
        </ul>
       <main className='flex flex-wrap'>
        {filterData.map((obj) => (
          
       <Link to={`info/${obj.id}`} key={obj.id} >  <div > < Ecard resData={obj}/> </div> </Link>
        ))}  
        </main>
    </div>
    </>

  )
}

export default Home