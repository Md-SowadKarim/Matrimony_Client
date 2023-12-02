import React from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';

const GotMarridForm = ({
  handleImageChange,
  uploadButtonText,
  handleSubmit,
  loading=false
}) => {

  return (
    <div>
    <section className="bg-white dark:bg-gray-900 container mx-auto dark:border-white border-black border-2 my-1  rounded-xl">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white uppercase">Add Story</h2>
    <form onSubmit={handleSubmit} >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
                <input defaultValue="banana" type="text" name="nam" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Food name" required=""/>
            </div>
            <div className="sm:col-span-2">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>Image is must
                    <input
                      onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                     
                      required="true"
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
               </div>
         
            <div className="w-full">
                <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Self Biodata Number</label>
                <input type="text" defaultValue="1" name="sbio" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Self Biodata Number" required=""/>
            </div>
            <div className="w-full">
                <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partnar Biodata Number</label>
                <input type="text" defaultValue="5" name="pbio" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Partnar Biodata Number" required=""/>
            </div>
          
           
            
            <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                <select defaultValue="5" name='rating'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Rating</option>
                    <option defaultValue="">1</option>
                    <option defaultValue="">2</option>
                    <option defaultValue="">3</option>
                    <option defaultValue="">4</option>
                    <option defaultValue="">5</option>
                   
                </select>
            </div>
           
            <div className="w-full">
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of Get Marrid</label>
                <input type="date" required="true" name="date" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" />
            </div>
            <div className="w-full">
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Success Story</label>
                <textarea  type="date"  name="story" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required="true"/>
            </div>
            {/* <div className="sm:col-span-2">
                <label for="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Note</label>
                <textarea defaultValue="this is really a very good food to eat" id="note" name='note' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Additional Note Here..."></textarea>
            </div> */}
        </div>
        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Save & Continue
        </button>
    </form>
</div>
</section>
  </div>
  )
}

export default GotMarridForm
