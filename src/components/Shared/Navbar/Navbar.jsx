import { Link, NavLink } from 'react-router-dom'
import Container from '../Container'
import logoImg from '../../../assets/images/logo.png'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {

  return (
    <div className='fixed w-full dark:bg-blue-950 bg-white z-10 shadow-sm '>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <div className='flex  items-center relative'>
              <img
              //  className='hidden md:block '
                src={logoImg}
                alt='logo'
                width='100'
                height='100'
              />
              <h1 className='absolute left-12 '>Marry</h1>
              </div>
              
              
            </Link>
         
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
