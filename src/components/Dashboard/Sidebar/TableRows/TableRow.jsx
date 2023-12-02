import { format } from 'date-fns'

const TableRow = ({ booking }) => {
  console.log(booking)
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
            <p className='text-gray-900 whitespace-no-wrap'>{booking?.name}</p>
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
            <p className='text-gray-900 whitespace-no-wrap'>{booking?.profileId}</p>
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              {
                booking.status==="pending"?
                <p className='text-gray-900 whitespace-no-wrap'>01**********</p>
                :
                <p className='text-gray-900 whitespace-no-wrap'>{booking?.mobileNumber}</p>
              }
            
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
            {
                booking.status==="pending"?
                <p className='text-gray-900 whitespace-no-wrap'>*****@gmail.com</p>
                :
                <p className='text-gray-900 whitespace-no-wrap'>{booking?.requestEmail
                }</p>
              }
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
            <p className='text-gray-900 whitespace-no-wrap'>{booking?.status}</p>
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
            <button className='text-gray-900 whitespace-no-wrap'>Delete</button>
            </div>
          </div>
        </div>
      </td>
     
    </tr>
  )
}

export default TableRow
