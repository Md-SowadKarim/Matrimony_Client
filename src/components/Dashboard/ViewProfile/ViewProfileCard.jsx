import React from 'react'


const ViewProfileCard = ({data}) => {
    return (
        
          <div className='md:flex  gap-4 w-full border-2 p-2 rounded-xl border-blue-400'>
            <div className='md:w-[48%] self-center'>
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
            </div>
            <div className='md:w-[48%] self-center'>
                
            <h1 className='font-semibold text-black dark:text-white text-lg'>Candidates Info</h1>
            <div className='border-2 border-gray-400 rounded-lg p-4'>
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
            <div className='border-2 border-gray-400 rounded-lg p-4'>
                <h1 className='font-semibold text-black dark:text-white text-lg'>Expected Height : {data.expectedPartnerHeight}</h1>
                <h1 className='font-semibold text-black dark:text-white text-lg'>Expected Weight : {data.expectedPartnerWeight}</h1>
                <h1 className='font-semibold text-black dark:text-white text-lg'>Expected Age  : {data.expectedPartnerAge} Year</h1>
             
            </div>
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
           
    
            </div>
           
            
          </div>
   
      )
}

export default ViewProfileCard
