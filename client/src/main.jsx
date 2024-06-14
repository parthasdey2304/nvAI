import React from 'react';
import { createRoot } from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Detection from './pages/Detection';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Redirect from './pages/Redirect_Loading';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  }, 
  {
    path: '/home',
    element: <Homepage />,
  }, 
  {
    path: '/detection',
    element: <Detection />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/github',
    element: <Redirect to='https://github.com/parthasdey2304/nvAI' />
  }
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain="dev-axjbuwwiq25fwovq.eu.auth0.com"
  clientId="ks1lkoAPLGz5LnFDfPZd9Aju7TCy0khD"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
      <RouterProvider router={router} />
      {/* <App /> */}
    </Auth0Provider>,
  );