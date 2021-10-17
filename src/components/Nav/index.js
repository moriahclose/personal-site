import React from "react";
import { useLocation } from "react-router";
import NavLink from "./NavLink";

const navLinks = [
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Experience',
    route: '/experience'
  },
  {
    label: 'Projects',
    route: '/projects'
  },
  {
    label: 'Contact',
    route: '/contact'
  }
]

export default function Nav() {
  const { pathname } = useLocation();

  return <nav className="nav">
    { navLinks.map(navLink =>
      <NavLink key={navLink.label} label={navLink.label} route={navLink.route} isCurrentRoute={pathname === navLink.route} />
    ) }
  </nav>
}