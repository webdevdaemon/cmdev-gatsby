import React from 'react'
import PropTypes from 'prop-types'

const compStyles = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
}

const HeroImage = ({imageUrl, bgColor, customClass, customStyles, isParallax, maxHeight, ...props}) => {
  const propStyles = {
    maxHeight: `${maxHeight}`,
    backgroundColor: `${bgColor}`,
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: isParallax ? 'fixed' : 'initial',
  }

  return <div
    className={`${customClass}`}
    style={{...propStyles, ...compStyles, ...customStyles}}
    {...props}
  />
}

HeroImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  customStyles: PropTypes.object,
  customClass: PropTypes.string,
  isParallax: PropTypes.bool,
}

HeroImage.defaultProps = {
  bgColor: 'transparent',
  isParallax: false,
  maxHeight: '100vh',
}

export default HeroImage
