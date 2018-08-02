import React from 'react'

export default function ProjectPostTemplate({data}) {
  const {markdownRemark: project} = data
  return (
    <div>
      <h1>{project.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: project.html}} />
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
        layout
      }
    }
  }
`
