
import React from 'react'

const Ecard = ({resData}) => {
    const {image, title, price,category} =resData;
    // console.log(resData)

  return (
    
         <main className='flex  '>
        <div className='bg-white h-96 mx-5 mt-3 flex flex-col border-blue-700 border-4 rounded-lg  ring-2 items-center p-3 transition duration-300 '>
            <div>
              <img className='h-36 w-44 m-2' src={image} alt="Image" />
            </div>
            <p className='w-36 bg-slate-100 font-bold line-clamp-4'>{title}</p>
            <p className='my-2 font-semibold'>{category}</p>
            <p className='my-1 font-medium'>Price : {price} </p>
             <p className='font-mono'>Rating : {resData?.rating?.rate}</p>
             <p className='text-blue-500 font-serif'>User : </p>
             
        </div>

    </main>
    
  )
}

export default Ecard