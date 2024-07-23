import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'
import Globalstyles from './Styles/Globalstyle'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <UserProvider>
        <Routes />
      </UserProvider>

      <ToastContainer autoClose={2000} theme="colored" />
      <Globalstyles />
    </>
  </React.StrictMode>
)
