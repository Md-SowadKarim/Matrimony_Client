import { useEffect, useState } from 'react'

import { updateRole } from '../../../../api/auth'
import { toast } from 'react-hot-toast'
import useAuth from './../../../../hooks/useAuth';
import { getUserBiodata } from '../../../../api/biodatas';
const PremiumDataRow = ({ user,refetch }) => {
    const [bio,setBio]=useState()

  if(user){
    console.log(user)
        getUserBiodata(user?.email)
        .then(data=>{
         console.log(data)
         setBio(data.id)
        })
    
  }
   
    console.log(bio)
     
  
  const [isOpen, setIsOpen] = useState(false)

  const handleMakePremiumClick = async () => {
    try {
      const data = await updateRole({ email: user?.email, role:"premium" })
      console.log(data)
      refetch()
      toast.success('User become premium')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setIsOpen(false)
    }
  }
  
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap '>{user?.name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{bio}</p>
      
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      {
          user?.role==="premium"?
          <button className='text-gray-900 whitespace-no-wrap px-3 py-2 bg-blue-400 border-2 border-black rounded-xl'> Premium</button>
          :
          <button onClick={handleMakePremiumClick} className='text-gray-900 whitespace-no-wrap px-3 py-2 bg-blue-400 border-2 border-black rounded-xl'>Make Premium</button>

        }
      </td>
    </tr>
  )
}

export default PremiumDataRow 

