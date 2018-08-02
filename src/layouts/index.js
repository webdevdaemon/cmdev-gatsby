import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'

import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      projects: [],
    }
  }
  
  isPost = ({node}) => node.frontmatter.layout === null || !node.frontmatter.layout
  
  isProj = ({node}) =>
    node.frontmatter.layout === 'projects'
  
  componentDidMount() {
    const {children, data} = this.props
    console.dir(data)
    const entries = data.allMarkdownRemark.edges,
      posts = [...entries].filter(this.isPost),
      projects = [...entries].filter(this.isProj)
    this.setState({
      posts,
      projects,
    })
  }
  

  render() {
    // const {children, data} = this.props
    // console.dir(data)
    // const entries = data.allMarkdownRemark.edges,
      // pageTitle = data.markdownRemark.frontmatter.title,
      // posts = [...entries].filter(isPost), projects = entries.filter(isProj)
      const {data, children} = this.props
      const {posts, projects} = this.state
      const siteTitle = data.site.siteMetadata.title
      const pageTitle = data.markdownRemark.frontmatter.title
    return (
      <div className="layout index">
        <Helmet
          title={siteTitle}
          meta={[{name: 'description', content: 'Sample'}, {name: 'keywords', content: 'sample, something'}]}
        />
        <Header siteTitle={siteTitle} />
        <Content title={pageTitle}>
          {children}
        </Content>
        <Footer posts={posts} projects={projects} />
      </div>
    )
  }
}

Layout.propTypes = {children: PropTypes.func}

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
            layout
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
