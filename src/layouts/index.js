import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import SlideMenu from '../components/SlideMenu'

const INIT_STATE = {
  leftOpen: false,
  rightOpen: false,
  layoutClass: '',
  testList: ['PAGE 1', 'PAGE 2', 'ARTICLE 1', 'TEST TEST TEST'],
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...INIT_STATE}
  }

  static propTypes = {
    data: PropTypes.any,
    children: PropTypes.any,
  }

  isProject = ({node}) => node.frontmatter.layout === 'Project'
  toggleLeft = () => {
    this.setState({rightOpen: false})
    this.setState(prevState => ({
      leftOpen: !prevState.leftOpen,
      layoutClass: prevState.layoutClass === '' ? ' left-open' : '',
    }))
  }
  toggleRight = () => {
    this.setState({leftOpen: false})
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
    console.log(data, layoutClass)
    
    return (
      <main className={`layout${layoutClass}`}>

        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{name: 'description', content: 'Sample'}, {name: 'keywords', content: 'sample, something'}]}
        />

        <Header
          toggleLeft={this.toggleLeft}
          toggleRight={this.toggleRight}
          siteTitle={data.site.siteMetadata.title}
        />

        <Content>{children()}</Content>

        <SlideMenu
          menuTitle="cmDevBlog"
          klass="left"
          outerClick={this.hideAll}
          visible={layoutClass !== ''}
          
          render={() => (
            <ul className="slide-menu-list">
              {[...this.props.data.allMarkdownRemark.edges]
                .filter(x => !this.isProject(x))
                .map(({node}, index) => (
                  <li key={index}>
                    <a className="footer-posts-link" href={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          )}
        
        />

        <SlideMenu
          menuTitle="cmDevProjects"
          posts={[...this.props.data.allMarkdownRemark.edges]}
          klass="right"
          outerClick={this.hideAll}
          visible={layoutClass !== ''}
          
          render={() => (
            <ul className="slide-menu-list">
              {[...this.props.data.allMarkdownRemark.edges].filter(this.isProject).map(({node}, index) => (
                <li key={index}>
                  <a className="footer-posts-link" href={node.frontmatter.path}>
                    {node.frontmatter.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        
        />

        <Footer />

      </main>
    )
  }
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
