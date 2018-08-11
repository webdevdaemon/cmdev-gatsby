import React from 'react'
import Nav from './Nav'

const Footer = ({children}) => {
  return (
    <div className="footer">
      <Nav klass={`footer-nav`}/>
    </div>
  )
}

export default Footer
