import React, { useRef, useState } from 'react'
import { checkValidData } from '../../utils/validate'
import {Link} from 'react-router-dom'

const LogIn = () => {

    const [isLogIn , setIsLogIn] = useState(true)
    const [errorMessage , setErrorMessage] = useState(null)

const email = useRef(null);
const password = useRef(null);

    const handleButtonClick = () => {
          // console.log(email)
          // console.log(email?.current?.value)
         
        const Email =   email?.current?.value
        const Password =   password?.current?.value
        // console.log(Email)

        const message =  checkValidData(Email, Password)
        // console.log(message)
        setErrorMessage(message)

    }

  return (
    <>
    <div className='flex flex-col items-center  p-3 h-screen '> 
      <h1 className='text-4xl font-semibold my-7 mb-6'> {isLogIn ? "LogIn" : "SignUp" } </h1>

      <main className='  h-[60%] md:w-1/2  bg-slate-100 rounded-lg p-6 '>
<p className='my-6 mb-9 flex justify-center' >Lets get  Started...</p>

<form onSubmit={(e) => e.preventDefault()}>
<section className='my-5 flex justify-center' > 
    <label className=' sm:font-medium'>Username : </label>
    <input  className='border-2 mx-2 bg-gray-700 text-white  border-black rounded-lg px-2 ' type="text" placeholder="Enter your name" />
     </section>

     {
        !isLogIn ? <section className='my-5 flex justify-center ' > 
        <label className='sm:font-medium'> Email Id : </label>
        <input ref={email} className='border-2 mx-2  bg-gray-700 text-white  border-black rounded-lg px-2 ' type="email" placeholder="Enter your Email"/>
         </section> : null
     }

     <section className='mb-5 flex justify-center'> 
    <label className='sm:font-medium'>Password : </label>
    <input ref={password} className='border-2 mx-2 bg-gray-700 text-white border-black rounded-lg px-2' type="password" placeholder="Enter your password"/>
     </section>

     <p className='flex justify-center  text-red-600 font-medium'> {errorMessage } </p>
     <section className='my-3 mb-9 flex justify-center'>
     
     <div className="grid gap-2 ">

        <button onClick={handleButtonClick} className='bg-blue-600 text-white p-0.5 border-2 border-black rounded-lg px-2  hover:text-blue-600 hover:bg-white  '>  check Validation </button>
        <button  className='bg-black text-white p-1  border-2 border-black rounded-lg px-3 text-lg hover:text-black hover:bg-white  '>  <Link to='/'> {isLogIn ? "LogIn" : "SignUp"} </Link></button>
     </div>

     </section>
     </form>
     <p className='my-2 flex justify-center '> <span className='mx-1 md:mx-3'> {isLogIn ? "Not Registered ?" : "Aldready Registered !" } </span> <span onClick={ () => setIsLogIn(!isLogIn)} className='text-blue-700 cursor-pointer' > {isLogIn ? "SignUp now" :  "LogIn now"} </span> </p>

      </main>

    </div>
    </>
  )
}

export default LogIn
