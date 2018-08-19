import React from 'react'
import PropTypes from 'prop-types'

import PageTitle from './PageTitle'

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
  }
  render() {
    const {title, children} = this.props
    return (
      <div className='content'>
        <PageTitle title={title} />
        {children}
      </div>
    )
  }
}

export default Content