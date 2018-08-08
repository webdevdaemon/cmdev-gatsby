import React from 'react'
import PropTypes from 'prop-types'

const Aside = ({klass, outerClick, visible, links}) => {
  return (
    <aside 
      className={`${klass}`}
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        visible && outerClick()
      }
    }>
      <div className={`${klass}-menu`}>
        <ul>
          {links.map((str, dex) => <li key={dex}>
            <h2> {str} </h2>
          </li>)}
        </ul>
      </div>
    </aside>
  )
}

Aside.propTypes = {
  klass: PropTypes.string,
  outerClick: PropTypes.func,
  visible: PropTypes.bool,
  links: PropTypes.array,
}

export default Aside
