import React, { useContext, useEffect, useState } from 'react'
import Ecard from './Ecard'
import { Link } from 'react-router-dom'
import { E_URL } from '../../utils/contstants'
import userContext from '../../utils/userContext'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux-store/cartSlice';


const Home = () => {

const [data , setData] = useState([])

const [filterData, setFilterData] = useState([])

// console.log(filterData)
    useEffect(()=>{
      fetchData()
    },[])

const fetchData = async () => {
  
    const response = await  fetch(E_URL)
    const eData = await response.json()
    // console.log(eData)
    setData(eData)
    setFilterData(eData)
}

const handleCategoty = (e) => {
  
  const fil = data.filter((objct) => (
    objct.category == e.target.innerHTML

  ))
  console.log(fil)
  setFilterData(fil)
}


const handlePrice = () => {

  setFilterData(filterData.sort((a,b) => ( b.price - a.price ) ))  
  console.log("clicked")
 
  }

  const {setName} = useContext(userContext)

  const dispatch = useDispatch();

  const handleAddItem = (obj) => {
    dispatch(addItem(obj))
  }
  return (
    <>
    <div className='bg-violet-200 m-0.5 p-0.5 '>

        <ul  className='bg-blue-700 flex justify-evenly  p-2  rounded-3xl mx-3 '>
            <li onClick={() => {setFilterData(data)} } className='text-xl text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >All</li>
            <li onClick={handleCategoty } className='text-xl text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >men's clothing</li>
            <li onClick={handleCategoty } className='text-xl text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >jewelery</li>
            <li onClick={handleCategoty } className='text-xl text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >women's clothing</li>
            <li onClick= {handleCategoty } className='text-xl text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >electronics</li>

        </ul>

        <div className='m-2 mx-5'>
          <label htmlFor="username">UserName : </label>
          
          <input onChange={(e) => {setName(e.target.value)}} type="text" />
          
          <button className='mx-5 bg-blue-500' onClick={ handlePrice  }>Price : high to low</button>
        </div>
       <main className='flex flex-wrap'>
        
        
        {filterData.map((obj) => ( 
          
        
         <div className=' m-4 flex flex-col   ' key={obj.id}>
      <Link to={`info/${obj.id}`}  >     < Ecard resData={obj}/>  </Link>

       <button onClick={() => handleAddItem(obj)} className='-mt-9 mx-7 bg-blue-500  p-3 rounded-xl text-white'>ADD to Cart</button>
         </div> 
       
       
         ))}  
        </main>
    </div>
    </>

  )
}

export default Home