import React from 'react';
import '../../styles/MenuIcon.css';

export default function MenuIcon({ mobileNavIsOpen, toggleMobileNavIsOpen }) {
  return <button onClick={toggleMobileNavIsOpen} id="menu-icon" className={mobileNavIsOpen && 'open'}>
    <span></span>
    <span></span>
    <span></span>
  </button>
}