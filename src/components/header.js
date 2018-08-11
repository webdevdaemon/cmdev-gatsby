import React from 'react'
import Link from 'gatsby-link'
import {IconMenu} from '../utils/icons'
import {IconCode} from '../utils/icons'

const Header = ({siteTitle, toggleLeft, toggleRight}) => (
  <div className="header">
    <a className="header-side left" onClick={toggleLeft}>
      <IconCode />
    </a>

    <div className="header-main">
      <h1 className="header-title">
        <Link to="/" className="header-title-link">
          {siteTitle}
        </Link>
      </h1>
    </div>

    <a className="header-side right" onClick={toggleRight}>
      <IconMenu />
    </a>
  </div>
)

export default Header
