import React, { useEffect, useState } from 'react'
import { getPremiumBiodatas } from '../../api/biodatas'
import PremiumBiosCard from './PremiumBiosCard'


const PremiumBios = () => {
    const[datas,setDatas]=useState()
    const [load,setLoad]=useState(true)
  
    useEffect(()=>{
        getPremiumBiodatas()
        .then(data=>{
            setDatas(data)
         setLoad(false)   
        })
    },[])

console.log()
if(load)return<h1>loading......</h1>
  return (
    <div className='container mx-auto my-4'>
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 gap-8'> 
      {
      datas.map(data=><PremiumBiosCard key={data.id} data={data}/>)
      }
    </div>
    </div>
  )
}

export default PremiumBios
