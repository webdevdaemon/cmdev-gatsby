import React from 'react'
// import PropTypes from 'prop-types'

class LayerBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {masterH, masterW, layers, } = this.props;
    function setLayers({img, opacity, }) {}
    return (
      <div className='layer-box'>
        <div className="layered back"></div>
        <div className="layered mid"></div>
        <div className="layered front"></div>
      </div>
    )
  }
}

// LayerBox.propTypes = {

// }

export default LayerBox
