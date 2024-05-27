import React, { useContext, useEffect, useState } from 'react'
import Ecard from './Ecard'
import { Link } from 'react-router-dom'
import { E_URL } from '../../utils/contstants'
import userContext from '../../utils/userContext'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux-store/cartSlice';


const Home = () => {

const [data , setData] = useState([])

const [customize , setCustomize] = useState(false)

const [category , setCategory] = useState(false)

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
  setCustomize(!customize)
 
  }

  const {setName} = useContext(userContext)

  const dispatch = useDispatch();

  const handleAddItem = (obj) => {
    dispatch(addItem(obj))
  }
  return (
    <>
    <div className='w-12/12 bg-violet-200 flex flex-col items-center  p-0.5 '>


<p onClick={() => {setCategory(!category)} } className=' font-semibold absolute right-0 bg-black text-white p-2 m-2 rounded-xl hover:bg-white  hover:text-black cursor-pointer'>Categories</p> 
   
 { category ? <ul  className= '  w-1/2 absolute left-0  md:w-11/12 bg-blue-700 md:flex  justify-evenly  p-2  rounded-3xl md:mx-3 '>
            <li onClick={() => {setFilterData(data)} } className='text-xl my-2 md:my-0  text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >All</li>
            <li onClick={handleCategoty } className='text-xl my-2 md:my-0  md:w-auto   text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >men's clothing</li>
            <li onClick={handleCategoty } className='text-xl my-2  md:my-0 text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >jewelery</li>
             <li onClick={handleCategoty } className='text-xl my-2 md:my-0 text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >women's clothing</li> 
             <li onClick= {handleCategoty } className='text-xl my-2 md:my-0  text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >electronics</li> 

        </ul>  : null }
        


        <div className='m-2  md:flex '>
          <section className='flex'>
          <label htmlFor="username" className='font-semibold flex items-center -ml-10 p-2' >UserName : </label>
          
          <input onChange={(e) => {setName(e.target.value)}} className='rounded-lg bg-slate-700  pl-3  text-white' placeholder='Enter your Name' type="text" />
          </section>
    <section className='mt-4 md:mt-0'>
          <button className='mx-5 bg-blue-500 p-2 rounded-lg text-white' onClick={ handlePrice  }>Price : high to low</button>
          </section>


        </div>
       <main className=' flex flex-wrap justify-center'>
        
        
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