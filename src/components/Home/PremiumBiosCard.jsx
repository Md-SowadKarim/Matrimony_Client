import React from 'react'
import { Link } from 'react-router-dom'

const PremiumBiosCard = ({data}) => {
 //   console.log(data)
 return (
  <Link to={`/biodata/${data?._id}`} className='col-span-1 cursor-pointer group'>
    <div className='flex flex-col  gap-2 w-full border-2 p-2 rounded-xl border-blue-400'>
      <h1 className='text-black dark:text-white'>Biodata-Id : {data.id}</h1>
      <div
        className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
      >
        <img
          className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
          src={data?.profileImage}
          alt='Room'
        />
        <div
          className='
            absolute
            top-3
            right-3
          '
        ></div>
      </div>
      <div className='font-semibold text-black dark:text-white text-lg'>Division :{data?.permanentDivision}</div>
      <div className='font-light text-black dark:text-white '>Type : {data?.biodataType}</div>
      
      <div className='flex flex-col  gap-1  rounded-xl h-24'>
        <div className='font-semibold text-black dark:text-white'>Age : {data?.age}</div>
        <div className='flex-grow  font-extrabold  text-black dark:text-white'>Occupation: {data?.occupation}</div>
      </div>
     
    </div>
  </Link>
)}

export default PremiumBiosCard
