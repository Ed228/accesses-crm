import * as React from 'react'
import NavLink from "../Navlink/NavLink";
import {MouseEvent} from "react";

interface NavLink {
  link: string,
  text: string,
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void
}

export default function NavBar() {
  const [activeNavLink, setActiveNavLink] = React.useState(0)
  const onClickNavLink = (e: MouseEvent, index: number) => {
    e.preventDefault()
    console.log('click')
    setActiveNavLink(index)
  }

  const NavBarContent: NavLink[] = [
    {
      link: '#',
      text: "Главная",
      onClick: (e: MouseEvent<HTMLAnchorElement>) => onClickNavLink(e, 0)
    },
    {
      link: '#',
      text: "Сохраненные",
      onClick: (e: MouseEvent<HTMLAnchorElement>) => onClickNavLink(e, 1)
    },
    {
      link: '#',
      text: "Удаленные",
      onClick: (e: MouseEvent<HTMLAnchorElement>) => onClickNavLink(e, 2)
    }
  ]
  return (
    <div className='main-nav'>
      {
        NavBarContent.map((navLink: NavLink, index: number) => {
          return <NavLink
            active={index === activeNavLink}
            link={navLink.link}
            text={navLink.text}
            onClick={navLink.onClick}
            key={index}/>
        })
      }
  </div>)
}