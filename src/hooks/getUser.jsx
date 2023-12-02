import React, { useEffect } from 'react'
import { getUserBiodata } from '../api/biodatas'
import { useState } from 'react'
import useAuth from './useAuth';
import { getBookings, getHostBookings } from '../api/bookings';

const getUser = ({id}) => {
    console.log(id)
    const{user}=useAuth()
    const [dat,setDat]=useState()
    const [loading,setLoading]=useState(true)
   
    useEffect(()=>{
        getBookings(user?.email)
        .then(data=>{

          const result=data.find(d=>d.profileId===id)
          console.log("result ", result)
          if(result){
            setDat(result.status)
          }else{
            setDat("ami r tummi")
          }
            
          //  setDat(data.status)
        //  data.map((d=>{
        //   if(d.profileId===id){
        //     console.log("milse...............")
        //     console.log(d)
        //     console.log(d.status)
        //     setDat(d.status)
        //   }else{
        //     console.log("milenai...............")
        //    // setDat("asi asi")
        //     console.log("===============",d.status)
        //   }
        //  }))
        
            setLoading(false)
        },[])
    })

  return {dat,loading}
}

export default  getUser


