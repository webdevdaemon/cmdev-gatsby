import React from 'react'
import PropTypes from 'prop-types'

import PageTitle from './PageTitle'

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
  }
  render() {
    const {title} = this.props
    return (
      <div className='content'>
        <PageTitle title={title} />
        
        {this.props.children}
      </div>
    )
  }
}

export default Content