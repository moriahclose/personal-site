import React from "react";

export default function NavLink({ label, route, isCurrentRoute }) {
  return <a href={ route } className={`nav-link ${isCurrentRoute && 'active'}`}>{ label }</a>;
}