import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Pages from './pages/pages.jsx'
import ApplyITCT from './components/ApplyITCT.jsx'
import Biomatric from './components/Biomatric.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Pages />},
      {path: 'login', element: <Login />},
      {path: 'itct', element: <ApplyITCT />},
      {path: 'biomatric', element: <Biomatric />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
