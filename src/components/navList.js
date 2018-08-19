import React from 'React'
import Link from 'gatsby-link'
// import {IconCube} from '../utils/icons'
// import {IconHome} from '../utils/icons'
// import {IconAbout} from '../utils/icons'
// import {IconBlog} from '../utils/icons'
// import {IconResume} from '../utils/icons'
// import {IconContact} from '../utils/icons'

// const _IconCube = (props) => <IconCube {...props} />
// const _IconHome = (props) => <IconHome {...props} />
// const _IconAbout = (props) => <IconAbout {...props} />
// const _IconBlog = (props) => <IconBlog {...props} />
// const _IconResume = (props) => <IconResume {...props} />
// const _IconContact = (props) => <IconContact {...props} />

// const list = [
//   {
//     title: 'Home',
//     path: '/',
//     renderIcon: function(props){ return _IconHome(props) },
//   },
//   {
//     title: 'About',
//     path: '/about',
//     renderIcon: function(props){ return _IconAbout(props) },
//   },
//   {
//     title: 'Blog',
//     path: '/blog',
//     renderIcon: function(props){ return _IconBlog(props) },
//   },
//   {
//     title: 'Contact',
//     path: '/contact',
//     renderIcon: function(props){ return _IconContact(props) },
//   },
//   {
//     title: 'Resume',
//     path: '/resume',
//     renderIcon: function(props){ return _IconResume(props) },
//   },
// ]

import list from '../utils/route-list'

const NavLinkWithIcon = props => {
  const {path, renderIcon, title} = props
  return (
    <div className={`nav-link-wrapper`}>
      <Link to={path} className={`nav-link`}>
        <div className={`nav-link-icon-wrapper`}>
          {renderIcon({
            className: `nav-link-icon ${title}`
          })}
        </div>
        <p className={`nav-link-title`}>{title}</p>
      </Link>
    </div>
  )
}

const NavList = props => {
  return (
    <div>
      {list.map((link, dex) => 
        <NavLinkWithIcon
          key={dex}
          path={link.path}
          title={link.title}
          renderIcon={
            (props) => link.renderIcon(props)
          }
        />
      )}
    </div>
  )
}

export {NavLinkWithIcon}
export default NavList
