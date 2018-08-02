import React from 'react'

export default function ProjectPost({data, children}) {
  const {markdownRemark: project} = data
  return (
    <div>
      <h1>{project.frontmatter.title}</h1>
      <div className={`project-markup`}
        dangerouslySetInnerHTML={{__html: project.html}} />
      <br /> <hr /> <br />
      {children}
    </div>
  )
}

export const projectQuery = graphql`
  query ProjectByPath($path: String!, $layout: String) {
    markdownRemark(frontmatter: {layout: {eq: $layout}}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
