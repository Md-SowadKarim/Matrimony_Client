import React, { useEffect, useState } from 'react'

import useAuth from './../../../hooks/useAuth';
import { getUserBiodata } from '../../../api/biodatas';
import { becomeHost } from './../../../api/auth';
import useRole from '../../../hooks/useRole';
import HostModal from './../../../components/Modal/HostRequestModal';
import { toast } from 'react-hot-toast';
import ViewProfileCard from '../../../components/Dashboard/ViewProfile/ViewProfileCard';
import { Helmet } from 'react-helmet-async';

const ViewProfile = () => {
    const { user, loading } = useAuth()
    const[role]=useRole(user?.email)
    const [load,setLoad]=useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [data,setData]=useState({})
    const closeModal = () => {
        setIsOpen(false)
      }

    const modalHandler = async () => {
        try {
          const data = await becomeHost(user?.email)
          console.log(data)
          if (data.modifiedCount > 0) {
            toast.success('Success!, Please wait for admin confirmation.')
          } else {
            toast.success('Your Request is in pending...Please Wait 🖐')
          }
        } catch (err) {
          console.log(err)
        } finally {
          setIsOpen(false)
        }
      }


 useEffect(()=>{
    getUserBiodata(user?.email)
    .then(data=>{
     //   console.log(data)
        setData(data)
        console.log(data)
        setLoad(false)
    })
 },[])

 
    if (load) return <h1>Loading</h1>
  return (
    <div>
      <Helmet>
        <title>ViewBiodata | Dashboard</title>
      </Helmet>
     <ViewProfileCard data={data}/>

      
      {role === 'guest' && (
        <div
          onClick={() => setIsOpen(true)}
          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
        >
         

         <button  className='btn btn-primary bg-blue-400 w-full mx-auto m-4 border-4 border-blue-700 px-4 rounded-xl my-2'>Make Me Premium</button>
        </div>
      )}
      <HostModal
        closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
      />
    </div>
  )
}

export default ViewProfile
