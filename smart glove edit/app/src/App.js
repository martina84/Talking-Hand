import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Use createBrowserRouter if not using hash router
import Layout from '../src/components/Layout/Layout';

import Home from '../src/components/Home/Home';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import AboutUs from '../src/components/AboutUs/AboutUs';
import HowToLearn from '../src/components/HowToLearn/HowToLearn';


import ProfileData from '../src/components/ProfileData/ProfileData';
import ResetPasswordForm from '../src/components/ResetPasswordForm/ResetPasswordForm';
import { ProtectingRouting } from './ProtectingRoute'; // Adjust the path accordingly
import { UserContextProvider } from './Context/UserContext';
import LifeTrack from './components/LifeTrack/LifeTrack';

const router = createBrowserRouter([ // Use createBrowserRouter if not using hash router
  {
    path: '',
    element: <Layout />,
    
    children: [
      { index: true, element: <ProtectingRouting><Home /></ProtectingRouting> },
      { path: 'aboutUs', element: <ProtectingRouting><AboutUs /></ProtectingRouting> },
      { path: 'howToLearn', element: <ProtectingRouting><HowToLearn /></ProtectingRouting> },
      { path: 'lifeTrack', element: <ProtectingRouting><LifeTrack /></ProtectingRouting> },
     
      { path: 'profileData', element: <ProtectingRouting><ProfileData /></ProtectingRouting> },
      { path: 'resetPassword', element: <ResetPasswordForm /> },
     
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
     
    ],
  },
]);

function App() {


  return <UserContextProvider><RouterProvider router={router} /></UserContextProvider>
  

}

export default App;
