import React from 'React'
import Link from 'gatsby-link'
import {IoIosHome} from 'react-icons/io'
import {TiInfoLarge} from 'react-icons/ti'
import {IoIosJournal} from 'react-icons/io/'
import {IoChatbubbles} from 'react-icons/io'
import {IoMdCube} from 'react-icons/io'
import {IoIosListBox} from 'react-icons/io'

const list = [
  {
    title: 'Home',
    path: '/',
    renderIcon: IoIosListBox,
  },
  {
    title: 'About',
    path: '/about',
    renderIcon: IoMdCube,
  },
  {
    title: 'Blog',
    path: '/blog',
    renderIcon: IoChatbubbles,
  },
  {
    title: 'Contact',
    path: '/contact',
    renderIcon: IoIosJournal,
  },
  {
    title: 'Projects',
    path: '/projects',
    renderIcon: TiInfoLarge,
  },
  {
    title: 'Resume',
    path: '/resume',
    renderIcon: IoIosHome,
  },
]

const NavLinkWithIcon = props => {
  const {path, renderIcon, title} = props
  return (
    <div className={`nav-link-wrapper`}>
      <Link to={path} className={`nav-link icon title`}>
        <div className={`nav-link-icon icon title`}>
          {renderIcon}
        </div>
        <p className={`nav-link-title`}>{title}</p>
      </Link>
    </div>
  )
}

const NavList = () => {
  return (
    <div>
      {list.map((link, dex) => {
        return (
          <NavLinkWithIcon title={link.title} path={link.path} renderIcon={link.renderIcon} />
        )
      })} 
    </div>
  )
}

export {NavLinkWithIcon}
export default NavList
