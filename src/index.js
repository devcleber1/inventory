import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login'
import Register from './containers/Register'
import { UserProvider } from './hooks/UserContext'
import Globalstyles from './Styles/Globalstyle'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <UserProvider>
        <Login />
      </UserProvider>

      <ToastContainer autoClose={2000} theme="colored" />
      <Globalstyles />
    </>
  </React.StrictMode>
)
