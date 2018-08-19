import axios from 'axios'
import React, {Component} from 'react'
import ListCodePens from '../components/ListCodepens'
import ListCodePensWrapper from '../components/ListCodePensWrapper'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'

const URL = 'http://cpv2api.com/collection/XvKdxQ'
const SCRIPT_SRC = 'https://production-assets.codepen.io/assets/embed/ei.js'

import './projects.scss'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Projects',
      pens: [],
    }
  }

  componentDidMount() {
    const pens = axios(URL)
      .then(({data: {data}}) => data)
      .then(pens => this.setState({pens}) && console.log(pens))
      .then(data => console.log(data))
      .catch(err => Error(err))
  }

  render() {
    const {pens} = this.state
    return (
      <div className="page projects">
        <PageTitle title={this.state.title} />
        <Section>
          <ListCodePensWrapper pens={pens} />
        </Section>
      </div>
    )
  }
}

export default Projects
