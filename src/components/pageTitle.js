import React from 'react'
import PropTypes from 'prop-types'


const PageTitle = ({title}) => (
  <div className='page-title-wrap center'>
    <h2 className='page-title'>{title}</h2>
  </div>
)

PageTitle.propTypes = {
  title: PropTypes.string,
}

export default PageTitle
