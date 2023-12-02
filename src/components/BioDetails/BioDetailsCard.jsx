import React from 'react'


const BioDetailsCard = ({data}) => {
 //   console.log(data)
  return (
    
      <div className='flex flex-col  gap-2 w-full border-2 p-2 rounded-xl border-blue-400'>
        
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
          ><h1 className='text-black dark:text-white'>Biodata-Id : {data.id}</h1></div>
        </div>
        <h1 className='font-semibold text-black dark:text-white text-lg'>Candidates Info</h1>
        <div className='border-2 border-gray-200 rounded-lg p-4'>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Type : {data.biodataType}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Name : {data.name}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Date of Birth : {data.dateOfBirth}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Height : {data.height}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Weight : {data.weight}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Age : {data.age} Year</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Race : {data.race}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Occupation : {data.occupation}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Present Division : {data.presentDivision}</h1>
        </div>
        <h1 className='font-semibold text-black dark:text-white text-lg'>Expected Partner</h1>
        <div className='border-2 border-gray-200 rounded-lg p-4'>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Expected Height : {data.expectedPartnerHeight}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Expected Weight : {data.expectedPartnerWeight}</h1>
            <h1 className='font-semibold text-black dark:text-white text-lg'>Expected Age  : {data.expectedPartnerAge} Year</h1>
         
        </div>
       

        
      </div>
   
  )}

export default BioDetailsCard
