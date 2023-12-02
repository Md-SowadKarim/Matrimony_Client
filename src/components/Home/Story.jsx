import React, { useEffect, useState } from 'react'
import ek from '../../assets/ek.jpg'
import { getGotMarrid } from '../../api/rooms'
import StoryCard from './StoryCard'


const Story = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
      getGotMarrid().then(data => setDatas(data))
    }, [])
  console.log(datas)
  return (
    <div className='my-6'>
       
       <div  className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
        <div>
          
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight dark:text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
          
            <span  data-aos-anchor-placement="center-bottom"  className="relative text-yellow-300 ">Here</span>
          </span>{' '}
          is our client reviews
         
        
        <p className="text-base dark:text-white md:text-lg">
        Find the perfect product that suits you . 
        </p>
		<hr  data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='bg-blue-500 h-1' />
        </h2>
      </div>

      <div className='px-5 py-8 grid  lg:grid-cols-3 gap-2  bg-cover ' style={{backgroundImage: `url(${ek})`}}>
    
      {
            datas.map((data=><StoryCard story={data}/>))
        }



      </div>
    </div>
  )
}

export default Story
