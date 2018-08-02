import React from 'react'

const Footer = ({posts, children}) => {
  return <div className="footer">
    <ul className="footer-list posts">
        {posts.map(({node}, index) => <li key={index}>
            <a className="footer-posts-link" href={node.frontmatter.path}>
              {node.frontmatter.title}
            </a>
          </li>)}
      </ul>
      <div className="footer-content">{children}</div>
    <ul className="footer-list projects">
        {posts.map(({node}, index) => <li key={index}>
            <a className="footer-posts-link" href={node.frontmatter.path}>
              {node.frontmatter.title}
            </a>
          </li>)}
      </ul>
    </div>
}

export default Footer
