import * as React from 'react'
import NavLink from "../Navlink/NavLink";
import { MouseEvent } from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import { changeActiveNavLink } from "../../store/actions/navLinkActions";
import { ActiveNavLinkState } from  '../../store/types'

interface NavLink {
  link: string,
  text: string,
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void
}

interface RootNavLinkState {
  navLink: ActiveNavLinkState
}

export default function NavBar() {
  const activeNavIndex: number =
    useSelector((state: RootNavLinkState) => state.navLink.activeLinkIndex)
  const dispatch = useDispatch()

  const onClickNavLink = (e: MouseEvent, index: number) => {
    e.preventDefault()
    dispatch(changeActiveNavLink(index))
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
            active={index === activeNavIndex}
            link={navLink.link}
            text={navLink.text}
            onClick={navLink.onClick}
            key={index}/>
        })
      }
  </div>)
}