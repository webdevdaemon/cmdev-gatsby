import React from 'react'
import Link from 'gatsby-link'
// import '../../public/cm4h-logo.svg'

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 100,
  fontSize: '7vh',
  margin: '0 auto',
}

const titleStyle = {
  textAlign: 'center',
}

const Header = ({siteTitle}) => (
  <div className="header">

    <div className="header-side left">
      <div></div>
    </div>

    <div classname="header-main">
      <h1 className="header-title" style={titleStyle}>
        <Link to="/" className='header-title-link'
          style={linkStyle}>
          {siteTitle}
        </Link>
      </h1>
    </div>

    <div className="header-side right">
      <div></div>
    </div>

  </div>
)

export default Header
