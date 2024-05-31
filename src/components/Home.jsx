import React, { useContext, useEffect, useState } from 'react'
import Ecard from './Ecard'
import { Link } from 'react-router-dom'
import { E_URL } from '../../utils/contstants'

import { useDispatch ,useSelector } from 'react-redux';
import { addItem } from '../redux-store/cartSlice';
import ShimmerUI from './ShimmerUI';



const Home = () => {

const [data , setData] = useState([])

const [customize , setCustomize] = useState(false)



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
  // console.log(fil)
  setFilterData(fil)
}


const handlePrice = () => {

  setFilterData(filterData.sort((a,b) => ( b.price - a.price ) ))  
  // console.log("clicked")
  setCustomize(!customize)
 
  }

 
  

  const dispatch = useDispatch();

  const handleAddItem = (obj) => {
    dispatch(addItem(obj))
  }

  const toggle = useSelector((store) => store.category.isMenuOpen)

  
   return data.length == 0 ?  <ShimmerUI/>  : ( 
   
    <>
    <div className='w-12/12 mb-10 md:mb-0 bg-blue-100 flex flex-col items-center  p-0.5 '>

      {/* categories toggle */}
 { toggle ? <ul  className= '  w-44 flex-col  absolute  h-1/2 left-0  md:w-11/12 bg-white md:bg-blue-700 md:flex md:flex-row md:h-auto justify-evenly  p-2  rounded-3xl md:mx-3 '>
            <li onClick={() => {setFilterData(data)} } className='flex justify-center text-xl my-4 md:my-0  text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >All</li>
            <li onClick={handleCategoty } className='flex justify-center text-xl my-4 md:my-0  md:w-auto   text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >men's clothing</li>
            <li onClick={handleCategoty } className='flex justify-center text-xl my-4  md:my-0 text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >jewelery</li>
             <li onClick={handleCategoty } className=' pl-10 md:pl-2 text-xl my-4 md:my-0 text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >women's clothing</li> 
             <li onClick= {handleCategoty } className=' flex justify-center text-xl my-4 md:my-0  text-cyan-200 font-bold bg-gradient-to-l blue-300 p-2 rounded-xl cursor-pointer hover:text-lime-100 hover:bg-gradient-to-r from-blue-500 to-violet-400' >electronics</li> 

        </ul>  : null }
        

       
        <div className='m-2 w-11/12 flex justify-between border border-black  '>
         

    <section className=' border border-red-600'>

          </section>

      <button >Filter @</button>

        </div>

          {/* <button className='mx-5 bg-blue-500 p-2 rounded-lg text-white' onClick={ handlePrice  }>Price : high to low</button> */}

       <main  className=' scroll-smooth flex flex-wrap justify-center   '>
        
        
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
