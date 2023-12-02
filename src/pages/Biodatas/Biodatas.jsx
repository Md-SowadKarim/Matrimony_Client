import React, { useEffect, useState } from 'react'
import InputRange from 'react-input-range';
import { getAllBiodatas, getSearchBiodatas } from '../../api/biodatas';
import PremiumBiosCard from '../../components/Home/PremiumBiosCard';
import { useLoaderData } from 'react-router-dom';
import Biodata from '../../components/Biodatas/Biodata';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../components/Shared/Spinner';
import Loader from '../../components/Shared/Loader';

const Biodatas = () => {
    
    const [value,setValue]=useState(100)
    const[btype,setBtype]=useState()
    const [division,setDivision]=useState()
    const[load,setLoad]=useState(false)
    const [bios,setBios]=useState([])
//     const data=useLoaderData()
//   console.log(data)
    const handleSubmit=(e)=>{
      
      
        setLoad(true)
        const search={
            age: parseInt(value),
           division,
            btype
        }
        console.log(search)

        getSearchBiodatas(value,btype,division)
        .then(data=>{
          setBios(data)
            setLoad(false)
        })






    }
    console.log(load)

    useEffect(() => {
        setLoad(true)
        getAllBiodatas()
        .then(data => {
            console.log("data ",data)
            setBios(data)
            console.log(bios)
            console.log("this is sowad")
          setLoad(false)
        })
      },[])


      console.log(bios)
    if(load)return <Loader/>
       
  return (
    <div className='bg-gray-100 dark:bg-blue-950 container mx-auto'>
        <Helmet>
        <title>Biodatas | Dashboard</title>
      </Helmet>
        <div className='md:flex gap-1'>
            <div className='md:w-[24%] border-4 rounded-md border-black dark:border-white p-5'>
                <form onSubmit={handleSubmit}>

               
            <div>
                <label for="division" className="ml-3 my-5  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter By Division</label>
                <select required defaultValue={division} onChange={(e)=>setDivision(e.target.value)}  id="division" className= "my-5 mx-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected=""></option>
                    <option  defaultValue="Dhaka">Dhaka</option>
                    <option defaultValue="Chattagram">Chattagram</option>
                    <option defaultValue="Rangpur">Rangpur</option>
                    <option defaultValue="Barisal">Barisal</option>
                    <option defaultValue="Khulna">Khulna</option>
                    <option defaultValue="Maymansign">Maymansign</option>
                    <option defaultValue="Sylhet">Sylhet</option>
                    <option defaultValue="all">All</option>
                   
                </select>
                <h1 className='text-black text-xl dark:text-white m-1'>Division : {division}</h1>
            </div>

            <div className=' flex flex-col justify-center my-5 p-1'>
            <label for="division" className="ml-3 my-5  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter By Age Range</label>
            <div className='flex'>
                <h1 className='text-black dark:text-white m-1'>0</h1>
            <input className='w-[75%] mx-auto' type="range" min={0} max={100} value={value} onChange={(e)=>{
            console.log(e.target.value)
            setValue(e.target.value)
           }} />
           <h1 className='text-black dark:text-white m-1'>100</h1>
            </div>
            <div className='flex justify-center my-3'>
            <h1 className='text-black text-xl dark:text-white m-1'>0 to </h1> 
            <h1 className='text-black text-xl dark:text-white m-1'>{value}</h1>
            </div>
             </div>

<div>
                <label for="btype" className="ml-3 my-5  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter By Type</label>
                <select required defaultValue={btype} onChange={(e)=>setBtype(e.target.value)}  id="btype" className= "my-5 mx-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected=""></option>
                    <option defaultValue="male">Male</option>
                    <option defaultValue="female">Female</option>
                    <option defaultValue="all">All</option>
                </select>
                <h1 className='text-black text-xl dark:text-white m-1'>Type : {btype}</h1>
            </div>
                 <button type="submit" className="bg-blue-400  w-[80%] mx-auto my-5 flex justify-center  items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
           Search
        </button>
                 </form>
            </div>
            <div className='md:w-[74%] border-4 rounded-md border-black dark:border-white pb-4'>
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-3 gap-8'> 
     
            { bios.map((data)=><Biodata key={data.id} data={data}/>)}
     
    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Biodatas
//<PremiumBiosCard key={data.id} data={data}/>