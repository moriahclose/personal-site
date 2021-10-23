import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Nav from '../Nav';
import '../../styles/Layout.css';

export default function Layout({ children }) {
  return <div className="layout">
    <Nav />
    <div className="content">
      { children }
    </div>
  </div>
}