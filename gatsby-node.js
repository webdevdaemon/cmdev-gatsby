/* for more node-api details: https://www.gatsbyjs.org/docs/node-apis/ */

const path = require('path')
exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators
  const postTemplate = path.resolve('src/templates/post.js')
  return graphql(
    ` { allMarkdownRemark { edges { node { html id frontmatter { path title } } } } } `,
  ).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: node.frontmatter.layout === 'project' ?
          projectTemplate
          : postTemplate,

      })
    })
  })
}