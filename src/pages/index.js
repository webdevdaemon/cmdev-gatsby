import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import FillViewport from '../components/FillViewport'
import '../layouts/index.scss'
import './index.scss'

const INIT_STATE = {}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...INIT_STATE}
  }

  static propTypes = {
    data: PropTypes.any,
    children: PropTypes.any,
  }

  render() {
    const {data, children} = this.props

    return (
      <main className={`page index landing-page`}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {name: 'description', content: 'Sample'},
            {name: 'keywords', content: 'sample, something'},
          ]}
        />
        <FillViewport />
      </main>
    )
  }
}

export default Index

export const query = graphql`
  query LandingPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allSitePage {
      edges {
        node {
          internalComponentName
          path
        }
      }
    }
  }
`
