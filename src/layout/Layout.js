import React from 'react'
import Header from './Header'
import Main from './Main'

const Layout = ({ memos }) => {
  return (
    <>
      <Header/>
      <Main memos={memos}/>
    </>
  )
}

export default Layout
