import React from 'react'
import FaGithub from 'react-icons/fa'
import PostInfoBar from '../components/PostInfoBar'
// import Helmet from 'react-helmet'

export default function Project({data}) {
  const {markdownRemark: project} = data
  return (
    <div>
      <h1>{project.frontmatter.title}</h1>
      <PostInfoBar></PostInfoBar>

      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}

export const projectQuery = graphql`
  query ProjectPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
