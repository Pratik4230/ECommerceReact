
import React, { useContext } from 'react'
import userContext from '../../utils/userContext';


const Ecard = ({resData}) => {
    const {image, title, price,category} =resData;
    // console.log(resData)

   const {username} = useContext(userContext)



  return (
    <div className=''>
         <main className='flex '>
        <div className='bg-white h-96 m-5 flex flex-col items-center p-3'>
            <div>
              <img className='h-36 w-40 m-2' src={image} alt="Image" />
            </div>
            <p className='w-36 border line-clamp-4'>{title}</p>
            <p className='my-2'>{category}</p>
            <p className='my-1'>Price : {price} </p>
             <p>Rating : {resData?.rating?.rate}</p>
             <p>User : {username}</p>
             
        </div>
    </main>
    </div>
  )
}

export default Ecard