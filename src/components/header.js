import React from 'react'
import Link from 'gatsby-link'
import {FaBars} from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'
// import '../../public/cm4h-logo.svg'

// const linkStyle = {
//   color: 'white',
//   textDecoration: 'none',
//   fontWeight: 100,
//   fontSize: '7vh',
//   margin: '0 auto',
// }

const Header = ({siteTitle, toggleLeft, toggleRight}) => (
  <div className="header">

    <a className="header-side left" onClick={toggleLeft}>
      <FaCode />
    </a>

    <div className="header-main">
      <h1 className="header-title">
        <Link to="/" className='header-title-link'>
          {siteTitle}
        </Link>
      </h1>
    </div>

    <a className="header-side right" onClick={toggleRight}>
      {/* <span className='icon bars'> */}
        <FaBars />
      {/* </span> */}
      {/* <p>{`MENU`}</p> */}
    </a>

  </div>
)

export default Header
