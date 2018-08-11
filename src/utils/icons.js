import React from 'react'
import {Icon} from 'react-icons-kit'
import {withBaseIcon} from 'react-icons-kit'

import {pen} from 'react-icons-kit/icomoon/pen'
import {home} from 'react-icons-kit/icomoon/home'
import {menu} from 'react-icons-kit/icomoon/menu'
import {infoLarge} from 'react-icons-kit/typicons/infoLarge'
import {messages} from 'react-icons-kit/typicons/messages'
import {businessCard} from 'react-icons-kit/typicons/businessCard'
import {terminal} from 'react-icons-kit/iconic/terminal'
import {cube} from 'react-icons-kit/ionicons/cube'
import {code} from 'react-icons-kit/ikons/code'
import {browser} from 'react-icons-kit/ikons/browser'
import {browser_layout_3} from 'react-icons-kit/ikons/browser_layout_3'
import {browser_layout_2} from 'react-icons-kit/ikons/browser_layout_2'
import {browser_layout_1} from 'react-icons-kit/ikons/browser_layout_1'
import {blog} from 'react-icons-kit/icomoon/blog'
import {statsBars} from 'react-icons-kit/icomoon/statsBars'
import {statsBars2} from 'react-icons-kit/icomoon/statsBars2'
import {npm} from 'react-icons-kit/icomoon/npm'
import {css3} from 'react-icons-kit/icomoon/css3'
import {wordpress} from 'react-icons-kit/icomoon/wordpress'
import {htmlFive2} from 'react-icons-kit/icomoon/htmlFive2'
import {git} from 'react-icons-kit/icomoon/git'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {github} from 'react-icons-kit/icomoon/github'

const NavIcon = withBaseIcon({size: '100%', style: {color: '#ebeff0'}})
const HeaderIcon = withBaseIcon({size: '100%', style: {color: '#ebeff0'}})

export const IconHome = () => <NavIcon icon={home} />
export const IconAbout = () => <NavIcon icon={infoLarge} />
export const IconContact = () => <NavIcon icon={messages} />
export const IconResume = () => <NavIcon icon={businessCard} />
export const IconCube = () => <NavIcon icon={cube} />
export const IconBlog = () => <NavIcon icon={blog} />
export const IconPen = () => <Icon icon={pen} />
export const IconMenu = () => <Icon icon={menu} />
export const IconTerminal = () => <Icon icon={terminal} />
export const IconCode = () => <Icon icon={code} />
export const IconBrowser = () => <Icon icon={browser} />
export const IconBrowserLayout3 = () => <Icon icon={browser_layout_3} />
export const IconBrowserLayout2 = () => <Icon icon={browser_layout_2} />
export const IconBrowserLayout1 = () => <Icon icon={browser_layout_1} />
export const IconStatsBars = () => <Icon icon={statsBars} />
export const IconStatsBars2 = () => <Icon icon={statsBars2} />
export const IconNpm = () => <Icon icon={npm} />
export const IconCss3 = () => <Icon icon={css3} />
export const IconWordpress = () => <Icon icon={wordpress} />
export const IconHtmlFive2 = () => <Icon icon={htmlFive2} />
export const IconGit = () => <Icon icon={git} />
export const IconLinkedin = () => <Icon icon={linkedin} />
export const IconGithub = () => <Icon icon={github} />