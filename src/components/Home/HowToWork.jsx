import React from 'react'

const HowToWork = () => {
  return (
    <div>
      <section className="text-black dark:text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black  flex-shrink-0">
       <h1 className='font-extrabold text-4xl'>💍</h1>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-black dark:text-white text-lg title-font font-medium mb-2">Login First</h2>
        <p className="leading-relaxed text-base"> First you need to sign up and the need to login successfully or if have an account already then just login.</p>
        <a className="mt-3 text-black dark:text-white inline-flex items-center">First Step
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        
        </a>
      </div>
      
    </div>
    
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-black dark:text-white text-lg title-font font-medium mb-2">Make Your Bio</h2>
        <p className="leading-relaxed text-base">After login successfully go to your dashboard and make a biodata for your self to make it happen.</p>
        
        <a  className="mt-3 text-black dark:text-white inline-flex items-center">Second Step
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black  flex-shrink-0">
         <h1 className='font-extrabold text-4xl'>👩🏼‍🤝‍👩🏻</h1>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black  flex-shrink-0">
      <h1 className='font-extrabold text-4xl'>🤝</h1>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-black dark:text-white text-lg title-font font-medium mb-2">Find Your Partner</h2>
        <p className="leading-relaxed text-base">After login and making biodata successfully your are ready to go to find your partner here</p>
        <a className="mt-3 text-black dark:text-white inline-flex items-center">Final Step
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
   </div>
</section>
    </div>
  )
}

export default HowToWork
