import React from 'react'
import Headers from '../header'
import Footer from '../footer'

const Layout = ({children}) => {
  return (
    <>
    <Headers/>
   {children}
   <Footer/>
    </>
  )
}

export default Layout