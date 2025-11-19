import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/signin'
import HomePage from './home/home'
import { ClerkProvider } from '@clerk/clerk-react'
import DashboardPage from './dashboard/dashboard'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}
const router= createBrowserRouter([
  {
    element:<App/>,
    children:[
    {
      path:"/dashboard",
      element:<DashboardPage/>
    },
    ],
  },
   {
      path:"/",
      element:<HomePage/>
    },
  {
      path:"auth/signin",
      element:<SignInPage/>
    },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router}/>
    </ClerkProvider>  
  </StrictMode>,
)

