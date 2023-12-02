import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getUserBiodata } from '../../api/biodatas'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe("pk_test_51OFyyOGkRT7H4VTJXtyA20UBU3kUAgGio2mlxz8ovin1o8ELDitkKQe49Yf6IIk3eR6K2FCtDleZGqphtSvIzhll00STO20yM9")
import useAuth from './../../hooks/useAuth';
import getUser from './../../hooks/getUser';
import CheckOutForm from './CheckOutForm'
import { getOneUser } from './../../api/auth';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
    const{user}=useAuth()
    const duser=getOneUser(user.email)
    const data=useLoaderData()
    const [dUserId,setDUserId]=useState()
    console.log(data)
    duser.then(data=>{
      setDUserId(data._id)
    })
    console.log(dUserId)

   // const [load,setLoad]=useState(true)
   
    // useEffect(()=>{
    //     getUser(user?.email)
    //     .then(data=>{
    //         console.log(data)
    //         setId(data._id)
    //         setEmail(data.contactEmail)
         
        
    //         setLoad(false)
    //     },[])
    // })
    const bookingInfo={
        name:data.name,
        profileId: data.id,
        profileEmail:data.contactEmail,
        requestId:dUserId,
        requestEmail:user.email,
        requestName:user.displayName,
        status:"pending",
        mobileNumber:data.mobileNumber
    }
  //  console.log(id,email)
//   const{dat,load}=getUser() 
//if(load)return <h1>Loading.....</h1>
  return (
    <div className=' flex item-center justify-center  container mx-auto bg-gray-100 dark:bg-blue-950'>
      <Helmet>
        <title>Checkout | Dashboard</title>
      </Helmet>
        <div className='border-2 border-black dark:border-white rounded-xl flex flex-col justify-center bg-gray-100 dark:bg-blue-950 my-10 p-4 w-[512px]'>
        <h1 className='self-center my-2 font-semibold text-black dark:text-white text-lg'>Payment Info</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>profile name : {data.name}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>profile id : {data.id}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Requester Id : {dUserId}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Requester Email : {user.email}</h1>
            <Elements stripe={stripePromise}>
                  <CheckOutForm
                    bookingInfo={bookingInfo}
                  />
                </Elements>
           

        </div>
        <div>
     
        </div>
      
    </div>
  )
}

export default Checkout
