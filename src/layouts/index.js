import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import './index.css'
import './index.scss'

import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

const projOk = ({node}) => node.frontmatter.layout === 'projects'
const postOk = ({node}) => node.frontmatter.layout === 'post'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: "",
    }
  }



  render() {
    const {children, data} = this.props;
    console.dir(data)
    const entries = data.allMarkdownRemark.edges,
      pageTitle = data.markdownRemark.frontmatter.title,
      posts = [...entries].filter(postOk), [...projects] = entries.filter(projOk)
    return (
      <div className="layout index">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{name: 'description', content: 'Sample'}, {name: 'keywords', content: 'sample, something'}]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content title={pageTitle}>
          {React.Children.map(children, child => React.cloneElement(child, {title: pageTitle}))}
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
