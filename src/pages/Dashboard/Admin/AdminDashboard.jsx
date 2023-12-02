import React, { useState } from 'react'

import { useEffect } from 'react'
import { getAdminStat } from '../../../api/utils'
import Spinner from './../../../components/Shared/Spinner';
import Loader from '../../../components/Shared/Loader';

const AdminDashboard = () => {
    const [statData, setStatData] = useState({})
    const [load,setLoad]=useState(true)
    useEffect(() => {
      getAdminStat().then(data => setStatData(data))
      setLoad(false)
    }, [])
    console.log(statData)
    if(load)return <Loader/>
  return (
    <div>
      <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100 py-20">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
		<div className="flex  bg-gray-300 p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className=" flex bg-blue-600 flex-col justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <h1 className='font-extrabold '>Total Biodata</h1>
            <h1 className='font-extrabold text-4xl self-center'>👩🏼‍🤝‍👩🏻</h1>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{statData.biodataCount}</p>
				<p className="capitalize">Biodata</p>
			</div>
		</div>
		<div className="flex bg-gray-300 p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className="flex bg-blue-600 flex-col justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <h1 className='font-extrabold '>Male Biodata</h1>
            <h1 className='font-extrabold text-4xl self-center'>👩🏼‍🤝‍👩🏻</h1>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{statData.mc}</p>
				<p className="capitalize">Male Biodata</p>
			</div>
		</div>
		<div className="flex bg-gray-300 p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className="flex bg-blue-600 flex-col justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <h1 className='font-extrabold '>Female Biodata</h1>
            <h1 className='font-extrabold text-4xl self-center'>👩🏼‍🤝‍👩🏻</h1>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{statData.fmc}</p>
				<p className="capitalize">Female Biodata</p>
			</div>
		</div>
		<div className="flex bg-gray-300 p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className=" flex bg-blue-600 flex-col justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <h1 className='font-extrabold '>Total Marrid</h1>
            <h1 className='font-extrabold text-4xl self-center'>💞</h1>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{statData.gotMarridCount}</p>
				<p className="capitalize">Get Marrid</p>
			</div>
		</div>
        <div className="flex bg-gray-300 p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className=" flex bg-blue-600 flex-col justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <h1 className='font-extrabold '>Total Revenue</h1>
            <h1 className='font-extrabold text-4xl self-center'>💲</h1>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{statData.totalSale}</p>
				<p className="capitalize">Earning</p>
			</div>
		</div>
        <div className="flex bg-gray-300 p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className=" flex bg-blue-600 flex-col justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <h1 className='font-extrabold '>Primeum Member</h1>
            <h1 className='font-extrabold text-4xl self-center'>👩🏼</h1>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{statData.pc}</p>
				<p className="capitalize">Premium</p>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default AdminDashboard
