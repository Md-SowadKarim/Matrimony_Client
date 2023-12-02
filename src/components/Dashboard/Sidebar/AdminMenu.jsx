import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { BsGraphUp } from 'react-icons/bs';

const AdminMenu = () => {
  return (
    <>

      <MenuItem
                icon={BsGraphUp}
                label='Admin'
                address='admin-dash'
              />
                  <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
                  <MenuItem icon={FaUserCog} label='Premium Request' address='approve-premium' />
                  <MenuItem icon={FaUserCog} label='Contact Request' address='approve-contact' />
    </>
  )
}

export default AdminMenu
