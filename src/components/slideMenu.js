import React from 'react'
import PropTypes from 'prop-types'

const SlideMenu = ({klass, outerClick, visible, render, menuTitle}) => {
  return (
    <aside className={`${klass}`} onClick={
      (e) => {
        e.stopPropagation()
        e.preventDefault()
        visible && outerClick()
      }
    }>
      <div className={`${klass}-menu`}>
        <p className="slide-menu-title">{menuTitle}</p>

        {render()}
        
      </div>
    </aside>
  )
}

SlideMenu.propTypes = {
  menuTitle: PropTypes.string,
  klass: PropTypes.string,
  outerClick: PropTypes.func,
  visible: PropTypes.bool,
  render: PropTypes.func,
}

export default SlideMenu
