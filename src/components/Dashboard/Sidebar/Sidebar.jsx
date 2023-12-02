import { useState } from 'react'
// Components
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
 import MenuItem from './MenuItem'

 import useAuth from '../../../hooks/useAuth'
 import useRole from '../../../hooks/useRole'
 import HostMenu from './PremiumMenu'
 import GuestMenu from './GuestMenu'
// import AdminMenu from './AdminMenu'
import Logo from './../../Shared/Logo';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AdminMenu from './AdminMenu'
import PremiumMenu from './PremiumMenu'

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)

  const [role] = useRole()
  const navigate=useNavigate()
 // Sidebar Responsive Handler
 const handleToggle = () => {
  setActive(!isActive)
}

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-black dark:text-white dark:bg-blue-950 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Logo />
          </div>
        </div>
        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 '
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
       
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-900 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        
        <div>
          <div>
            <div className='w-full  md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
              <Logo />
            </div>
          </div>

            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* If a user is host */}
      
            <nav>
             
 {role === 'guest' && <GuestMenu />}
 {role === 'admin' && <AdminMenu />}
 {role === 'premium' && <PremiumMenu />}
           
            </nav>
          </div>
          </div>

        <div>
          <hr />

         
          <button
            onClick={()=>{
              logOut();
              navigate("/login");
              toast.success('Logout Sucessfully');
            }}
            className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5 text-black dark:text-white bg-white' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
