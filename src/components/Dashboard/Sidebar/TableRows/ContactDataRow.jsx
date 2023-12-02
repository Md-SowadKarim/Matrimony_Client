import { useEffect, useState } from 'react'

import { updateRole } from '../../../../api/auth'
import { toast } from 'react-hot-toast'
import useAuth from './../../../../hooks/useAuth';
import { approveContact } from '../../../../api/bookings';
const ContactDataRow = ({ user,refetch }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(user)

  const handleMakePremiumClick = async () => {
    try {
      const data = await approveContact({ email: user?.requestEmail, id:user?.profileId} )
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
        <p className='text-gray-900 whitespace-no-wrap'>{user?.profileEmail}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{user?.profileId}</p>
      
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      {
          user?.role==="premium"?
          <button className='text-gray-900 whitespace-no-wrap px-3 py-2 bg-blue-400 border-2 border-black rounded-xl'> Premium</button>
          :
          <button onClick={handleMakePremiumClick} className='text-gray-900 whitespace-no-wrap px-3 py-2 bg-blue-400 border-2 border-black rounded-xl'>Approve</button>

        }
      </td>
    </tr>
  )
}

export default ContactDataRow 

