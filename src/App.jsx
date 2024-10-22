import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'

import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import ProfileLayout from './layouts/ProfileLayout'

import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'

import GeneralSettings from './components/profile/GeneralSettings'
import SecuritySettings from './components/profile/SecuritySettings'
import NotificationSetting from './components/profile/NotificationSetting'
import DeleteAccount from './components/profile/DeleteAccount'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <GeneralSettings />
          },
          {
            path:'general',
            element: <GeneralSettings />
          },
          {
            path: 'security',
            element: <SecuritySettings />
          },
          {
            path: 'notification',
            element: <NotificationSetting />
          },
          {
            path: 'delete_account',
            element: <DeleteAccount />
          }
        ]
      },
    ]
  },

  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },
  
  {
    path: '/signup',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignUp />
      }
    ]
  }, 
])


function App() {

  return (
    <div className='flex flex-row bg-white h-screen w-screen'>
      <RouterProvider router={router} />   
    </div>

  )
}

export default App
