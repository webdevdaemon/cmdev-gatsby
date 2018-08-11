import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../layouts/index.scss'

export default function Index({data, ...props}) {
  const {edges: posts} = data.allMarkdownRemark
  return (
    <page className="page home">
      <section className="content title">
        <div className="title-wrap">
          <h1 className="home-title">{`CMDEV`}</h1>
          <h4 className="home-subtitle">
            {`Why Your Project or Team Cannot Live Another Day Without => CM <=`}
          </h4>
        </div>
      </section>
      <section className="content"></section>
      <section className="content"></section>
    </page>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
