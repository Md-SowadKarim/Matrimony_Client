import { useState } from 'react'

import { updateRole } from '../../../../api/auth'
import { toast } from 'react-hot-toast'
const UserDataRow = ({ user,refetch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMakeAdminClick = async () => {
    try {
      const data = await updateRole({ email: user?.email, role:"admin" })
      console.log(data)
      refetch()
      toast.success('User become admin')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setIsOpen(false)
    }
  }
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
        {
          user?.role==="admin"?
          <button className='text-gray-900 whitespace-no-wrap px-3 py-2 bg-blue-400 border-2 border-black rounded-xl'> Admin</button>
          :
          <button onClick={handleMakeAdminClick} className='text-gray-900 whitespace-no-wrap px-3 py-2 bg-blue-400 border-2 border-black rounded-xl'>Make Admin</button>

        }
      
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

export default UserDataRow
