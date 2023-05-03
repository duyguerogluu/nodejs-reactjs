import React from 'react'
import { Header } from '../componenets'

interface IProps {
  children: React.ReactNode
}
const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
