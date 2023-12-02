import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { getAllUsers } from '../../../api/auth'
import UserDataRow from '../../../components/Dashboard/Sidebar/TableRows/UserDataRow'
import PremiumDataRow from './../../../components/Dashboard/Sidebar/TableRows/PremiumDataRow';
import { useEffect } from 'react';
import useAuth from './../../../hooks/useAuth';
import { getUserBiodata } from '../../../api/biodatas';

const PremiumUser = () => {
    const{user}=useAuth()
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await getAllUsers(),
  })
  const datas=users.filter((user)=>user.status==="Requested")
  console.log(datas)
  console.log(users)


  
       
  

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     Bio-Id
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datas &&
                    datas.map(user => (
                      <PremiumDataRow
                        key={user._id}
                        user={user}
                        refetch={refetch}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PremiumUser
