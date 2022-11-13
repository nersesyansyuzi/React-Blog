import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { MyContext } from './Context/Context'

import Menu from './Menu/Menu'

function Layout() {
    const {blog:{showMenu}} =useContext(MyContext)
  return (
    <>
      {showMenu && <Menu/>}
      <Outlet/>
    </>
  )
}

export default Layout