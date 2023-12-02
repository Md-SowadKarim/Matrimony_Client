import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import DashboardLayout from '../layouts/DashboardLayout'
import BioDetails from '../pages/BioDetails/BioDetails'
import PrivateRoute from './PrivateRoute'
import Biodatas from '../pages/Biodatas/Biodatas'
import { getAllBiodatas, getBiodata, getUserBiodata } from '../api/biodatas'
import Checkout from './../pages/Checkout/Checkout';
import MyBookings from './../pages/Dashboard/Guest/MyBookings';
import AddRoom from './../pages/Dashboard/Host/AddRoom';
import ViewProfile from './../pages/Dashboard/Guest/ViewProfile';
import Favourite from './../pages/Dashboard/Guest/Favourite';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import PremiumUser from './../pages/Dashboard/Admin/PremiumUser';
import ContactUser from './../pages/Dashboard/Admin/ContactUser';
import GotMarrid from '../pages/Dashboard/Guest/GotMarrid'
import AdminDashboard from '../pages/Dashboard/Admin/AdminDashboard'
import AdminRoute from './AdminRoute';
import About from '../pages/About/About'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/biodata/:id',
        element: (
          <PrivateRoute>
            <BioDetails/>
          </PrivateRoute>
        ),
        loader: ({ params }) => getBiodata(params.id),
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <Checkout/>
          </PrivateRoute>
        ),
        loader: ({ params }) => getBiodata(params.id),
      },
      {
        path: '/contact',
        element: <h1 className=' text-black'>this is conatac us</h1>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/biodata',
        element: <PrivateRoute><Biodatas/></PrivateRoute> ,
        loader: () => getAllBiodatas()
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
 
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
     
      {
        path: 'add-room',
        element: (
          <PrivateRoute>
              <AddRoom />
          </PrivateRoute>
        ),
      },
      {
        path: 'view-profile',
        element: (
          <PrivateRoute>
              <ViewProfile />
          </PrivateRoute>
        ),
       
      },
      {
        path: 'view-favourite',
        element: (
          <PrivateRoute>
              <Favourite />
          </PrivateRoute>
        ),
       
      },

      {
        path: 'my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'admin-dash',
        element: (
          <PrivateRoute>
            <AdminRoute>
            <AdminDashboard/>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>
            <ManageUsers/>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'approve-premium',
        element: (
          <PrivateRoute>
            <AdminRoute>
           <PremiumUser/>
           </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'approve-contact',
        element: (
          <PrivateRoute>
            <ContactUser/>
          </PrivateRoute>
        ),
      },
      {
        path: 'got-marrid',
        element: (
          <PrivateRoute>
            <GotMarrid/>
          </PrivateRoute>
        ),
      },
   
   
    ],
  },
])
