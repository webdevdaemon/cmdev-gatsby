import React from 'react'
import PropTypes from 'prop-types'


const BlogPostList = ({posts}) => {
  return (
    <React.Fragment>
      <ul className="blog-posts">
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
    </React.Fragment>
  )
}

BlogPostList.propTypes = {
  posts: PropTypes.array,
}

export default BlogPostList
