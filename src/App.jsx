import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import ProfileLayout from './layouts/ProfileLayout';

import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

import GeneralSettings from './components/profile/GeneralSettings';
import SecuritySettings from './components/profile/SecuritySettings';
import NotificationSetting from './components/profile/NotificationSetting';
import DeleteAccount from './components/profile/DeleteAccount';

import CreateQuiz from './pages/CreateQuiz';
import EditQuiz from './pages/EditQuiz';
import AllQuiz from './pages/AllQuiz';
import QuizDetail from './pages/DetailsQuiz';

import CreateCategory from './pages/CreateCategory';
import EditCategory from './pages/EditCategory';
import AllCategories from './pages/AllCategories'; // Assuming a separate component for categories
import DetailsCategory from './pages/DetailsCategory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'quizzes',
        element: <Outlet />, // Placeholder for nested routes
        children: [
          {
            index: true,
            element: <AllQuiz />
          },
          {
            path: 'create',
            element: <CreateQuiz />
          },
          {
            path: ':quizId',
            element: <QuizDetail />
          },
          {
            path: ':quizId/edit',
            element: <EditQuiz />
          },
        ]
      },
      {
        path: 'categories',
        element: <Outlet />, // Placeholder for nested routes
        children: [
          {
            index: true,
            element: <AllCategories />
          },
          {
            path: 'create',
            element: <CreateCategory />
          },
          {
            path: ':categoryId',
            element: <DetailsCategory />
          },
          {
            path: ':categoryId/edit',
            element: <EditCategory />
          },
        ]
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
            path: 'general',
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
]);


function App() {
  return (
    <div className='flex flex-row bg-white h-screen w-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
