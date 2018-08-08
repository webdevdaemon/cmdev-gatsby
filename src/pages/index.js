import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../layouts/index.scss'

export default function Index({data, ...props}) {
  console.log({props})
  const {edges: posts} = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      <ul>
        {posts.filter(post => post.node.frontmatter.title.length > 0).map(({node: post}) => {
          return (
            <li className="blog-post-preview" key={post.id}>
              <p>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </p>
              {/* <h2>{post.frontmatter.date}</h2> */}
              {/* <p>{post.excerpt}</p> */}
            </li>
          )
        })}
      </ul>
    </div>
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
