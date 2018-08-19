import React, { Component, PropTypes } from 'react'

const sectionStyle = {
  backgroundColor: '#003F60',
  color: '#EBEFF0',
  width: '100%',
  margin: 0,
  padding: '1vh 1vw',
}

class Section extends Component {

  render() {
    const {children, className, customStyles} = this.props
    const styles = {...sectionStyle, ...customStyles}
    return (
      <section className={className} style={styles}>
        {children}  
      </section>
    )
  }
}

Section.propTypes = {

}

export default Section