/* for more node-api details: https://www.gatsbyjs.org/docs/node-apis/ */

const path = require('path')

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators
  const Blog = path.resolve('src/templates/post.js')
  const Project = path.resolve('src/templates/project.js')
  const templates = {"Blog": Blog, "Project": Project}
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              html
              id
              frontmatter {
                title
                path
                layout
              }
            }
          }
        }
      }
    `,
  ).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const mdArr = [...res.data.allMarkdownRemark.edges]
    mdArr.forEach(({node}) => {
      const {path, title, layout} = node.frontmatter
      const component = layout ? templates[`${layout}`] : Blog
      createPage({path, title, component})
    })
  })
}
