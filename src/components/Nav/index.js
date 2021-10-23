import React, { useState } from "react";
import { useLocation } from "react-router";
import MenuIcon from "./MenuIcon";
import NavLink from "./NavLink";
import '../../styles/Nav.css';

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
  const [ mobileNavIsOpen, setMobileNavIsOpen ] = useState(false);

  function toggleMobileNavIsOpen() {
    setMobileNavIsOpen(s => !s);
  }

  return <>
    { mobileNavIsOpen && <div id="overlay" /> }
    <nav>
      <MenuIcon classes='mobile-nav' mobileNavIsOpen={mobileNavIsOpen} toggleMobileNavIsOpen={toggleMobileNavIsOpen} />
      <div className={`links-container ${!mobileNavIsOpen && 'closed'}`} >
        { navLinks.map(navLink =>
          <NavLink key={navLink.label} label={navLink.label} route={navLink.route} isCurrentRoute={pathname === navLink.route} />
        ) }
      </div>
    </nav>
  </>
}