import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from  '../components/header'
import Footer from  '../components/footer'
import Content from '../components/content'
import Aside from '../components/aside'

const INIT_STATE = {
  leftOpen: false,
  rightOpen: false,
  layoutClass: '',
  testList: [
    'PAGE 1',
    'PAGE 2',
    'ARTICLE 1',
    'TEST TEST TEST'
  ],
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...INIT_STATE}
  }

  toggleLeft = () => {
    this.setState({ rightOpen: false, })
    this.setState(prevState => ({
      leftOpen: !prevState.leftOpen,
      layoutClass: prevState.layoutClass === '' ? ' left-open' : '',
    }))
  }

  toggleRight = () => {
    this.setState({leftOpen: false, })
    this.setState(prevState => ({
      leftOpen: !prevState.rightOpen,
      layoutClass: prevState.layoutClass === '' ? ' right-open' : '',
    }))
  }

  hideAll = () => {
    const {leftOpen, rightOpen} = this.state
    if (!leftOpen && !rightOpen) return
    this.setState(INIT_STATE)
  }

  render() {
    const {data, children} = this.props
    const {layoutClass} = this.state
    console.log({data})
    return <main className={`layout${layoutClass}`}>
      <Helmet title={data.site.siteMetadata.title} meta={[{name: 'description', content: 'Sample'}, {name: 'keywords', content: 'sample, something'}]} />
      <Header toggleLeft={this.toggleLeft} toggleRight={this.toggleRight} siteTitle={data.site.siteMetadata.title} />
      <Content>{children()}</Content>
      <Aside
        klass="left"
        outerClick={this.hideAll}
        visible={layoutClass !== ''}
        links={this.state.testList}
      />
      <Aside
        klass="right"
        outerClick={this.hideAll}
        visible={layoutClass !== ''}
        links={this.state.testList}
      />
          
        <Footer posts={[...data.allMarkdownRemark.edges]} />
      </main>
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title 
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
    markdownRemark {
      frontmatter {
        title
      }
    }
  }
`