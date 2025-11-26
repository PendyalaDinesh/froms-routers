import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold',
  textDecoration: 'underline',
};

export default function NavBar() {
  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>{' | '}
      <NavLink to='/about' style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>{' | '}
      <NavLink to='/contact' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Contact</NavLink>{' | '}
      <NavLink to='/feedback' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Feedback</NavLink>{' | '}
      <NavLink to="/account/profile"style={({ isActive }) => (isActive ? activeStyle : undefined)}>Account Profile</NavLink>{' | '}
      <NavLink to="/account/settings"style={({ isActive }) => (isActive ? activeStyle : undefined)}>Account Settings</NavLink>
    </nav>
  );
}
