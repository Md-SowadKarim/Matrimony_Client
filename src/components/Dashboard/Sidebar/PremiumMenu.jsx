import { BsFingerprint ,BsFillHouseAddFill} from 'react-icons/bs'

import useRole from '../../../hooks/useRole'
import MenuItem from '../Sidebar/MenuItem'

import useAuth from '../../../hooks/useAuth'


const PremiumMenu = () => {
  const [role] = useRole()
  const { user } = useAuth()

  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Add / Update Biodata' address='add-room' />
     
      <MenuItem icon={BsFillHouseAddFill} label='View Biodata' address='view-profile' />
      <MenuItem icon={BsFillHouseAddFill} label='My Favourite' address='view-favourite' />
      <MenuItem icon={BsFillHouseAddFill} label='Got Marrid' address='got-marrid' />

    

      
    </>
  )
}

export default PremiumMenu
