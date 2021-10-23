import React from "react";
import { Link } from "react-router-dom";
import '../../styles/NavLink.css';

export default function NavLink({ label, route, isCurrentRoute }) {
  return <Link to={ route } className={`nav-link ${isCurrentRoute && 'active'}`}>{ label }</Link>;
}