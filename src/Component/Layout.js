import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
 const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}
export default Layout;