import React from 'react'

const Ecard = ({resData} = props) => {
    // const {id , rating,price,category} =resData;
    // console.log(resData)
  return (
    <div className=''>
         <main className='flex '>
        <div className='bg-white h-96 m-5 flex flex-col items-center p-3'>
            <div>
              <img className='h-36 w-40 m-2' src={resData?.image} alt="Image" />
            </div>
            <p className='w-36 border line-clamp-4'>{resData?.title}</p>
            <p className='my-2'>{resData?.category}</p>
            <p className='my-1'>Price : {resData?.price} </p>
             <p>Rating : {resData?.rating?.rate}</p>
        </div>
    </main>
    </div>
  )
}

export default Ecard