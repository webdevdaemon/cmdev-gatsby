import React from 'react'
import PropTypes from 'prop-types'
import NavList from './NavList'

const Nav = ({klass}) => {
  return (
    <nav className={`nav ${klass}`}>
      <NavList />
    </nav>
  )
}

Nav.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    renderIcon: PropTypes.node,
  })),
  klass: PropTypes.string,
}

export default Nav