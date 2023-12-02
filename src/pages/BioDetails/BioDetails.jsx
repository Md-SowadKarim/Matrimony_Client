import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { getTypeBiodata } from './../../api/biodatas';
import { getOneUser, getRole } from '../../api/auth';
import useAuth from './../../hooks/useAuth';
import Biodata from './../../components/Biodatas/Biodata';
import { getBookings } from '../../api/bookings';
import getUser from '../../hooks/getUser';
//import { getOneUser } from './../../api/auth';
import { addFav, getFav } from './../../api/rooms';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import BioDetailsCard from '../../components/BioDetails/BioDetailsCard';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../components/Shared/Spinner';


const BioDetails = () => {
  const{user}=useAuth()
  console.log(user.displayName
    )
  const data=useLoaderData()
  const type=data.biodataType
  const [load,setLoad]=useState(true)
  const [typeData,setTypeData]=useState([])
  const [role,setRole]=useState()
  const {dat,loading}=getUser({id:data.id})

 

  const duser=getOneUser(user.email)

    const [dUserId,setDUserId]=useState()
    duser.then(data=>{
      setDUserId(data._id)
    })

    const { data:favourite, refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => await getFav(user.email,data.id),
    })
   

  useEffect(()=>{
    getTypeBiodata(type)
    .then(data=>{
      setTypeData(data)
      
    })
    getRole(user.email)
    .then(data=>{
      setRole(data)
    })
 
    setLoad(false)
  },[])

  const favitem={
      name:data.name,
        profileId: data.id,
        profileEmail:data.contactEmail,
        requestId:dUserId,
        requestEmail:user.email,
        requestName:user.displayName,
        mobileNumber:data.mobileNumber,
        occupation:data.occupation,
        prAddress:data.permanentDivision
  }

  const handleFavouriteCick=async()=>{
    try {
      const data = await addFav(favitem)
      console.log(data)
     refetch()
      toast.success('Biodata Added!')
    
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setLoad(false)
    }

    console.table(favitem)
  }
  
  // console.log(typeData)
  // console.log(role)
  if(load)return <Spinner/>
  return (
    <div className='container mx-auto bg-gray-100 dark:bg-blue-950'>
      <Helmet>
        <title>Bio-Details | Dashboard</title>
      </Helmet>
    <div className='md:flex gap-1'>
      <div className='md:w-[39%] border-4 rounded-md border-black dark:border-white p-5'>
     
              <BioDetailsCard data={data}/>
        {
          role !=="guest" || dat==="approved" ?
          <div>
              <h1 className='font-semibold text-black dark:text-white text-lg'>Contact Info</h1>
        <div className='border-2 border-gray-400 rounded-lg p-4'>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Fathers Name : {data.fathersName}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Mothers Name : {data.mothersName}</h1>
            <div className='font-semibold text-black dark:text-white text-lg'>Contact Email : {data?.contactEmail}</div>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Mobile Number : {data.mobileNumber}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Permanet Division : {data.permanentDivision}</h1>
           
        </div>
            </div>
            
            :
            
              dat === "pending" ?
              <div>
              <Link >
              <button  className='btn btn-primary bg-blue-400 w-full mx-auto m-4 border-4 border-blue-700 px-4 rounded-xl my-2'>Your Request is in pending</button>
              </Link>
            </div>
            :
            <div>
            <Link to={`/checkout/${data?._id}`}>
            <button  className='btn btn-primary bg-blue-400 w-full mx-auto m-4 border-4 border-blue-700 px-4 rounded-xl my-2'>Request For The Contact</button>
            </Link>
          </div>
            
           
        }
        {
          !favourite? <button onClick={handleFavouriteCick}  className='btn btn-primary bg-blue-400 w-full mx-auto m-4 border-4 border-blue-700 px-4 rounded-xl my-2'>Add To Favourite</button>
          :
          <button  className='btn btn-primary bg-blue-400 w-full mx-auto m-4 border-4 border-blue-700 px-4 rounded-xl my-2'>Already Added To Favourite</button>
        }
        
            
            
      </div>
      <div className='md:w-[59%] border-4 rounded-md border-black dark:border-white p-5'>
      <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-3 gap-4'> 
     
     { typeData.map((data)=><Biodata key={data.id} data={data}/>)}

</div>
      </div>
    </div>
    </div>
  )
}

export default BioDetails
