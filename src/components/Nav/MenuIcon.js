import React from 'react';
import '../../styles/MenuIcon.css';

export default function MenuIcon({ classes, mobileNavIsOpen, toggleMobileNavIsOpen }) {
  return <button onClick={toggleMobileNavIsOpen} id="menu-icon" className={`${classes} ${mobileNavIsOpen && 'open'}`} >
    <span></span>
    <span></span>
    <span></span>
  </button>
}