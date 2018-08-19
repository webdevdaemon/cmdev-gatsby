import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  height: '100vh',
  minHeight: '100vh',
  width: '100%',
  zIndex: 9999999,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0, bottom: 0, left: 0, right: 0,
}

export class FillViewport extends Component {
  static propTypes = {
    customStyles: PropTypes.object,
    children: PropTypes.any,
  }

  render() {
    const {
      children,
      customStyles
    } = this.props
    return (
      <section
        className='fill-viewport'
        style={Object.assign({}, styles, customStyles)}
      >
        {children}
      </section>
    )
  }
}

export default FillViewport
