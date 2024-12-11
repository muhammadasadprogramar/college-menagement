import React from 'react'
import { Outlet } from 'react-router-dom'
import Pages from './pages/pages'

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App