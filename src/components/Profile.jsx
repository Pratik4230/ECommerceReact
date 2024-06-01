import React, { useEffect, useState } from 'react'
import { GITHUB_PROFILE } from '../../utils/contstants'

const Profile = () => {

const [user , setUser] = useState({});

 const getUserData = async ()  => {
 const response = await fetch(GITHUB_PROFILE)
 const userData = await response.json();
 setUser(userData)
// console.log("userData" , userData)
    
 }

 useEffect(() => {
    getUserData();
 },[])

 const  {avatar_url, bio , followers,following, name , twitter_username,url} = user;

  return (
    <div className='flex flex-col   '>
        <h1 className='flex justify-center my-3 text-2xl font-semibold'> Profile</h1>
     
      <div className='flex justify-center'>
        <img className='w-7/12 md:w-2/12 rounded-lg  my-3   ' src={avatar_url} alt="" />
      </div>

      <p className='flex justify-center my-3 font-bold text-xl ' >{twitter_username}</p>
      <p className='flex justify-center my-3  ' > <span className='font-semibold text-lg'>bio:-  </span> <span className='text-lg'> { bio}</span>   </p>
      <p className='flex justify-center my-3 font-serif' > followers : { followers} , following : {following} </p>
      <p className='flex justify-center  my-3 font-medium' >Name : {name}</p>
      
      <p className='flex  justify-center   my-3 font-mono text-sm md:text-lg' >  {url} </p>
     
    </div>
  )
}

export default Profile
