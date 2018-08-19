// import axios from 'axios'
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import ListCodepens from './ListCodepens'
import { isArray } from 'util'


// const SCRIPT_SRC = 'https://production-assets.codepen.io/assets/embed/ei.js'
// const URL = 'http://cpv2api.com/collection/XvKdxQ'

class ListCodepensWrapper extends Component {

  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() { }
  
  render() {
    const {pens} = this.props
    return (
      <div className="list-codepens-wrapper">
        {pens.length ? <ListCodepens pens={pens} /> : "Loading Pens" }
      </div>
    )
  }
}

export default ListCodepensWrapper
