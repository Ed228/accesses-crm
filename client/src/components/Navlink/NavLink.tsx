import React, {MouseEvent} from 'react'
import './Navlink.css'

export interface NavLinkProps {
  active: boolean,
  link: string,
  text: string,
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void
}

export default function NavLink(props: NavLinkProps) {
  let className = 'nav-link'
  if(props.active) {
    className += ' nav-link-active'
  }
  return(<a href={props.link} className={className} onClick={props.onClick}>{props.text}</a>)
}