import React from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';

const AddRoomForm = ({
  handleImageChange,
  uploadButtonText,
  handleSubmit,
  loading=false
}) => {

  return (
    <div>
    <section className="bg-white dark:bg-gray-900 container mx-auto dark:border-white border-black border-2 my-1  rounded-xl">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white uppercase">Add a new Profile</h2>
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
                  <label>
                    <input
                      onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
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
                <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fathers Name</label>
                <input type="text" defaultValue="father" name="fname" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
            <div className="w-full">
                <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mothers Name</label>
                <input type="text" defaultValue="mother" name="mname" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
          
            <div>
                <label for="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                <input defaultValue={25} type='number' name="age" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pickup Location" required=""/>
            </div> 
            <div>
                <label for="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Age</label>
                <input defaultValue={25} type='number' name="eage" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pickup Location" required=""/>
            </div> 
            
              <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
                <select defaultValue="5 Feet" name='height'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Height</option>
                    <option defaultValue="">4 Feet</option>
                    <option defaultValue="">4.6 Feet</option>
                    <option defaultValue="">5 Feet</option>
                    <option defaultValue="">5.6 Feet</option>
                    <option defaultValue="">6 Feet</option>
                   
                </select>
            </div>
            <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Height</label>
                <select defaultValue="5 Feet" name='eheight'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Height</option>
                    <option defaultValue="">4 Feet</option>
                    <option defaultValue="">4.6 Feet</option>
                    <option defaultValue="">5 Feet</option>
                    <option defaultValue="">5.6 Feet</option>
                    <option defaultValue="">6 Feet</option>
                   
                </select>
            </div>
            <div>
                <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biodata-Type</label>
                <select defaultValue="Male" name='type'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Type</option>
                    <option defaultValue="">Male</option>
                    <option defaultValue="">Female</option>
         
                   
                </select>
            </div>
            <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                <select defaultValue="55-60 kg" name='weight'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Weight</option>
                    <option defaultValue="">45-50 kg</option>
                    <option defaultValue="">50-55 kg</option>
                    <option defaultValue="">55-60 kg</option>
                    <option defaultValue="">60-65 kg</option>
                    <option defaultValue="">65-80 kg</option>
                   
                </select>
            </div>
            <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Weight</label>
                <select defaultValue="55-60 kg" name='eweight'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Weight</option>
                    <option defaultValue="">45-50 kg</option>
                    <option defaultValue="">50-55 kg</option>
                    <option defaultValue="">55-60 kg</option>
                    <option defaultValue="">60-65 kg</option>
                    <option defaultValue="">65-80 kg</option>
                   
                </select>
            </div>
            <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanent Division</label>
                <select defaultValue="Dhaka" name='prdivision'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Divisioin</option>
                    <option defaultValue="">Dhaka</option>
                    <option defaultValue="">Khulna</option>
                    <option defaultValue="">Chattagram</option>
                    <option defaultValue="">Rangpur</option>
                    <option defaultValue="">Barisal</option>
                    <option defaultValue="">Maymansign</option>
                    <option defaultValue="">Sylhet</option>
                  
                   
                </select>
            </div>
            <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">present Divisioin</label>
                <select defaultValue="Dhaka" name='psdivision'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Divisioin</option>
                    <option defaultValue="">Dhaka</option>
                    <option defaultValue="">Khulna</option>
                    <option defaultValue="">Chattagram</option>
                    <option defaultValue="">Rangpur</option>
                    <option defaultValue="">Barisal</option>
                    <option defaultValue="">Maymansign</option>
                    <option defaultValue="">Sylhet</option>
                  
                   
                </select>
            </div>
            <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Race</label>
                <select defaultValue="Asian" name='race'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Race</option>
                    <option defaultValue="">Asian</option>
                    <option defaultValue="">Europian</option>
                    <option defaultValue="">American</option>
                    <option defaultValue="">Australian</option>
                    <option defaultValue="">African</option>
                   
                </select>
            </div>
            
            <div className="w-full">
                <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                <input type="text" defaultValue="Software Engineer" name="occupation" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
            <div className="w-full">
                <label for="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                <input type="text" defaultValue="+880154855864" name="mobile" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
           
            <div className="w-full">
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of Birth</label>
                <input type="date"  name="date" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
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
          {/* {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )} */}Save & Continue
        </button>
    </form>
</div>
</section>
  </div>
  )
}

export default AddRoomForm
