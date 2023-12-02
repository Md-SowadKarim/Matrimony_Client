import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'
const Logo = () => {
  return (
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
  )
}

export default Logo
