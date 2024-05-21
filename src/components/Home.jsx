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
    <div className='bg-red-100 '>

        <ul  className='bg-blue-600 flex justify-evenly  p-4  rounded-xl '>
            <li onClick={ () => {setFilterData(data)}} className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >All</li>
            <li onClick={handleCategoty } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >men's clothing</li>
            <li onClick={handleCategoty } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >jewelery</li>
            <li onClick={handleCategoty } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >women's clothing</li>
            <li onClick= {handleCategoty } className='text-xl font-bold text-lime-100 bg-blue-500 p-2 rounded-lg cursor-pointer hover:bg-lime-100 hover:text-blue-500' >electronics</li>

<label > Filter
           <select name="Filter" id="filter">
            <option  value="rate"></option>
            <option  value="rate">Rating : high to low</option> 
            <option  value="rate">Rating : low to high</option> 
            <option onClick={() => {setFilterData(filterData.sort((a,b) => ( b.price - a.price ) ))}} value="price" className='hover:bg-slate-300'>Price : high to low</option>
            <option value="etc">Price : low to high</option>
            <option value="abc">xyz</option>
           </select>
           </label>
        </ul>

        <div className='m-2'>
          <label htmlFor="username">UserName</label>
          
          <input onChange={(e) => {setName(e.target.value)}} type="text" />
          
          <button onClick={ handlePrice  }>Price : high to low</button>
        </div>
       <main className='flex flex-wrap'>
        
        
        {filterData.map((obj) => ( 
          
        
         <div key={obj.id}>
      <Link to={`info/${obj.id}`}  >     < Ecard resData={obj}/>  </Link>
       <button onClick={() => handleAddItem(obj)} className='mt-3 bg-blue-500  p-3 rounded-xl text-white'>ADD to Cart</button>
         </div> 
       
       
         ))}  
        </main>
    </div>
    </>

  )
}

export default Home